"""
Traces the warm rim in the hero artwork and emits it as an SVG path.

The animated rim light has to sit exactly on the edge that is already in the
WebP. Hand-drawing a curve to match it is guesswork that shows the moment the
two disagree, so the path is measured from the image instead:

  for each column, find the row with the strongest warm response
  -> keep the contiguous run where that response is real
  -> smooth it, resample it, emit a cubic path

Re-run whenever the artwork changes:

    python scripts/extract-rim-path.py

It prints the path in the image's own pixel space, which is also the SVG
viewBox used by HeroRimLight, so the coordinates carry across unchanged.
"""

from __future__ import annotations

import os

from PIL import Image

HERE = os.path.dirname(os.path.abspath(__file__))
SOURCE = os.path.join(HERE, "..", "src", "assets", "hero", "iknow-hero-home.webp")

# A pixel counts as "rim" when red leads blue by this much. The artwork's cool
# body sits far below it, so the threshold separates cleanly.
# Tuned by sweep: below these the trace still lands on the rim, and the run
# stops growing past 12/45 — that is where the rim genuinely fades out.
WARMTH_MIN = 12
BRIGHT_MIN = 45
# Anchor count for the emitted path. Enough to hold the curvature, few enough
# that the `d` attribute stays readable.
ANCHORS = 26


def trace(image: Image.Image):
    """Column-wise peak of the warm response, as (x, y) pixel coordinates."""
    px = image.load()
    width, height = image.size
    found = []

    for x in range(width):
        best_y, best_score = None, 0
        for y in range(height):
            r, g, b = px[x, y][:3]
            warmth = r - b
            if warmth < WARMTH_MIN or r < BRIGHT_MIN:
                continue
            # Weight by brightness so the core of the rim wins over its bloom.
            score = warmth * r
            if score > best_score:
                best_y, best_score = y, score
        if best_y is not None:
            found.append((x, best_y, best_score))

    return found


def longest_run(points, max_jump: int = 14):
    """Keeps the longest stretch where the traced row moves smoothly."""
    if not points:
        return []
    runs, current = [], [points[0]]
    for prev, item in zip(points, points[1:]):
        if item[0] - prev[0] <= 2 and abs(item[1] - prev[1]) <= max_jump:
            current.append(item)
        else:
            runs.append(current)
            current = [item]
    runs.append(current)
    return max(runs, key=len)


def smooth(points, window: int = 21):
    """Moving average over the row values; the raw trace is noisy by a pixel."""
    ys = [p[1] for p in points]
    out = []
    half = window // 2
    for i in range(len(points)):
        lo, hi = max(0, i - half), min(len(ys), i + half + 1)
        out.append((points[i][0], sum(ys[lo:hi]) / (hi - lo)))
    return out


def resample(points, count: int):
    """Even spacing along the trace, so the cubic segments are well behaved."""
    if len(points) <= count:
        return points
    step = (len(points) - 1) / (count - 1)
    return [points[round(i * step)] for i in range(count)]


def to_cubic_path(points) -> str:
    """
    Catmull-Rom through the anchors, converted to cubic Beziers.

    A polyline would track the curve just as accurately but gives the stroke
    visible corners at this scale; cubics keep it smooth.
    """
    pts = [(round(x, 1), round(y, 1)) for x, y in points]
    d = [f"M {pts[0][0]} {pts[0][1]}"]
    for i in range(len(pts) - 1):
        p0 = pts[i - 1] if i > 0 else pts[i]
        p1, p2 = pts[i], pts[i + 1]
        p3 = pts[i + 2] if i + 2 < len(pts) else p2
        c1 = (round(p1[0] + (p2[0] - p0[0]) / 6, 1), round(p1[1] + (p2[1] - p0[1]) / 6, 1))
        c2 = (round(p2[0] - (p3[0] - p1[0]) / 6, 1), round(p2[1] - (p3[1] - p1[1]) / 6, 1))
        d.append(f"C {c1[0]} {c1[1]} {c2[0]} {c2[1]} {p2[0]} {p2[1]}")
    return " ".join(d)


def main():
    image = Image.open(SOURCE).convert("RGB")
    raw = trace(image)
    run = longest_run(raw)
    if not run:
        raise SystemExit("no rim found — check WARMTH_MIN / BRIGHT_MIN")

    path = to_cubic_path(resample(smooth(run), ANCHORS))

    print(f"viewBox: 0 0 {image.width} {image.height}")
    print(f"traced columns: {len(raw)}   kept run: {len(run)}")
    print(f"x range: {run[0][0]}..{run[-1][0]}   y range: "
          f"{min(p[1] for p in run)}..{max(p[1] for p in run)}")
    print()
    print(path)


if __name__ == "__main__":
    main()
