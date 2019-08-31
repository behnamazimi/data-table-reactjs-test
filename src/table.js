import React, {useEffect, useState} from "react";
import "./table.css"

function Table(props) {

    const [columns, setColumns] = useState(props.columns)
    const [data, setData] = useState(props.data)

    useEffect(() => {
        setColumns(props.columns)
    }, [props.columns])


    return (
        <div className="Table" style={{background: "#d5d5d5", padding: "1rem"}}>
            <div>Table</div>

            <table>
                <tbody>
                <tr>
                    {props.columns.map((th, key) => (
                        <th key={key}>{th.title}</th>
                    ))}
                </tr>

                {/* generating data rows */}
                {data.map((dr, key) => (
                    <tr key={key}>
                        {props.columns.map((col, index) => (
                            <td key={index}>
                                {
                                    // the "Cell" method has high priority than "accessor" selector
                                    (col.Cell && typeof col.Cell === "function") ?
                                        col.Cell(dr) :
                                        dr[col.accessor]
                                }
                            </td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>

        </div>
    )
}

export default Table