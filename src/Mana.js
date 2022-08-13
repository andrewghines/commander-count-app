import React, {Component} from "react";
import "./Mana.css";

class Mana extends Component{
    render(){
        return(
            <div className="mana">
                <div id = "example-text"><p>Ex. <a href = "https://gatherer.wizards.com/pages/card/Details.aspx?multiverseid=446197"
                target = "_blank" >Savage Ventmaw</a></p></div>
        
            <div class = "mana-container">
                <div class = "plains-container">
                    <div id = "plains-counter"><h2>0</h2></div>
                    <div id = "plains-plus-button"><h2>+</h2></div>
                    <div id = "plains-minus-button"><h2>-</h2></div>
                </div>
                
                <div class = "swamp-container">
                    <div id = "swamp-counter"><h2>0</h2></div>
                    <div id = "swamp-plus-button"><h2>+</h2></div>
                    <div id = "swamp-minus-button"><h2>-</h2></div>
                </div> 
                
                <div class = "mountain-container">
                    <div id = "mountain-counter"><h2>0</h2></div>
                    <div id = "mountain-plus-button"><h2>+</h2></div>
                    <div id = "mountain-minus-button"><h2>-</h2></div>
                </div>
                
                <div class = "forest-container">
                    <div id = "forest-counter"><h2>0</h2></div>
                    <div id = "forest-plus-button"><h2>+</h2></div>
                    <div id = "forest-minus-button"><h2>-</h2></div>
                </div> 
                
                <div class = "island-container">
                    <div id = "island-counter"><h2>0</h2></div>
                    <div id = "island-plus-button"><h2>+</h2></div>
                    <div id = "island-minus-button"><h2>-</h2></div>
                </div>

                <div class = "colorless-container">
                    <div id = "colorless-counter"><h2>0</h2></div>
                    <div id = "colorless-plus-button"><h2>+</h2></div>
                    <div id = "colorless-minus-button"><h2>-</h2></div>
                </div>
            </div>
        </div>


        );
    }
}

export default Mana;