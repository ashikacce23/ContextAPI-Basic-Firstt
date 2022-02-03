import React, { useState } from 'react';
//import context
import createContext from './Context';

const Provider = (props) => {
    const [mission, setMission] = useState({
        name:"Go to Russia",
        missionNumber:"23",
        status:"Not Accepted"
    })
    return (
        <>
        <createContext.Provider
           value={{
               data:mission,
               //method
               isMissionAccepted:()=>{
                   setMission({...mission, status:"Accepted"})
               }
           }}
        >
            {props.children}
        </createContext.Provider>
        </>
    );
};

export default Provider;