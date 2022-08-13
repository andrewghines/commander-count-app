import React, {useState, useEffect} from "react";

export default function AddPlaneswalker(){

    const [planeCount,setPCount] = useState(0);
    const [plane2Count,setP2Count] = useState(0);
    const [plane3Count,setP3Count] = useState(0);
    const [plane4Count,setP4Count] = useState(0);
    const [plane1Name,setPlaneName] = useState('');
    const [plane2Name,setPlane2Name] = useState('');
    const [plane3Name,setPlane3Name] = useState('');
    const [plane4Name,setPlane4Name] = useState('');
    const [totalPlanes,setNumOfPlanes] = useState(0);

    function addPlanes(){
        setNumOfPlanes(totalPlanes + 1)
    }

    function addPlane1() {
        setPCount(planeCount + 1)
    }

    function minusPlane1() {
        setPCount(planeCount - 1)
    }

    function addPlane2(){
        setP2Count(plane2Count + 1)
    }

    function minusPlane2(){
        setP2Count(plane2Count - 1)
    }

    function addPlane3(){
        setP3Count(plane3Count + 1)
    }

    function minusPlane3(){
        setP3Count(plane3Count - 1)
    }

    function addPlane4(){
        setP4Count(plane4Count + 1)
    }

    function minusPlane4(){
        setP4Count(plane4Count - 1)
    }

    useEffect(() => {
        const plane1CountInMemory = localStorage.getItem('planecount');
        const plane2CountInMemory = localStorage.getItem('plane2count');
        const plane3CountInMemory = localStorage.getItem('plane3count');
        const plane4CountInMemory = localStorage.getItem('plane4count');
        const plane1NameInMemory = localStorage.getItem('plane1name');
        const plane2NameInMemory = localStorage.getItem('plane2name');
        const plane3NameInMemory = localStorage.getItem('plane3name');
        const plane4NameInMemory = localStorage.getItem('plane4name');
        const totalPlanesInMemory = localStorage.getItem('totalplanes');
        if(plane1CountInMemory){
            setPCount(JSON.parse(plane1CountInMemory));
        }
        if(plane2CountInMemory){
            setP2Count(JSON.parse(plane2CountInMemory));
        }
        if(plane3CountInMemory){
            setP3Count(JSON.parse(plane3CountInMemory));
        }
        if(plane4CountInMemory){
            setP4Count(JSON.parse(plane4CountInMemory));
        }
        if(plane1NameInMemory){
            setPlaneName(JSON.parse(plane1NameInMemory));
        }
        if(plane2NameInMemory){
            setPlane2Name(JSON.parse(plane2NameInMemory));
        }
        if(plane3NameInMemory){
            setPlane3Name(JSON.parse(plane3NameInMemory));
        }
        if(plane4NameInMemory){
            setPlane4Name(JSON.parse(plane4NameInMemory));
        }
        if(totalPlanesInMemory){
            setNumOfPlanes(JSON.parse(totalPlanesInMemory));
        }
    },[])

    useEffect(() => {
        window.localStorage.setItem('planecount',JSON.stringify(planeCount));
        window.localStorage.setItem('plane2count',JSON.stringify(plane2Count));
        window.localStorage.setItem('plane3count',JSON.stringify(plane3Count));
        window.localStorage.setItem('plane4count',JSON.stringify(plane4Count));
        window.localStorage.setItem('plane1name',JSON.stringify(plane1Name));
        window.localStorage.setItem('plane2name',JSON.stringify(plane2Name));
        window.localStorage.setItem('plane3name',JSON.stringify(plane3Name));
        window.localStorage.setItem('plane4name',JSON.stringify(plane4Name));
        window.localStorage.setItem('totalplanes',JSON.stringify(totalPlanes));
    },[planeCount,plane2Count,plane3Count,plane4Count,plane1Name,plane2Name,plane3Name,plane4Name,totalPlanes]);
  
    return(
        <div className="loyalty">
        <div className="button-box"><button onClick={addPlanes}>Add planeswalker</button></div>
        <div className="loyalty-container">

        {totalPlanes === 1 && (
        <div class = "loyalty-box">
        <form><input type = "text" id = "planeswalker-name" name = "name" placeholder="Enter planeswalker name" onChange={(e) => setPlaneName(e.target.value)}></input></form>
        <div id = "loyalty-title"><h2>Loyalty</h2></div>
        <div id = "first-loyalty-counter"><h2>{planeCount}</h2></div>
        <div class = "counter-box">
            <div id = "first-loyalty-plus-button" onClick={addPlane1}><h2>+</h2></div>
            <div id = "first-loyalty-minus-button" onClick={minusPlane1}><h2>-</h2></div>
        </div>
        </div>
        )}

        {totalPlanes === 2 && (
        <div class = "loyalty-box">
        <form><input type = "text" id = "planeswalker-name" name = "name" placeholder="Enter planeswalker name" onChange={(e) => setPlane2Name(e.target.value)}></input></form>
        <div id = "loyalty-title"><h2>Loyalty</h2></div>
        <div id = "second-loyalty-counter"><h2>{plane2Count}</h2></div>
        <div class = "counter-box">
            <div id = "second-loyalty-plus-button" onClick={addPlane2}><h2>+</h2></div>
            <div id = "second-loyalty-minus-button" onClick={minusPlane2}><h2>-</h2></div>
        </div>
        </div>
        )}

        {totalPlanes === 3 && (
        <div class = "loyalty-box">
        <form><input type = "text" id = "planeswalker-name" name = "name" placeholder="Enter planeswalker name" onChange={(e) => setPlane3Name(e.target.value)}></input></form>
        <div id = "loyalty-title"><h2>Loyalty</h2></div>
        <div id = "third-loyalty-counter"><h2>{plane3Count}</h2></div>
        <div class = "counter-box">
            <div id = "third-loyalty-plus-button" onClick={addPlane3}><h2>+</h2></div>
            <div id = "third-loyalty-minus-button" onClick={minusPlane3}><h2>-</h2></div>
        </div>
        </div>
        )}

        {totalPlanes === 4 && (
        <div class = "loyalty-box">
        <form><input type = "text" id = "planeswalker-name" name = "name" placeholder="Enter planeswalker name" onChange={(e) => setPlane4Name(e.target.value)}></input></form>
        <div id = "loyalty-title"><h2>Loyalty</h2></div>
        <div id = "forth-loyalty-counter"><h2>{plane4Count}</h2></div>
        <div class = "counter-box">
            <div id = "forth-loyalty-plus-button" onClick={addPlane4}><h2>+</h2></div>
            <div id = "forth-loyalty-minus-button" onClick={minusPlane4}><h2>-</h2></div>
        </div>
        </div>
        )}
        </div>
    </div>
    );
}