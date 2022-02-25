import { useContext } from 'react'
import { Authcontext } from '../context/userContext'

export function useAuth() {

    const value = useContext(Authcontext);
    return value;

}