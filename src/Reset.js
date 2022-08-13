import { ReactDOM } from "react";
import React, {useState} from "react";

function ResetValues(){
    localStorage.clear();
    window.location.reload();
    }


export default function Reset(){
    return(
        <div>
            <button onClick={ResetValues}>Reset</button>
        </div>
    );
}