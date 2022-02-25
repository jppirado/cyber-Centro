
import React from 'react'
import '../style/tutorial.scss'
import {WriteDisplay} from '../context/firebaseAdd'
import logoCentro from '../style/images/logoCyberWhite.png'

export function tutorialPages() {

    WriteDisplay()
    
    return (
        <>
            <div className='body-box'>
                <header className='Tutorial-header'>
                    <img src={logoCentro} />
                </header>    
                    <h1 className='h1-tuto'>Alguns Tutoriais</h1>
                <section className='Tutorias-body-data'>    
                    <div className='box-box'>
                    <div id='box'> </div>
                    </div>
                </section>    
            </div>

        </>
    )

}



