import { useEffect, useContext } from "react";
import {APIContext} from "./APIContext";

const Graphic = (props) => {
    const api = useContext(APIContext);

    useEffect(() => {
        api.starConsole("Graphic " + props.id + " loaded.")
        return () => {api.starConsole("Graphic  " + props.id + " unloaded.")}
    }
    ,[api, props.id]);

    return null;
}


export default Graphic;