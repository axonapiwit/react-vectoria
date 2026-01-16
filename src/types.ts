import type { SVGProps, ComponentType } from 'react'

export type AnimationType = 'spin' | 'pulse' | 'bounce' | 'shake' | 'ping'

export interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number | string
  color?: string
  animation?: AnimationType
  'aria-label'?: string
}

export type IconComponent = ComponentType<IconProps>
