"use client";
import React, { useState, useEffect } from 'react';

function collapseHandler(isOpen: boolean) {
  return isOpen ? 'hidden' : '';
}

// If there are multiple accordions, the first one should have rounded corners on the top
function isFirstOfMany(firstOfMany: boolean) {
  return firstOfMany ? 'rounded-t-xl' : '';
}

type AccordionProps = {
  text: string;
  content: React.ReactNode;
  buttonClassName?: string;
  contentClassName?: string;
  firstOfMany?: boolean;
};

const Accordion: React.FC<AccordionProps> = ({
  text,
  content,
  buttonClassName = '',
  contentClassName = '',
  firstOfMany = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false); // Ensure the accordion is closed on initial load
  }, []);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sticky">
      <h2>
        {/* Change the background of button on hover. When clicked unhide content. */}
        <button
          type="button"
          className={`flex items-center justify-between w-full p-5 font-medium text-left bg-slate-900 text-gray-500 border border-b-0 border-gray-200 ${isFirstOfMany(firstOfMany)} focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition ${buttonClassName}`}
          onClick={toggleAccordion}
          aria-expanded={isOpen ? 'true' : 'false'}
        >
          <span className="flex items-center">
            {text}
          </span>
          <svg
            data-accordion-icon
            className={`w-6 h-6 rotate-180 shrink-0 ${isOpen ? 'transform' : ''}`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </h2>
      <div className={`transition ${collapseHandler(isOpen)} ${contentClassName}`} aria-labelledby="accordion-open-heading-1" aria-hidden={!isOpen}>
        <div className={`p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900`}>
          {content}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
