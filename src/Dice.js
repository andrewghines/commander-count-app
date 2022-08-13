import React, {Component} from "react";
import "./Dice.css";
import DiceRoll from "./Dice-Roll";

class Dice extends Component{
    render(){
        return(
            <div className="dice-container">
                <DiceRoll />
            </div>
        );
    }
}

export default Dice;