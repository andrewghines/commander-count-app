import React, {Component} from "react";
import "./Mutate.css";

class Mutate extends Component{
    render(){
        return(
            <div className="mutate">
                <div class = "mutate-box">
                <form><input type = "text" id = "creature-name" name = "name" placeholder="Enter creature name"></input></form>
                <div id = "first-mutate-counter"><h2>0</h2></div>
                <div class = "counter-box">
                    <div id = "first-mutate-plus-button"><h2>+</h2></div>
                    <div id = "first-mutate-minus-button"><h2>-</h2></div>
                </div>
                </div>

                <div class = "mutate-box">
                <form><input type = "text" id = "creature-name" name = "name" placeholder="Enter creature name"></input></form>
                <div id = "second-mutate-counter"><h2>0</h2></div>
                <div class = "counter-box">
                    <div id = "second-mutate-plus-button"><h2>+</h2></div>
                    <div id = "second-mutate-minus-button"><h2>-</h2></div>
                </div>
                </div>

                <div class = "mutate-box">
                <form><input type = "text" id = "creature-name" name = "name" placeholder="Enter creature name"></input></form>
                <div id = "third-mutate-counter"><h2>0</h2></div>
                <div class = "counter-box">
                    <div id = "third-creature-plus-button"><h2>+</h2></div>
                    <div id = "third-creature-minus-button"><h2>-</h2></div>
                </div>
                </div>

                <div class = "mutate-box">
                <form><input type = "text" id = "creature-name" name = "name" placeholder="Enter creature name"></input></form>
                <div id = "forth-mutate-counter"><h2>0</h2></div>
                <div class = "counter-box">
                    <div id = "forth-mutate-plus-button"><h2>+</h2></div>
                    <div id = "forth-mutate-minus-button"><h2>-</h2></div>
                </div>
                </div>
            </div>
        );
    }
}

export default Mutate;