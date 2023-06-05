import React from 'react'

const CustomTable = () => {
  return (
    <div className='relative overflow-x-auto'>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:text-gray-400">
                <tr>
                    <th scope='col' className="px-6 py-3">Column Name</th>
                </tr>
            </thead>
            <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap  dark:text-white' >Row Name</th>
                    <td className="px-6 py-4">Row Item</td>
                    <td className="px-6 py-4">Row Item</td>
                    <td className="px-6 py-4">Row Item</td>

                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default CustomTable