import React, {useState, useEffect} from "react";
export default function CounterButtons(){

    const [count,setCount] = useState(40)
    const [p2CD,setp2CD] = useState(0);
    const [p3CD,setp3CD] = useState(0);
    const [p4CD,setp4CD] = useState(0);
    const [p1Name,setName] = useState('');
    const [p2Name,setP2Name] = useState('');
    const [p3Name,setP3Name] = useState('');
    const [p4Name,setP4Name] = useState('');

    function addLife() {
        setCount(count + 1)
    }

    function minusLife() {
        setCount(count - 1)
    }

    function addP2CD(){
        setp2CD(p2CD + 1)
    }

    function minusP2CD(){
        setp2CD(p2CD - 1)
    }

    function addP3CD(){
        setp3CD(p3CD + 1)
    }

    function minusP3CD(){
        setp3CD(p3CD - 1)
    }

    function addP4CD(){
        setp4CD(p4CD + 1)
    }

    function minusP4CD(){
        setp4CD(p4CD - 1)
    }

    useEffect(() => {
        const countInMemory = localStorage.getItem('count');
        const p2CDInMemory = localStorage.getItem('p2CD');
        const p3CDInMemory = localStorage.getItem('p3CD');
        const p4CDInMemory = localStorage.getItem('p4CD');
        const playerNameInMemory = localStorage.getItem('player1name');
        const player2NameInMemory = localStorage.getItem('player2name');
        const player3NameInMemory = localStorage.getItem('player3name');
        const player4NameInMemory = localStorage.getItem('player4name');
        if(countInMemory){
            setCount(JSON.parse(countInMemory));
        }
        if(p2CDInMemory){
            setp2CD(JSON.parse(p2CDInMemory));
        }
        if(p3CDInMemory){
            setp3CD(JSON.parse(p3CDInMemory));
        }
        if(p4CDInMemory){
            setp4CD(JSON.parse(p4CDInMemory));
        }
        if(playerNameInMemory){
            setName(JSON.parse(playerNameInMemory));
        }
        if(player2NameInMemory){
            setP2Name(JSON.parse(player2NameInMemory));
        }
        if(player3NameInMemory){
            setP3Name(JSON.parse(player3NameInMemory));
        }
        if(playerNameInMemory){
            setP4Name(JSON.parse(player4NameInMemory));
        }
    },[]);

    useEffect(() => {
        window.localStorage.setItem('count',JSON.stringify(count));
        window.localStorage.setItem('p2CD',JSON.stringify(p2CD));
        window.localStorage.setItem('p3CD',JSON.stringify(p3CD));
        window.localStorage.setItem('p4CD',JSON.stringify(p4CD));
    },[count,p2CD,p3CD,p4CD]);


    
    return(
        <div className="counter-container">
        <div className="life-counter-container">
            <h3>{p1Name}</h3>
            <div id = "life-counter-title"><h2>Life Counter</h2></div>
            <div id = "life-counter"><h2>{count}</h2></div>
            <div className = "counter-box"></div>
            <div id = "life-plus-button" onClick={addLife}><h2>+</h2></div>
            <div id = "life-minus-button" onClick={minusLife}><h2>-</h2></div>
        </div>
        
    
        {p2Name !== '' &&(
        <div className = "p2-commander-damage-container">
            <h3>{p2Name}</h3>
            <div id = "p2-commander-damage-title"><h2>Commander Damage</h2></div>
            <div id = "p2-commander-damage-counter"><h2>{p2CD}</h2></div>
            <div className = "counter-box"></div>
            <div id = "p2-commander-damage-plus-button" onClick={addP2CD}><h2>+</h2></div>
            <div id = "p2-commander-damage-minus-button" onClick={minusP2CD}><h2>-</h2></div>
        </div>
        )}

        {p3Name !== '' &&(
        <div className = "p3-commander-damage-container">
            <h3>{p3Name}</h3>
            <div id = "p3-commander-damage-title"><h2>Commander Damage</h2></div>
            <div id = "p3-commander-damage-counter"><h2>{p3CD}</h2></div>
            <div class = "counter-box"></div>
            <div id = "p3-commander-damage-plus-button" onClick={addP3CD}><h2>+</h2></div>
            <div id = "p3-commander-damage-minus-button" onClick={minusP3CD}><h2>-</h2></div>
        </div>
        )}

        {p4Name !== '' &&(
        <div className = "p4-commander-damage-container">
            <h3>{p4Name}</h3>
            <div id = "p4-commander-damage-title"><h2>Commander Damage</h2></div>
            <div id = "p4-commander-damage-counter"><h2>{p4CD}</h2></div>
            <div className = "counter-box"></div>
            <div id = "p4-commander-damage-plus-button" onClick={addP4CD}><h2>+</h2></div>
            <div id = "p4-commander-damage-minus-button" onClick={minusP4CD}><h2>-</h2></div>
        </div>
        )}
        
    </div>

    );
}