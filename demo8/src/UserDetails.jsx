// bind tables
import React from 'react'

function UserDetails() {
    const userArray = [
        { firstName: "Ann", age: 23 },
        { firstName: "Anu", age: 25 },
        { firstName: "Neha", age: 23 },
        { firstName: "Viji", age: 21 },
        { firstName: "Shaju", age: 20 }

    ]
    return (
        <>
            <h2 style={{ color: "blue" }}>USER DETAILS </h2>
            <table>
                <thead>
                    <tr>
                        <th>Sl No</th>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        userArray.map((item, index) => {
                            return (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{item.firstName}</td>
                                    <td>{item.age}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>

            </table>
        </>
    )
}

export default UserDetails