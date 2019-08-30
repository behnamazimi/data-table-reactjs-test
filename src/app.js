import React from 'react';
import DataTable from "./data-table";


// data sample
const tmpData = [
    {
        name: "Can",
        age: 4,
    }, {
        name: "David",
        age: 44,
    }, {
        name: "Sara",
        age: 14,
    }, {
        name: "Hani",
        age: 24,
    }
]

// main columns array
const tmpColumns = [
    {
        title: "Name",
        accessor: "name",
    }, {
        title: "Age",
        accessor: "age",
    }
]

function App() {
    return (
        <div className="App" style={{background: "#f0f0f0", padding: "1rem"}}>
            <div>App Component:</div>

            <DataTable data={tmpData} columns={tmpColumns}/>
        </div>
    );
}

export default App;
