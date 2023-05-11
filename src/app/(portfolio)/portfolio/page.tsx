import LargeHeading from '@/components/ui/LargeHeading'
import Paragraph from '@/components/ui/Paragraph'
import { FC } from 'react'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Khalifa Partners | Portfolio',
  description: 'Discover our Hall of Partners.',
}

const page: FC = () => {
  return (
    <div className='container max-w-7xl mx-auto mt-12'>
      <div className='flex flex-col items-center gap-6'>
        <LargeHeading>Portfolio</LargeHeading>
        <Paragraph>api/v1/similarity</Paragraph>
      </div>
    </div>
  )
}

export default page