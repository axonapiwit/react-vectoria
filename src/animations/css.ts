import type { AnimationType } from '../types'

export const animationClasses: Record<AnimationType, string> = {
  spin: 'rv-spin',
  pulse: 'rv-pulse',
  bounce: 'rv-bounce',
  shake: 'rv-shake',
  ping: 'rv-ping',
}

export const getAnimationClass = (animation: AnimationType): string => {
  return animationClasses[animation]
}
