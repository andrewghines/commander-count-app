import React, {Component} from "react";
import {Route,Routes,NavLink,HashRouter}
from "react-router-dom";
import "./Main.css";
import Home from "./Home";
import Counter from "./Counter";
import Loyalty from "./Loyalty";
import Mana from "./Mana";
import Tokens from "./Tokens";
import Creatures from "./Creatures";
import Mutate from "./Mutate";
import Dice from "./Dice";
import Reset from "./Reset";
class Main extends Component{
    render(){
        return(
            <HashRouter>
            <div className="main">
                <header>
                    <h1><NavLink exact to="/">Commander Count</NavLink></h1>
                    <Reset />
                </header>
                
                <div className="container">
                    <nav>
                        <p><NavLink to="/Counter">Counters</NavLink></p>
                        <p><NavLink to="/Loyalty">Planeswalker Loyalty</NavLink></p>
                        <p><NavLink to="/Mana">Extra Mana</NavLink></p>
                        <p><NavLink to="/Tokens">Treasure/Blood/Etc. Tokens</NavLink></p>
                        <p><NavLink to="/Creatures">Creature Tokens</NavLink></p>
                        <p><NavLink to="/Mutate">Mutate Counter</NavLink></p>
                        <p><NavLink to="/Dice">Dice</NavLink></p>
                    </nav>

                    <div className="content">
                    <Routes>
                        <Route exact path="/" element={<Home/>}/>
                        <Route path="/Counter" element={<Counter/>}/>
                        <Route path="/Loyalty" element={<Loyalty/>}/>
                        <Route path="/Mana" element={<Mana/>}/>
                        <Route path="/Tokens" element={<Tokens/>}/>
                        <Route path="/Creatures" element={<Creatures/>}/>
                        <Route path="/Mutate" element={<Mutate/>}/>
                        <Route path="/Dice" element={<Dice/>}/>
                    </Routes>
                    </div>

                    <footer>
                        <p><a href = "https://magic.wizards.com/en" target = "_blank">Magic The Gathering</a></p>
                        <p><a href = "https://www.tcgplayer.com/" target = "_blank">TCGPlayer</a></p>
                        <p><a href = "https://www.cardkingdom.com/" target = "_blank">Card Kingdom</a></p>
                        <p><a href = "https://crystallinegiant.com/" target = "_blank">Crystalline Giant</a></p>
                    </footer>
                </div>
            </div>
            </HashRouter>
        );
    }
}

export default Main;