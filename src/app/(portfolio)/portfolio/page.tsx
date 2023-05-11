import KPHeading from '@/components/ui/KPHeading'
import Paragraph from '@/components/ui/KPParagraph'
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
        <KPHeading>Portfolio</KPHeading>
        <Paragraph>api/v1/similarity</Paragraph>
      </div>
    </div>
  )
}

export default page