import { forwardRef } from 'react'
import { Icon } from '../components/Icon'
import type { IconProps } from '../types'

export const ArrowDown = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} aria-label="Arrow Down" {...props}>
    <path d="M12 5v14" />
    <path d="m19 12-7 7-7-7" />
  </Icon>
))
ArrowDown.displayName = 'ArrowDown'
