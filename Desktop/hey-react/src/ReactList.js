import React from "react";

function ReactList(){
    const fruits = ["Apple","Banana","Mango","cherry",];
    const users = [
        { id: 1, name: 'Geeks', age: 30 },
        { id: 2, name: 'For', age: 25},
        { id: 3, name: 'Geeks', age: 20},
    ];
    
    return (
        <div>
            <h1> Fruits List </h1>
            <ul> 
                {fruits.map((f, index) =>(
                    <li key={index}>{f}</li>
                ))}
            </ul>
           <h1>Users Table</h1>
           <table border={1} style={{ borderCollapse: 'collapse'}}>
           <thead> 
           <tr>
            <th>id</th>
            <th>name</th>
            <th>age</th>
           </tr>
           </thead>
           <tbody>
            {users.map((user) => (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.age}</td>
                </tr>
            ))}
           </tbody>
            </table>
            <ul>
                {users.map((user=>(
                    user.age>=25 ? (
                            <li key={user.id}>{user.name} is over 30 years senior user </li>
                    ) : (
                        <li key={user.id}>{user.name} is under 30 years unior user</li>
                    )
                )))}
            </ul>
        </div>
    );
}export default ReactList;