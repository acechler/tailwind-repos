import Image from "next/image";
import TestAccordion from "./components/Accordion/TestAccordion"
import TestCard from "./components/Card/TestCard"
 
export default function Home() {
  return (
    <main className="bg-slate-800 min-h-screen p-24">
     <TestCard />
    </main>
  );
}
