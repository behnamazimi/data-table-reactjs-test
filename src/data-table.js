import React, {useEffect, useState, useMemo} from "react";
import Table from "./table";

function DataTable(props) {
    const [data, setData] = useState(props.data);

    const [selection, setSelection] = useState([]);

    const columns = useMemo(
        () => getColumnsWithSelect(props.columns, selection),
        [props.columns, selection]
    );

    // listen to selection change
    useEffect(() => {
        // selection change log, It change on each select.
        console.log("@effect selection", selection);
    }, [selection]);

    function handleRowSelect(rowName) {
        const keyIndex = selection.indexOf(rowName);

        console.log(selection, rowName, keyIndex);

        if (keyIndex === -1)
            setSelection(preSelection => [...preSelection, ...[rowName]]);
        else
            setSelection(preSelection => preSelection.filter(sl => sl !== rowName));
    }

    function getColumnsWithSelect(columns, selection) {

        // add select column if not added already
        if (!columns.find(col => col.accessor === "select")) {
            return [
                ...[
                    {
                        title: "Select",
                        accessor: "select",
                        // this method will execute to render checkbox on Select table
                        Cell: function (row) {
                            console.log("@Cell selection", selection);
                            return (
                                <input
                                    type="checkbox"
                                    onChange={() => handleRowSelect(row.name, selection)}
                                    checked={selection.includes(row.name)}
                                />
                            );
                        }
                    }
                ],
                ...columns
            ];
        }

        return columns;
    }

    return (
        <div
            className="DataTable"
            style={{background: "#e0e0e0", padding: "1rem"}}
        >
            <div>Data Table:</div>

            <Table {...{data, columns}} />
        </div>
    );
}

export default DataTable;
