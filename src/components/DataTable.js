import React from "react";
import { useSelector } from "react-redux";

export default function DataTable(props){
    const productions = useSelector(state => state.productions)
    console.log(productions)
    return<h1>table</h1>
}