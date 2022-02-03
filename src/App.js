import React from 'react';
//context import
import createContext from "./Context";
//import Provider
import Provider from './Provider';


const FinalAgent =()=>{
    return(
        <div>
            <h1>Another Context API practice.</h1>
           <createContext.Consumer>
               {(context)=>(
                 <>
                   <h2>Student Name : {context.data.name} </h2>
                   <h2>Mission Number : {context.data.missionNumber} </h2>
                   <h2>Mission Status : <span style={{color:"red"}}> {context.data.status} </span> </h2>
                   <button onClick={context.isMissionAccepted}>Accept Mission</button>
                 </>
                   
               )}
           </createContext.Consumer>
        </div>
    )
}
const AgentThree =()=>{
    return(
        <div>
            <FinalAgent />
        </div>
    )
}
const AgentTwo =()=>{
    return(
        <div>
            <AgentThree />
        </div>
    )
}

const Agent =()=>{
    return(
        <div>
            <AgentTwo />
        </div>
    )
}

const App = () => {
    return (
        <Provider>
            <Agent />
        </Provider>
    );
};

export default App;