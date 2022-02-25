import React from 'react'
import '../style/meupage.css'
import { useAuth } from '../hooks/useAuth'
import { useHistory } from 'react-router';
import { IsAdm } from '../context/privateRoute'
import iconAdm from  '../style/images/iconAdmin.png'
import  {WriteDisplayTutoriais} from '../context/firebaseAdd'

import logoCyberWhite from '../style/images/logoCyberWhite.png'

export function Menu(){
    const { user } = useAuth();
    const history = useHistory();
    WriteDisplayTutoriais()
    function navigateToAgendament() {
        history.push('/menu/mark');
    }

    function navigateToTutorial() {
        history.push('/menu/tutorial');
    }
    function navigateToCurso() {
        alert('Estamos trabalhando para que essa pagina fique pronta')
        //history.push('/menu/curso');
    }
    function navigateToAdmin() {
        if (IsAdm(user.id)) {
            history.push('/admin')
        } else {
            alert('Você Não permissão para acessar essa pagina')
        }
    }

    return (
            <>
                <header className='header-menu'> 
                    <nav className='nav-menu'>
                        <img src={logoCyberWhite} className='iconLogoCyber'/>
                    </nav> 
                    <nav  className='nav-menu'>
                            <img src={user.avatar} className='imagem-do-usuario'/>
                            <p className='nameUser-menu'>{user.name}</p> 
                    </nav> 
                    <nav  className='nav-menu'>
                        <button onClick={navigateToAdmin} className='buttonAdm-button'>
                            <img src={iconAdm} className='iconAdm'/>
                        </button>
                    </nav>       
                </header>
                <section className='section-menu'>
                    <div className='section-menu-x'>
                        <h1 className='h1-menu'>Agendar</h1>
                            <div className="sub-box-menu">
                                <ul className='lista-menu'>
                                    <li>Imprimir Conta de luz</li>
                                    <li>Imprimir Conta De telefone</li>
                                    <li>Imprimir CRLV</li>
                                    <li>Imprimir arquivos</li>
                                    <li>Entre outros</li>
                                    <li>Consultar agendamentos</li>
                                </ul>
                            </div>
                        <button  className='button-menu' onClick={navigateToAgendament}>Agendar</button>
                    </div>
                    <div className='section-menu-x'>
                        <h1 className='h1-menu'>Tutoriais</h1>
                            <div className="sub-box-menu">
                                <ul id='Tutorias'>
                                </ul>    
                            </div>
                        <button 
                            className='button-menu'
                            onClick={navigateToTutorial}>
                            Tutoriais
                        </button> 
                    </div>
                    <div className='section-menu-x'>
                        <h1 className='h1-menu'>Cursos</h1>
                            <div className="sub-box-menu">

                            </div>    
                            <button
                                className='button-menu' 
                                onClick={navigateToCurso}>
                                Cursos
                            </button>
                    </div>
                </section>
        </>
    )
}
