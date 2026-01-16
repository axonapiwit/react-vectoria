import { forwardRef } from 'react'
import { Icon } from '../components/Icon'
import type { IconProps } from '../types'

export const Search = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} aria-label="Search" {...props}>
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </Icon>
))
Search.displayName = 'Search'
