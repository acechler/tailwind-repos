"use client";

import React from 'react'

type CardProps = {
    title: string;
    content: React.ReactNode;
}

const Card: React.FC<CardProps> = ({title, content}) => {
  return (
    <div className='block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 '>
        <h5 className='mb-2 text-2xl font-bold tracking -tight text-gray-900 dark:text-white'>{title}</h5>
    
        {content}
       
    </div>
  )
}

export default Card