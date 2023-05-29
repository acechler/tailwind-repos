import Image from 'next/image'
import Accordion from './components/Accordion/Accordion'
import TestAccordion from './components/TestAccordion'

export default function Home() {
  return (
    <main className="bg-slate-800 min-h-screen p-24">
       {TestAccordion()}
    </main>
  )
}
