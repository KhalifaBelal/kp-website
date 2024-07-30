import KPHeading from "@/components/ui/KPHeading";
import KPRow from "@/ui/KPRow";
import KPParagraph from "@/ui/KPParagraph";
import KPSection from "@/ui/KPSection";
import { KPButton, kpButtonVariants } from "@/components/ui/KPButton";
import Link from "next/link";
import Image from 'next/image';
import { cn } from '@/lib/utils';

function Founders() {
  return (
    <KPSection id="concept" height={"padding"}>
      <div className='flex flex-col items-center justify-center gap-8'>
        <KPHeading className="text-white">
          Meet the Founders
        </KPHeading>
        <KPRow className='items-stretch'>
          <KPRow
            wrapperContainer="disable"
            flexDirection="col"
            alignItems="start"
            className='bg-zinc-800 p-6 rounded-md'
          >
            <Image src={"/basel-khalifa.png"} alt='basel-khalifa' width={500} height={615} />
            <KPHeading className="text-white">
              Basel Khalifa
            </KPHeading>
            <KPParagraph>
              I am the guy connecting the dots. I link investors with ideas, validate business concepts, build the teams that execute those ideas, and handle investor relations. As the strategic head behind Khalifa Partners, I ensure that each venture is meticulously planned and executed to stand the test of time.
            </KPParagraph>
            <div className='flex flex-col items-start justify-center gap-2'>
              <span className='text-sm text-kp-red font-medium italic'>let&apos;s connect</span>
              <div className='flex items-center justify-center gap-2'>
                <Link href={"https://www.linkedin.com/in/basel-khalifa-06b6ab1a0/"} className={cn(kpButtonVariants(), 'aspect-square w-auto h-auto p-1 bg-zinc-700')}><Image src={"/linkedin-icon.png"} alt='linkedin-icon' width={48} height={48} /></Link>
                <Link href={"https://www.instagram.com/basel.khalifa/"} className={cn(kpButtonVariants(), 'aspect-square w-auto h-auto p-1 bg-zinc-700')}><Image src={"/instagram-icon.png"} alt='instagram-icon' width={48} height={48} /></Link>
              </div>
            </div>
          </KPRow>
          <KPRow
            wrapperContainer="disable"
            flexDirection="col"
            alignItems="start"
            className='bg-zinc-800 p-6 rounded-md'
          >
            <Image src={"/belal-khalifa.png"} alt='belal-khalifa' width={500} height={615} />
            <KPHeading className="text-white">
              Belal Khalifa
            </KPHeading>
            <KPParagraph>
              I am the creative and technical head of Khalifa Partners, managing the technical infrastructure of our projects and overseeing the creative aspects, including product and brand design. My role ensures that our ventures are not only functional but also innovative and visually compelling.
            </KPParagraph>
            <div className='flex flex-col items-start justify-center gap-2'>
              <span className='text-sm text-kp-red font-medium italic'>let&apos;s connect</span>
              <div className='flex items-center justify-center gap-2'>
                <Link href={"https://www.linkedin.com/in/belal-khalifa-b22553307/"} className={cn(kpButtonVariants(), 'aspect-square w-auto h-auto p-1 bg-zinc-700')}><Image src={"/linkedin-icon.png"} alt='linkedin-icon' width={48} height={48} /></Link>
                <Link href={"https://www.instagram.com/belal.emad.khalifa/"} className={cn(kpButtonVariants(), 'aspect-square w-auto h-auto p-1 bg-zinc-700')}><Image src={"/instagram-icon.png"} alt='instagram-icon' width={48} height={48} /></Link>
              </div>
            </div>
          </KPRow>
        </KPRow>
      </div >
    </KPSection >
  );
}

export default Founders;
