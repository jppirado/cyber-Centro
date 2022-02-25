import iconGoogle from '../style/images/iconGoogle.svg'
import React from 'react'
import '../style/index.scss'
import { useAuth } from '../hooks/useAuth.jsx'
import { useHistory } from 'react-router'
import marca from '../style/images/logoCyber.png'
import icon from "../style/images/iconCyber.ico"
import { Link } from 'react-router-dom'

export function Home() {

    const history = useHistory();

    const { LoginWithGoogle} = useAuth();

    async function navigateToMenu() {

       await LoginWithGoogle()
    }


   
    return (
        <>
            <header className="header-home">
                <nav className="nav-home">
                    <img src={icon} id='iconLogo' />
                    <Link to='/sobre' className='link-home'>SOBRE</Link>
                </nav>
            </header>    
                <section className="section-home">
                    <div className="box-1">
                    <div className='box-h1'>   
                        <h1 className='title-h1'>Bem Vindo ao Telecentro</h1>
                        <h3 className='h3' >O site de serviços online</h3>
                    </div>   
                    </div>
                    <div className="box-2">
                        <main className='main-home'>
                            <div>
                                <img src={marca} className='marca' />
                            </div>
                            <div id='loginGoogle'>
                                <p className='list'>Entre com o Google</p>
                                <button
                                    className='button-google'
                                    onClick={navigateToMenu}>
                                    <img src={iconGoogle} />
                                    <p> oogle </p>
                                </button>
                            </div>    
                        </main>
                    </div>
                </section>
        </>
    )

}







