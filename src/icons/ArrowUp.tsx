import { forwardRef } from 'react'
import { Icon } from '../components/Icon'
import type { IconProps } from '../types'

export const ArrowUp = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} aria-label="Arrow Up" {...props}>
    <path d="M12 19V5" />
    <path d="m5 12 7-7 7 7" />
  </Icon>
))
ArrowUp.displayName = 'ArrowUp'
