import React, {Component} from "react";
import "./Creatures.css";

class Creatures extends Component{
    render(){
        return(
            <div className="creatures">
                <div class = "creature-box">
                <form><input type = "text" id = "creature-name" name = "name" placeholder="Enter creature name"></input></form>
                <form><input type = "text" id = "creature-pt" name = "name" placeholder="Enter power and toughness"></input></form>
                <div id = "first-creature-counter"><h2>0</h2></div>
                <div class = "counter-box">
                    <div id = "first-creature-plus-button"><h2>+</h2></div>
                    <div id = "first-creature-minus-button"><h2>-</h2></div>
                </div>
                </div>

                <div class = "creature-box">
                <form><input type = "text" id = "creature-name" name = "name" placeholder="Enter creature name"></input></form>
                <form><input type = "text" id = "creature-pt" name = "name" placeholder="Enter power and toughness"></input></form>
                <div id = "second-creature-counter"><h2>0</h2></div>
                <div class = "counter-box">
                    <div id = "second-creature-plus-button"><h2>+</h2></div>
                    <div id = "second-creature-minus-button"><h2>-</h2></div>
                </div>
                </div>

                <div class = "creature-box">
                <form><input type = "text" id = "creature-name" name = "name" placeholder="Enter creature name"></input></form>
                <form><input type = "text" id = "creature-pt" name = "name" placeholder="Enter power and toughness"></input></form>
                <div id = "third-creature-counter"><h2>0</h2></div>
                <div class = "counter-box">
                    <div id = "third-creature-plus-button"><h2>+</h2></div>
                    <div id = "third-creature-minus-button"><h2>-</h2></div>
                </div>
                </div>

                <div class = "creature-box">
                <form><input type = "text" id = "creature-name" name = "name" placeholder="Enter creature name"></input></form>
                <form><input type = "text" id = "creature-pt" name = "name" placeholder="Enter power and toughness"></input></form>
                <div id = "first-creature-counter"><h2>0</h2></div>
                <div class = "counter-box">
                    <div id = "forth-creature-plus-button"><h2>+</h2></div>
                    <div id = "forth-creature-minus-button"><h2>-</h2></div>
                </div>
                </div>

                
            </div>
        );
    }
}

export default Creatures;