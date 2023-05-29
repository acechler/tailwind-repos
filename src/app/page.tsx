import Image from "next/image";
import Accordion from "./components/Accordion/Accordion";
import TestAccordion from "./components/Accordion/TestAccordion";
import Card from "./components/Card/Card";

export default function Home() {
  return (
    <main className="bg-slate-800 min-h-screen p-24">
      {/* Place Cards horrizontal and have a gap between them. */}
      <div className="flex flex-row gap-3 leading-relaxed">
        <Card
          title="Card Template"
          content={
            <>
              <p className="text-gray-500 dark:text-gray-400">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
                praesentium magni eos obcaecati itaque saepe tenetur?
                Perferendis quo aliquam, assumenda omnis, odit unde
                necessitatibus iste numquam animi veritatis id quod.
              </p>
            </>
          }
        />
        <Card
          title="Card Template Two"
          content={
            <>
              <p className="text-gray-500 dark:text-gray-400">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
                praesentium magni eos obcaecati itaque saepe tenetur?
                Perferendis quo aliquam, assumenda omnis, odit unde
                necessitatibus iste numquam animi veritatis id quod.
              </p>

              <p className="text-gray-500 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus accusamus harum veritatis tenetur, quaerat officiis
                id, vel itaque ullam laudantium deleniti nihil fugit quas
                molestias, modi recusandae veniam esse fugiat!
              </p>
            </>
          }
        />

        <Card
          title="Card Template three"
          content={
            <>
              <p className="text-gray-500 dark:text-gray-400">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
                praesentium magni eos obcaecati itaque saepe tenetur?
                Perferendis quo aliquam, assumenda omnis, odit unde
                necessitatibus iste numquam animi veritatis id quod.
              </p>

              <p className="text-gray-500 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus accusamus harum veritatis tenetur, quaerat officiis
                id, vel itaque ullam laudantium deleniti nihil fugit quas
                molestias, modi recusandae veniam esse fugiat!
              </p>
            </>
          }
        />
      </div>
    </main>
  );
}
