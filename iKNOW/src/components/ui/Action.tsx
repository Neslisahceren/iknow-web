import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'
import { useLocalePath } from '../../i18n/context'

type ActionProps = {
  /** Locale-neutral path, or an absolute `http`/`mailto:`/`tel:` target. */
  to: string
  children: ReactNode
  /** `stacked` places the ring below the label, as in the home hero. */
  variant?: 'default' | 'stacked'
  /** `ink` recolours the control for light sections. */
  tone?: 'light' | 'ink'
  className?: string
}

/**
 * The site's single call-to-action form: a label beside a thin ring holding
 * an arrow. Used everywhere in place of filled buttons, which would sit
 * badly against the near-black grounds.
 */
export function Action({
  to,
  children,
  variant = 'default',
  tone = 'light',
  className,
}: ActionProps) {
  const localePath = useLocalePath()
  const isExternal = to.startsWith('http') || to.startsWith('mailto:') || to.startsWith('tel:')

  const classes = [
    'action',
    variant === 'stacked' ? 'action--stacked' : '',
    tone === 'ink' ? 'action--ink' : '',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ')

  const inner = (
    <>
      <span>{children}</span>
      <span className="action__ring" aria-hidden="true">
        <ArrowRight size={16} strokeWidth={1.75} />
      </span>
    </>
  )

  if (isExternal) {
    return (
      <a className={classes} href={to}>
        {inner}
      </a>
    )
  }

  return (
    <Link className={classes} to={localePath(to)}>
      {inner}
    </Link>
  )
}
