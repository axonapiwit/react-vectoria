import { forwardRef } from 'react'
import { Icon } from '../components/Icon'
import type { IconProps } from '../types'

export const ArrowRight = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} aria-label="Arrow Right" {...props}>
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </Icon>
))
ArrowRight.displayName = 'ArrowRight'
