
import React from 'react'
import "../style/sobre.scss" 
import logoPg from '../style/images/iconPG.png'
import logoCentro from '../style/images/logoCyber.png'
import Slider from '../Components/Slider/Slider.js'
import {BarTitle} from '../Components/bar.jsx'

export function pageSobre(){


    return (
    <>
     <BarTitle />
      <Slider /> 
        <div className='sobre'>
                <div className='box-slider'>
                </div>
                <div className='box-info'>
                    <div className='info-1'>
                    <h1>O que é o CyberCentro?</h1>
                        <p>
                        O CyberCentro é uma local de atendimentos ao publico,  voltado para a população 
                        com menos condições.Nossos serviços abrangem muitas areas, com uma presença maior
                        em atendimentos como requisições de documentos fornecidos por orgãos do governo, como 
                        CRLV e contas em geral.
                        </p>
                    </div>   
                    <div className='info-2'>
                     <h1>Planos para o futuro</h1>   
                        <p> 
                        Um projeto pensado por nossos colegas teve inicio quando percebemos que poderiamos 
                        fazer mais por vocês, assim surgindo a ideia de disponiblizamos alguns minicursos 
                        com a intuito de despertar interesse na area. Assim podendo inflienciar que novos proficionais. 
                        </p>
                    </div> 
                    </div>     
                    <div className='box-botton'>     
                        <div className='iconCyber'> 
                            <img src={logoCentro} />
                        </div>
                        <div className='iconDev'>
                            <div className='contatos-sobre'>
                                <p>Contato: telecentro.pinhal2021@gmail.com</p>
                            </div>
                        </div>
                        <div className='iconPG' >
                            <img src={logoPg} />
                        </div>
                    </div>
        </div>
       
    </>
    )

}