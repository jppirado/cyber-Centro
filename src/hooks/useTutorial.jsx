import { useContext } from 'react'
import {TutorialProvider}  from '../context/tutorialContext'

export function  useTutorial(){
    const value = useContext(TutorialProvider)
    return value
}