import React, { useEffect, useState } from 'react'

function Table() {

    const [data,setData] = useState([]);

    useEffect(()=>{

        const fetchData = () => {

            const tableData = [
                {id:1, name:'Katari', age:25, gender: 'M', bloodgroup: 'B+'},
                {id:2, name:'Bunny', age:24, gender: 'M', bloodgroup: 'B+'},
                {id:3, name:'Sunny', age:27, gender: 'M', bloodgroup: 'AB+'},
                {id:4, name:'Durga', age:25, gender: 'F', bloodgroup: 'O+'},
                {id:5, name:'Swathi', age:30, gender: 'F', bloodgroup: 'B-'},
                {id:6, name:'Satya', age:22, gender: 'F', bloodgroup: 'AB-'}
            ];
            setData(tableData);
        };
        fetchData();
    },[]);

  return (
    <div>
        <h1>TABLE INFORMATION 📑 </h1>
       <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>AGE</th>
                <th>GENDER</th>
                <th>BLOOD GROUP</th>
            </tr>
        </thead>
        <tbody>
            {data.map((row)=>(
                <tr key={row.id}>
                    <td>{row.id}</td>
                    <td>{row.name}</td>
                    <td>{row.age}</td>
                    <td>{row.gender}</td>
                    <td>{row.bloodgroup}</td>
                </tr>
            ))}
        </tbody>
       </table>
    </div>
  )
}

export default Table
