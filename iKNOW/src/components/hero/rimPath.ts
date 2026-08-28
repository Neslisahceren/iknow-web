/**
 * The lit edge of the hero artwork, in the image's own pixel space.
 *
 * Measured from the WebP rather than drawn by hand — see
 * `scripts/extract-rim-path.py`. The script walks the artwork column by column,
 * takes the row with the strongest warm response, keeps the contiguous run and
 * fits a cubic through it. Re-run it if the artwork is ever replaced:
 *
 *     python scripts/extract-rim-path.py
 *
 * Coordinates are in the source image's pixels, which is also the SVG viewBox,
 * so the animated light sits exactly on the edge that is already in the image.
 */
export const RIM_VIEWBOX = { width: 1672, height: 940 } as const

/**
 * Traced span: x 943 → 1367, y 247 → 464. That is the full stretch where the
 * rim is genuinely lit; past it the edge fades out in the artwork itself.
 */
export const RIM_PATH =
  'M 943 261.3 C 945.8 264.2 954.3 272.8 960 278.8 C 965.7 284.8 971.3 292.5 977 297.1 ' +
  'C 982.7 301.8 988.3 303.5 994 306.7 C 999.7 309.9 1005.3 313 1011 316.3 ' +
  'C 1016.7 319.6 1022.3 323.4 1028 326.7 C 1033.7 330 1039.3 333.2 1045 336.3 ' +
  'C 1050.7 339.4 1056.3 342.2 1062 345.1 C 1067.7 348 1073.3 350.9 1079 353.7 ' +
  'C 1084.7 356.5 1090.3 359.2 1096 361.9 C 1101.7 364.6 1107.3 367.1 1113 369.7 ' +
  'C 1118.7 372.3 1124.3 375.1 1130 377.6 C 1135.7 380.2 1141.5 382.6 1147 385 ' +
  'C 1152.5 387.4 1157.5 389.8 1163 392.1 C 1168.5 394.5 1174.3 396.8 1180 399.1 ' +
  'C 1185.7 401.4 1191.3 403.6 1197 405.8 C 1202.7 408 1208.3 410.1 1214 412.3 ' +
  'C 1219.7 414.5 1225.3 416.8 1231 418.9 C 1236.7 421 1242.3 423.1 1248 425.2 ' +
  'C 1253.7 427.3 1259.3 429.3 1265 431.3 C 1270.7 433.3 1276.3 435.2 1282 437.2 ' +
  'C 1287.7 439.1 1293.3 441.1 1299 443 C 1304.7 444.9 1310.3 446.8 1316 448.7 ' +
  'C 1321.7 450.6 1327.3 452.4 1333 454.3 C 1338.7 456.2 1344.3 458.2 1350 459.8 ' +
  'C 1355.7 461.4 1364.2 463 1367 463.6'
