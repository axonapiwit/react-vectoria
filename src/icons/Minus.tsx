import { forwardRef } from 'react'
import { Icon } from '../components/Icon'
import type { IconProps } from '../types'

export const Minus = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} aria-label="Minus" {...props}>
    <path d="M5 12h14" />
  </Icon>
))
Minus.displayName = 'Minus'
