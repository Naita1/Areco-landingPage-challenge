import type * as React from 'react'
import { cn } from '@/lib/utils'

export function Container({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('mx-auto w-full max-w-6xl px-5 sm:px-8', className)}
      {...props}
    />
  )
}

type SectionLabelProps = React.HTMLAttributes<HTMLSpanElement> & {
  tone?: 'light' | 'dark'
}

export function SectionLabel({
  className,
  tone = 'light',
  children,
  ...props
}: SectionLabelProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 text-[0.7rem] font-medium tracking-[0.18em] uppercase',
        tone === 'light' ? 'text-muted-foreground' : 'text-ink-muted',
        className,
      )}
      {...props}
    >
      <span
        className={cn(
          'h-1.5 w-1.5 rounded-full',
          tone === 'light' ? 'bg-primary' : 'bg-primary',
        )}
        aria-hidden="true"
      />
      {children}
    </span>
  )
}

const ctaBase =
  'group inline-flex h-12 items-center justify-center gap-2 rounded-lg px-6 text-[0.95rem] font-medium transition-all duration-200 outline-none focus-visible:ring-3 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background active:translate-y-px disabled:pointer-events-none disabled:opacity-60'

const ctaVariants = {
  primary:
    'bg-amber-600 text-white shadow-sm hover:bg-amber-700',
  secondary:
    'border border-border bg-card text-foreground hover:border-foreground/25 hover:bg-muted',
  'secondary-dark':
    'border border-ink-border bg-white/[0.04] text-ink-foreground hover:bg-white/[0.09]',
} as const

type CtaLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: keyof typeof ctaVariants
}

export function CtaLink({
  className,
  variant = 'primary',
  children,
  ...props
}: CtaLinkProps) {
  return (
    <a
      className={cn(ctaBase, ctaVariants[variant], className)}
      {...props}
    >
      {children}
    </a>
  )
}
