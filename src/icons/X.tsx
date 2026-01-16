import { forwardRef } from 'react'
import { Icon } from '../components/Icon'
import type { IconProps } from '../types'

export const X = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} aria-label="Close" {...props}>
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </Icon>
))
X.displayName = 'X'
