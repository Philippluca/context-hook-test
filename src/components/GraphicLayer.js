import { useEffect, useContext, useState } from "react";
import {APIContext} from "./APIContext";

const GraphicLayer = ({children}) => {
    const api = useContext(APIContext);
    const [layerApi, setLayerApi] = useState(false);

    useEffect(() => {
        setLayerApi(true);
        api.starConsole("Graphics Layer loaded.")
        return () => {api.starConsole("Graphics Layer unloaded.")}
    }
    ,[api]);


    if(layerApi && children){
        return children
    }
    else{
        return null
    }
    
}


export default GraphicLayer;