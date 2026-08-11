import { cn } from '@/lib/utils'

type LogoProps = {
  className?: string
  tone?: 'light' | 'dark'
}

export function Logo({ className, tone = 'light' }: LogoProps) {
  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <span
        className="grid size-8 place-items-center rounded-[9px] bg-primary text-primary-foreground"
        aria-hidden="true"
      >
        <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
          <path
            d="M3 14 8.5 3 14 14"
            stroke="currentColor"
            strokeWidth="1.9"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.4 9.4h6.2"
            stroke="currentColor"
            strokeWidth="1.9"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <span className="flex items-baseline gap-1.5">
        <span
          className={cn(
            'font-display text-[1.35rem] leading-none tracking-tight font-bold',
            tone === 'light' ? 'text-slate-900' : 'text-white'
          )}
        >
          Areco
        </span>
      </span>
    </span>
  )
}
