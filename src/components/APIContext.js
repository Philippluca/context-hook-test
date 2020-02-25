import React, { useEffect, useState } from 'react';

class API{
    constructor(){
        console.log("New API created");
    }
    starAlert(message) {
        alert('**' + message +'**');
    }

    starConsole(message){
        console.log('**' + message + '**');
    }

    dispose(){
        console.log("API disposed")
    }
}

const APIContext = React.createContext();

const APIContextProvider = ({children}) =>{

    const [api, setApi] = useState(null);

    useEffect(() => {
        const api_loc = new API();
        setApi(api_loc);
    return () => api_loc.dispose();
    }, [])

    if (api === null) return null;
    return(
        <APIContext.Provider value={api}>
            {children}
        </APIContext.Provider>
    )
}

export {APIContextProvider, APIContext}