import { Link } from 'react-router-dom'

import logo from '../../assets/iknow-solutions.png'
import { useContent, useLocalePath } from '../../i18n/context'

type WordmarkProps = {
  /** Renders as a link to home unless this is the home hero lockup. */
  asLink?: boolean
  className?: string
}

/**
 * The identity lockup: the supplied iKNOW SOLUTIONS artwork. Sized from
 * --wordmark-size so header, footer and hero keep sharing one scale, and
 * labelled on the wrapper so the image itself stays decorative.
 */
export function Wordmark({ asLink = true, className }: WordmarkProps) {
  const localePath = useLocalePath()
  const { nav } = useContent()

  const image = (
    <img
      className="wordmark__image"
      src={logo}
      alt=""
      width={500}
      height={137}
      draggable={false}
    />
  )

  if (!asLink) {
    return (
      <span className={`wordmark ${className ?? ''}`} aria-hidden="true">
        {image}
      </span>
    )
  }

  return (
    <Link
      to={localePath('/')}
      className={`wordmark ${className ?? ''}`}
      aria-label={nav.homeAria}
    >
      {image}
    </Link>
  )
}
