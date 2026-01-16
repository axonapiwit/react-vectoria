import { forwardRef } from 'react'
import type { IconComponent, IconProps } from '../types'
import type { HTMLMotionProps } from 'framer-motion'
import { motion } from 'framer-motion'
import { variants } from '../animations/framer'

export interface AnimatedIconProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  icon: IconComponent
  iconProps?: IconProps
  variant?: keyof typeof variants
}

export const AnimatedIcon = forwardRef<HTMLDivElement, AnimatedIconProps>(
  ({ icon: IconComp, iconProps, variant, ...motionProps }, ref) => {
    const variantProps = variant ? variants[variant] : {}

    return (
      <motion.div
        ref={ref}
        style={{ display: 'inline-flex' }}
        {...variantProps}
        {...motionProps}
      >
        <IconComp {...iconProps} />
      </motion.div>
    )
  }
)

AnimatedIcon.displayName = 'AnimatedIcon'
