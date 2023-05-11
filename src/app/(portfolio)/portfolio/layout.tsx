import Navbar from '@/components/Navbar'
import '@/styles/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // offset navbar height
  return <section className='pt-20'>
  <Navbar />{children}</section>
}