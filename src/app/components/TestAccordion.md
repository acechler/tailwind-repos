# TestAccordion Component
Design is based off of Flowbite: https://flowbite.com/docs/components/accordion/

The `TestAccordion` component is a wrapper component that renders multiple instances of the `Accordion` component with different props. It serves as an example of how to use the `Accordion` component and customize its behavior and appearance.

## Props

The `TestAccordion` component does not accept any props itself. However, it passes props to each `Accordion` instance it renders.

### Accordion Props

- `text` (string, required): The text to be displayed on the accordion button.
- `content` (ReactNode, required): The content to be displayed when the accordion is expanded. It can be any valid JSX or React component.
- `buttonClassName` (string): Custom CSS classes to be applied to the accordion button.
- `contentClassName` (string): Custom CSS classes to be applied to the accordion content container.
- `firstOfMany` (boolean): Specifies if the accordion is the first of many accordions. Default is `false`. If `true`, the accordion will have a rounded top.

## Example Usage

```jsx
import React from 'react';
import Accordion from './Accordion';

const TestAccordion = () => {
  return (
    <div>
      <Accordion
        text="Accordion Template"
        content={
          <>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              This is the first hidden content in the accordion.
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              This is the second hidden content inside the accordion.
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Add as many elements as necessary inside the content property.
            </p>
          </>
        }
        buttonClassName="bg-blue-500 text-white"
        contentClassName="bg-gray-200 dark:bg-gray-700"
        firstOfMany={true}
      />
      <Accordion
        text="Accordion Template 2"
        content={
          <>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ex iure tempore numquam maxime illo maiores accusantium in modi, quae, laudantium porro praesentium libero nesciunt veritatis id qui similique accusamus.
            </p>
          </>
        }
      />
    </div>
  );
};

export default TestAccordion;
