import { Fragment } from "react";
import { useState } from "react";
import './nameupdater.css'

export function Nameupdate(){
    const[data,setdata]=useState("")
    const[data1, setvalue]=useState("*****")
    
    function handledata(a){
        setdata(a.target.value)
    }
    function submit(){
        setvalue(data)
        setdata('');
    }

    return(
        <Fragment>
            <div className="div1">
            <input id="inpt1" type="text" value={data} onChange={handledata}/>  
            <button id="btn1" onClick={submit}>Submit</button>
            </div>
            <h1 id="h11">Hi, My Name is {data1} </h1>
        </Fragment>
    )
}