import React from "react";
import Card from "./Card";

const TestCard = () => {
  return (
    <div>
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
          title="Card Template Three"
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
    </div>
  );
};

export default TestCard;
