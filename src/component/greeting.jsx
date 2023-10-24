import React from "react";
import { Link } from 'react-router-dom'


export default function Greeting(props) {
    return (
        <div>
            <h1>Hello {props.name}</h1>
            <Link to={"/user"}>User</Link>
        </div>
    )
}