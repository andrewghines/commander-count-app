import React, {Component} from "react";
import "./Tokens.css";

class Tokens extends Component{
    render(){
        return(
            <div className="tokens">
                <div class = "token-box">
                <form><input type = "text" id = "token-name" name = "name" placeholder="Enter token name"></input></form>
                <div id = "first-token-counter"><h2>0</h2></div>
                <div class = "counter-box">
                    <div id = "first-token-plus-button"><h2>+</h2></div>
                    <div id = "first-token-minus-button"><h2>-</h2></div>
                </div>
                </div>

                <div class = "token-box">
                <form><input type = "text" id = "token-name" name = "name" placeholder="Enter token name"></input></form>
                <div id = "second-token-counter"><h2>0</h2></div>
                <div class = "counter-box">
                    <div id = "second-token-plus-button"><h2>+</h2></div>
                    <div id = "second-token-minus-button"><h2>-</h2></div>
                </div>
                </div>

                <div class = "token-box">
                <form><input type = "text" id = "token-name" name = "name" placeholder="Enter token name"></input></form>
                <div id = "third-token-counter"><h2>0</h2></div>
                <div class = "counter-box">
                    <div id = "third-token-plus-button"><h2>+</h2></div>
                    <div id = "third-token-minus-button"><h2>-</h2></div>
                </div>
                </div>

                <div class = "token-box">
                <form><input type = "text" id = "token-name" name = "name" placeholder="Enter token name"></input></form>
                <div id = "forth-loyalty-counter"><h2>0</h2></div>
                <div class = "counter-box">
                    <div id = "forth-token-plus-button"><h2>+</h2></div>
                    <div id = "forth-token-minus-button"><h2>-</h2></div>
                </div>
                </div>
            </div>
        );
    }
}

export default Tokens;