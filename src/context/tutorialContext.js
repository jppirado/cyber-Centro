import {createContext, useState} from 'react'

const TutorialContext  = createContext({})

export function TutorialProvider ({children}){

    const [tutorial , setTutorial] = useState({})

    return (
        <TutorialContext.Provider
        value={
            tutorial,
            setTutorial
        }
        >
            {children}
        </TutorialContext.Provider>    
    )
    

} 


