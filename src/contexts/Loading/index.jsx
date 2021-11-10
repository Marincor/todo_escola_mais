import { createContext } from "react";
import { useState } from "react/cjs/react.development";



export const LoadingContext = createContext();


LoadingContext.displayName = "Loading";


export const LoadingProvider = (props) => {

    const [loading, setLoading] = useState(true)


    return(

        <LoadingContext.Provider value={{loading, setLoading}}>
            {props.children}
        </LoadingContext.Provider>
    )
}