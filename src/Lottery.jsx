/*import { useState } from "react"
import './Lottery.css'
import Ticket from "./Ticket";*/

/*export default function Lottery(){
    function generate(n){
        let arr=new Array(n);
        for(let i=0;i<n;i++)
        {
            arr[i]=Math.floor(Math.random()*10);
        }
        return arr;
    }
    let onc=()=>{
        setNo(generate(3));
    }
    function win(arr)
    {
        let s=0;
        for( let sum of arr)
        {
            s+=sum;
        }
        return s==15;
    }
    let [no,setNo]=useState(generate(3))
    let iswin=win(no);
   return (
    <>
    <h1>Lottery Game Begins</h1>
    <div className="ticket">
<span>{no[0]}</span>

&nbsp;&nbsp;&nbsp;&nbsp;
<span>{no[1]}</span>
&nbsp;&nbsp;&nbsp;&nbsp;
<span>{no[2]}</span>
&nbsp;&nbsp;&nbsp;&nbsp;

    </div>
    {iswin && <h1>Congrats</h1>}
    <br></br>
    <br></br>
    <br></br>
    <button onClick={onc}>Generate New no</button>

    </>
   ) 
}*/
/*export default function Lottery({n=3,winingcondition=15})
{
let [ticket,setTicket]=useState(generate(n))
function isWin(arr)
{
    let s=0;
    for(let sum of arr)
    {
        s+=sum;
    }
return s==winingcondition
}
function generate(n)
{
    let arr=new Array(n);
    for(let i=0;i<n;i++)
    {
        arr[i]=Math.floor(Math.random()*10);
    }
    return arr;
}
function clc()
{
    setTicket(generate(n))
}
    let win=isWin(ticket);
    return (
<>
<h1>Lottery Game Begins</h1>
<Ticket ticket={ticket}/>
{win && <h1>Congrats!You won</h1>}
<br></br><br></br>
<button onClick={clc}>Generate new no</button>
</>
    );
}*/
import { useState } from "react";
import './Lottery.css';
import Ticket from "./Ticket";

function generate(n) {
    let arr = new Array(n);
    for (let i = 0; i < n; i++) {
        arr[i] = Math.floor(Math.random() * 10);
    }
    return arr;
}

export default function Lottery({ n, winingcondition }) {
    let [ticket, setTicket] = useState(generate(n));

    function isWin(arr) {
        let s = 0;
        for (let sum of arr) {
            s += sum;
        }
        return s === winingcondition;
    }

    function clc() {
        setTicket(generate(n));
    }

    let win = isWin(ticket);

    return (
        <>
            <h1>Lottery Game Begins</h1>
            <Ticket ticket={ticket} />
            {win && (
                <>
                    <h1>Congrats</h1>
                    <div className="crackers">
                        <div className="cracker-burst"></div>
                    </div>
                </>
            )}
            <br></br>    <br></br>
            <button onClick={clc}>Generate new no</button>
        </>
    );
}


