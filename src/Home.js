import React, {Component} from "react";
import "./Home.css";
import SubmitNames from "./Submit";

class Home extends Component {
    render(){
        return(
            <div className="home-container">
                <SubmitNames />
            </div>
        );
    }
}

export default Home;