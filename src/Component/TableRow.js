import React from 'react'
import MarkPrice from './MarkPrice'


const TableRow = ({data}) => {

    
  return (
    <>
    <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
            {data.symbol}
            
            
        </td>
        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
            {data.description}
        </td>
        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
            {data.underlying_asset.symbol}
        </td>
        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
            <MarkPrice symbol={data.symbol} />
        </td>
    </tr>
    </>
  )
}

export default TableRow