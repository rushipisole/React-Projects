import React, { useEffect } from "react";

const Navbar = ({ color }) => {
    useEffect(() => {
        alert("Hey i will run on every render")
    })
    useEffect(() => {
        alert("This is first render")
    },[])






    useEffect(() => {
        alert("Hey I am running because color was changed")
    }, [color])





    return(
        <div>
            I am navbar of {color} color hehehehe...
        </div>
    )

}
export default Navbar