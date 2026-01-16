import { forwardRef } from 'react'
import type { IconProps } from '../types'
import { getAnimationClass } from '../animations/css'

export interface BaseIconProps extends IconProps {
  children: React.ReactNode
  viewBox?: string
}

export const Icon = forwardRef<SVGSVGElement, BaseIconProps>(
  (
    {
      size = 24,
      color = 'currentColor',
      animation,
      className,
      children,
      viewBox = '0 0 24 24',
      'aria-label': ariaLabel,
      ...props
    },
    ref
  ) => {
    const animationClass = animation ? getAnimationClass(animation) : ''
    const combinedClassName = [className, animationClass].filter(Boolean).join(' ')

    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox={viewBox}
        fill="none"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={combinedClassName || undefined}
        role="img"
        aria-label={ariaLabel}
        {...props}
      >
        {children}
      </svg>
    )
  }
)

Icon.displayName = 'Icon'
