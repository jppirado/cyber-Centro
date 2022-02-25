
import React, { useState, createContext, useEffect } from 'react'
import { Auth, firebase } from "../services/firebase"
import { useHistory } from 'react-router';

export const Authcontext = createContext({});

export function AuthcontextProv({ children }) {

    const history = useHistory();

    const [user, setUser] = useState({});

    //  useEffect(() => {
    //     const unsubscribe = Auth.onAuthStateChanged(user => {
    //         if (user) {
    //             const { displayName, photoURL, uid } = user;
    //             setUser({
    //                 name: displayName,
    //                 avatar: photoURL,
    //                 id: uid
    //             });
    //         }
    //     })
    //     return () => {
    //         unsubscribe();
    //     }
    // }, [])

    async function LoginWithGoogle() {

        const provider = new firebase.auth.GoogleAuthProvider();
        const result = await Auth.signInWithPopup(provider);
        if (result.user) {
            const { displayName, photoURL, uid } = result.user;
            if (!displayName || !photoURL) {
                throw new Error("dasdasadads");
            }     
                setUser({
                    name: displayName,
                    avatar: photoURL,
                    id: uid
  
                });
                
                history.push('/menu')  
        }

    }

    return (
        <Authcontext.Provider
            value={{
                user,
                LoginWithGoogle,
            }}>
            {children}
        </Authcontext.Provider>
    )
}

