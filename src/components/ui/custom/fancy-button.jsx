import * as React from 'react'
import { cn } from '@/lib/utils'

const FancyButton = React.forwardRef(
  ({ className, children, ...props }, ref) => {
    return (
      <>
        <style>{`
          @keyframes shine-sweep {
            0% { transform: translateX(-150%) }
            100% { transform: translateX(150%) }
          }
        `}</style>
        <button
          ref={ref}
          className={cn(
            'relative inline-flex w-fit items-center justify-center overflow-hidden rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-transform duration-200 hover:scale-105',
            className
          )}
          {...props}
        >
          <span className="relative z-10">{children}</span>
          <span
            className="pointer-events-none absolute inset-0 z-0"
            aria-hidden
          >
            <span
              className="absolute top-0 h-full w-1/2 bg-[linear-gradient(60deg,transparent,rgba(255,255,255,0.9),transparent)]"
              style={{ animation: 'shine-sweep 1.5s linear infinite' }}
            />
          </span>
        </button>
      </>
    )
  }
)

FancyButton.displayName = 'FancyButton'

export { FancyButton }
