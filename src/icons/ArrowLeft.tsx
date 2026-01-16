import { forwardRef } from 'react'
import { Icon } from '../components/Icon'
import type { IconProps } from '../types'

export const ArrowLeft = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} aria-label="Arrow Left" {...props}>
    <path d="M19 12H5" />
    <path d="m12 19-7-7 7-7" />
  </Icon>
))
ArrowLeft.displayName = 'ArrowLeft'
