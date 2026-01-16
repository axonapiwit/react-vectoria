import { forwardRef } from 'react'
import { Icon } from '../components/Icon'
import type { IconProps } from '../types'

export const Plus = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} aria-label="Plus" {...props}>
    <path d="M12 5v14" />
    <path d="M5 12h14" />
  </Icon>
))
Plus.displayName = 'Plus'
