import Axios from 'axios';
import { useState } from 'react';
function Home(){
    const [from, setFrom] = useState("Janak Puri");
     
    const [to, setTo] = useState("Tagore Garden");
    
    const key = 'JuNkCXmB4VXmxBy3rsUkrspPpnYYj';
    const url = `https://api.distancematrix.ai/maps/api/distancematrix/json?origins=${from}&destinations=${to}&departure_time=now&key=JuNkCXmB4VXmxBy3rsUkrspPpnYYj`; 

    function changeFrom(event){
        const newFrom = event.target.value; 
        setFrom(newFrom);
    }
    function changeTo(event){
        const newTo = event.target.value; 

        setTo(newTo);
    }

    let distance; 

    function getDistance(){
        Axios.get(url).then((response)=>{
            let d = response?.data?.rows[0]?.elements[0]?.distance.text; 
           d = d.split(" ");
            // let match =d.match(/(\d+)/);
            // distance = match[0];
            distance = d[0];
            // console.log(typeof distance);
            // console.log(distance);
            // const 
            // console.log(match);
            // console.log();
        })
        calculateFare();

// console.log(to);
    }
    const fixed = 25; 
    const fpk = 8
    function calculateFare(){
        console.log("Calculating fair: ");
        if(+distance<=2){
            console.log("Fare=",fixed); 
        }
        else if(+distance>2){
            const fare = +distance*fpk; 
            console.log("Fare: ",fare); 
            console.log(fare);
        }
    }
    
    return(
        <>
        <div> Jai Bajrang Bali
            <input type="text" placeholder="From" value={from} onChange={changeFrom} id='from'></input><br/>
            <input type="text" value={to} placeholder="To" id='to' onChange={changeTo}></input><br/>
            <button onClick={getDistance}>Submit</button>
            
        
        </div>
        </>
    )
} export default Home;