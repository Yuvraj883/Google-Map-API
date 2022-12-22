import Axios from 'axios';
function Home(){
    const from = document.getElementById('from');
    const to = document.getElementById('to');
    const key = 'JuNkCXmB4VXmxBy3rsUkrspPpnYYj';
    const url = `https://api.distancematrix.ai/maps/api/distancematrix/json?origins=${from.value}&destinations=${to.value}&departure_time=now&key=JuNkCXmB4VXmxBy3rsUkrspPpnYYj`; 

    function getDistance(){
        Axios.get(url).then((response)=>{
            console.log(response.data.rows);
            console.log(response.data.destination_addresses);
        })
    }
    
    return(
        <>
        <div>
            <input type="text" placeholder="From" id='from'></input><br/>
            <input type="text" placeholder="To" id='to'></input><br/>
            <button onClick={getDistance}>Submit</button>
            
        
        </div>
        </>
    )
} export default Home;