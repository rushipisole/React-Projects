import React, { useContext } from "react";
import { data, data1 } from "../App";


export default function child3() {
    const name = useContext(data)
    const lname = useContext(data1)

    return (
        <>
            <h1>Hello My name is {name} {lname}</h1>
        </>
    )
}
