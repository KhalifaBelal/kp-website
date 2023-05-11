import { VariantProps, cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import { HTMLAttributes, forwardRef } from 'react'

export const kpParagraphVariants = cva(
  'max-w-prose text-zinc-700 dark:text-zinc-300 mb-2',
  {
    variants: {
      size: {
        default: 'text-base sm:text-lg',
        sm: 'text-sm sm:text-base',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  }
)

interface KPParagraphProps
  extends HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof kpParagraphVariants> {}

const KPParagraph = forwardRef<HTMLParagraphElement, KPParagraphProps>(
  ({ className, size, children, ...props }, ref) => {
    return (
      <p
        ref={ref}
        {...props}
        className={cn(kpParagraphVariants({ size, className }))}>
        {children}
      </p>
    )
  }
)

KPParagraph.displayName = 'Paragraph'

export default KPParagraph