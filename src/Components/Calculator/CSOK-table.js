// Requirements
import React from 'react'
import { csokData } from './CSOK-data'

const CSOKTable = props => {

    // Create the table, parameters: which table, head or data cells
    // Create rows, then cells inside
    const createTable = (table, data) => {
        const cells = csokData[table][data].map((row, index) =>
            // Rows
            <tr
                key={index}
                id={row.id || index}
                className={row.id === `children${props.csok.childrenTotal()}` ? `${row.className}--selected` : row.className}>
                {
                    // Cells (head or data)
                    row[`row${index}`].map((cell, index) => 
                        data === 'head' ?
                        <th
                            key={index}
                            className={cell.className}
                            id={cell.id}
                            rowSpan={cell.rowSpan}
                            colSpan={cell.colSpan}
                            onClick={props.handleChange}>{cell.text}
                        </th>
                        :
                        <td
                            key={index}
                            className={cell.id.split('-')[0] === `children${props.csok.childrenTotal()}${props.csok.purpose}` ? `${cell.className} ${cell.className}--selected` : cell.className}
                            id={cell.id}
                            rowSpan={cell.rowSpan}
                            colSpan={cell.colSpan}>{cell.text}
                        </td>
                    )
                }
            </tr>
        )
        return cells
    }  

    return (
        <table className='csok__table'>
            <colgroup>
                <col></col>
                <col id='uj' className={props.csok.purpose === 'uj' ? 'csok__table__cols--selected' : 'csok__table__cols'} span={props.csok.csokType === 'normal' ? '3' : '2'}></col>
                <col id='hasznalt' className={props.csok.purpose === 'hasznalt' ? 'csok__table__cols--selected' : 'csok__table__cols'} span='3'></col>
            </colgroup>
            <thead>
                {createTable(props.csok.csokType, 'head')}
            </thead>
            <tbody>
                {createTable(props.csok.csokType, 'data')}
            </tbody>
        </table>
    )
}

export default CSOKTable