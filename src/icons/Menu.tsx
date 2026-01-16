import { forwardRef } from 'react'
import { Icon } from '../components/Icon'
import type { IconProps } from '../types'

export const Menu = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} aria-label="Menu" {...props}>
    <path d="M4 12h16" />
    <path d="M4 6h16" />
    <path d="M4 18h16" />
  </Icon>
))
Menu.displayName = 'Menu'
