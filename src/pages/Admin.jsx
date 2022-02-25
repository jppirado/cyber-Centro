import React from 'react'
import '../style/admin.scss'
import logoCyber from '../style/images/logoCyberWhite.png'
import { listHorariosHoje ,  CreateStorageURL , InsertTutorial } from '../context/firebaseAdd'
import { useAuth } from '../hooks/useAuth';
import { useHistory } from 'react-router-dom';


export function Admin() {
    listHorariosHoje();
    return (
        <>
            <header className='header-adm'>
                <nav className="nav-menu">
                    <img src={logoCyber} className="iconLogoCyber"/>
                </nav>
                <nav className="nav-menu">
                    <h1 className="h1-adm">Admin</h1>
                </nav>
            </header>
            <section className='section-adm'>
                <aside className="aside-adm">
                    <h1>Atendimentos do dia</h1>
                    <div id='horarios'>
                
                    </div> 
                </aside>
                <aside className="aside-adm">
                        <h1>Inserir Tutoriais</h1>
                        <div className='form-envite-tutorial'>
                            <input type='text' placeholder='Titulo' id='titulo' />
                            <input type='text' placeholder='Descrição' id='descricao' />
                            <input type='text' placeholder='Link arquivo' id='link' />
                            <input type='file' id='file' onChange={HandleCreateURL}/>
                            <button onClick={handleInviteTutorial}> Cadastrar </button>
                        </div>    
                </aside>               
            </section>
        </>
    )

}

function handleInviteTutorial(){

    var Titulo = document.getElementById('titulo').value;
    var Desc = document.getElementById('descricao').value
    var Link = document.getElementById('link').value

    if(Titulo && Desc && Link){

        const Tutorial = {
            title: Titulo,
            descricao :Desc,
            file : Link
        }

        InsertTutorial(Tutorial)
        alert('Novo Tutorial Cadastrado')
    
    }else{
        alert('Faltan dados')
    }
    
}

function HandleCreateURL(){
    
    var arq = document.getElementById('file')

    console.log(arq.files[0])
    CreateStorageURL(arq.files[0])

}

