import React, {useState,useEffect} from "react";

export default function DiceRoll(){
    const [d6,setD6] = useState('-');
    const [d20,setD20] = useState('-');

    function RollD6(){
        setD6(Math.floor(Math.random() * (7 - 1)) + 1);
    }

    function RollD20(){
        setD20(Math.floor(Math.random() * (21 - 1)) + 1);
    }


    useEffect(() => {
        const d6InMemory = localStorage.getItem('d6');
        const d20InMemory = localStorage.getItem('d20');
        if(d6InMemory){
            setD6(JSON.parse(d6InMemory));
        }
        if(d20InMemory){
            setD20(JSON.parse(d20InMemory));
        }
    },[]);

    useEffect(() => {
        window.localStorage.setItem('d6',JSON.stringify(d6));
        window.localStorage.setItem('d20',JSON.stringify(d20));
    },[d6,d20]);

    return(
        <div className="function-box">
            <div class = "dice-box">
                    <div id = "dice-title"><h2>D6</h2></div>
                    <div id = "d6-counter"><h2>{d6}</h2></div>
                    <div class = "counter-box"></div>
                    <div id = "d6-roll-button" onClick={RollD6}><h2>Roll</h2></div>
                </div>

                <div class = "dice-box">
                    <div id = "dice-title"><h2>D20</h2></div>
                    <div id = "d20-counter"><h2>{d20}</h2></div>
                    <div class = "counter-box"></div>
                    <div id = "d20-roll-button"><h2 onClick={RollD20}>Roll</h2></div>
                </div>
        </div>
    );
}