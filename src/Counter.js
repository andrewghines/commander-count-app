import React, {Component} from "react";
import "./Counter.css";
import CounterButtons from "./Counter-Buttons";

class Counter extends Component{


    render(){

         return(
            <div>
                <CounterButtons/>
            </div>
            
        );
    }
}

export default Counter;