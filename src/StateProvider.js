import React, { createContext, useContext, useReducer } from "react";
    
//prepares the data layer
    export const StateContext = createContext();

//Wrap our app and provide a data layer    
    export const StateProvider = ({ reducer, initialState, children }) => (   
    <StateContext.Provider value={useReducer(reducer, initialState)}>    
    {children}
    </StateContext.Provider>
    );
    
// Pulls information from data layer   
    export const useStateValue = () => useContext (StateContext);