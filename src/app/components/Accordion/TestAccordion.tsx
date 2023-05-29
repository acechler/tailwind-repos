// the TestAccordion component renders two instances of the Accordion component. The first instance has custom button and content CSS classes, and it is marked as the first of many accordions. The second instance uses default styles.

// By customizing the props passed to the Accordion component, you can control the text, content, appearance, and behavior of each individual accordion within the TestAccordion component.

import React from 'react'
import Accordion from './Accordion'


const TestAccordion = () => {
  return (
    <div>
        <Accordion
        text="Accordion Template"
        content={
          <>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              This is the first of hidden contentent in the accordion.
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              This is the second of hidden content inside the accordion.
            </p>
            <p className="text-gray-500 dark:text-gray-400">Add as many elements necessary as you want inside content property</p>
          </>
        }
        buttonClassName="bg-blue-500 text-white"
        contentClassName="bg-gray-200 dark:bg-gray-700"
        firstOfMany={true}
      />
      <Accordion text="Accordion Template 2"
       content={<>
        <p className="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ex iure tempore numquam maxime illo maiores accusantium in modi, quae, laudantium porro praesentium libero nesciunt veritatis id qui similique accusamus.</p>
       </>}/>
    </div>
  )
}

export default TestAccordion