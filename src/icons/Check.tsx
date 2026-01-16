import { forwardRef } from 'react'
import { Icon } from '../components/Icon'
import type { IconProps } from '../types'

export const Check = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} aria-label="Check" {...props}>
    <path d="M20 6 9 17l-5-5" />
  </Icon>
))
Check.displayName = 'Check'
