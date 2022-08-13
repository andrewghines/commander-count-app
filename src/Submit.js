import React, {useState, useEffect} from "react";


export default function SubmitNames(){

    const [p1Name,setName] = useState("");
    const [p2Name,setP2Name] = useState("");
    const [p3Name,setP3Name] = useState("");
    const [p4Name,setP4Name] = useState("");

    useEffect(() => {
        const playerNameInMemory = localStorage.getItem('player1name');
        const player2NameInMemory = localStorage.getItem('player2name');
        const player3NameInMemory = localStorage.getItem('player3name');
        const player4NameInMemory = localStorage.getItem('player4name');
        if(playerNameInMemory){
            setName(JSON.parse(playerNameInMemory));
        }
        if(player2NameInMemory){
            setP2Name(JSON.parse(player2NameInMemory));
        }
        if(player3NameInMemory){
            setP3Name(JSON.parse(player3NameInMemory));
        }
        if(player4NameInMemory){
            setP4Name(JSON.parse(player4NameInMemory));
        }
    },[]);

    useEffect(() => {
        window.localStorage.setItem('player1name',JSON.stringify(p1Name));
        window.localStorage.setItem('player2name',JSON.stringify(p2Name));
        window.localStorage.setItem('player3name',JSON.stringify(p3Name));
        window.localStorage.setItem('player4name',JSON.stringify(p4Name));
    },[p1Name,p2Name,p3Name,p4Name]);
    
    return(
        <div className="submit-container">
            <form>
                <input id="player1name" type="text" placeholder="Enter your name" name='player1name' onChange={(e) => setName(e.target.value)}/>
                <br></br>
                <input id="player2name" type="text" placeholder="Enter player 2's name" name='player2name' onChange={(e) => setP2Name(e.target.value)}/>
                <br></br>
                <input id="player3name" type="text" placeholder="Enter player 3's name" name='player3name' onChange={(e) => setP3Name(e.target.value)}/>
                <br></br>
                <input id="player4name" type="text" placeholder="Enter player 4's name" name='player4name' onChange={(e) => setP4Name(e.target.value)}/>
                <br></br>
                <input type="submit"/>
            </form>
                
        </div>
    );
}