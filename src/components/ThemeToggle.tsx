'use client'

import { useTheme } from 'next-themes'

import { Icons } from '@/components/Icons'
import { KPButton } from '@/components/ui/KPButton'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/DropdownMenu'

export function ThemeToggle() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <KPButton variant='ghost' size='sm'>
          <Icons.Sun className='rotate-0 scale-100 transition-all hover:text-zinc-900 dark:-rotate-90 dark:scale-0 dark:text-zinc-400 dark:hover:text-zinc-100' />
          <Icons.Moon className='absolute rotate-90 scale-0 transition-all hover:text-zinc-900 dark:rotate-0 dark:scale-100 dark:text-zinc-400 dark:hover:text-zinc-100' />
          <span className='sr-only'>Toggle theme</span>
        </KPButton>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end' forceMount>
        <DropdownMenuItem onClick={() => setTheme('light')}>
          <Icons.Sun className='mr-2 h-4 w-4' />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>
          <Icons.Moon className='mr-2 h-4 w-4' />
          <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('system')}>
          <Icons.Laptop className='mr-2 h-4 w-4' />
          <span>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}