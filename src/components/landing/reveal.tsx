import type * as React from 'react'
import { motion, useReducedMotion } from 'motion/react'

type RevealProps = {
  children: React.ReactNode
  className?: string
  delay?: number
  y?: number
  as?: 'div' | 'li' | 'span'
}

export function Reveal({
  children,
  className,
  delay = 0,
  y = 16,
  as = 'div',
}: RevealProps) {
  const reduce = useReducedMotion()
  const MotionTag = motion[as]

  return (
    <MotionTag
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{
        duration: 0.55,
        delay,
        ease: [0.21, 0.5, 0.32, 1],
      }}
    >
      {children}
    </MotionTag>
  )
}
