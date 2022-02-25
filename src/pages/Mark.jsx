import React from 'react'
import { useAuth } from "../hooks/useAuth"
//import '../style/mark.scss'
import '../style/markPage.scss'
import { useHistory } from 'react-router';
import { addInfoInData, Compatative, listHorariosThisUser } from '../context/firebaseAdd'
import { Link } from 'react-router-dom'
import logoCyberWhite from '../style/images/logoCyberWhite.png'


export function Mark() {

    const history = useHistory()

    const { user } = useAuth();


    function teste() {
        var dayUserInform = document.getElementById('day').value;
        var timeUserInform = document.getElementById('listTime').value;

        var dateUser = new Date(dayUserInform);
        var dateHoje = new Date();

        var dayUser = dateUser.getDate();
        var monthUser = dateUser.getMonth();
        var yearUser = dateUser.getFullYear();

        var dayHoje = dateHoje.getDate();
        var monthHoje = dateHoje.getMonth();
        var yearHoje = dateHoje.getFullYear();

        var dateFormatted = dayUser + '/' + (monthUser) + '/' + yearUser;

        var displayDayUser = dayUser + 1 + '/' + (monthUser + 1) + '/' + yearUser;

        var dateFormattedHoje = dayHoje + '/' + (monthHoje) + '/' + yearHoje

        var partesDateUser = dateFormatted.split("/");
        var partesDateHoje = dateFormattedHoje.split("/");

        var data = new Date(partesDateUser[2], partesDateUser[1] + 1, partesDateUser[0]);
        var DataHoje = new Date(partesDateHoje[2], partesDateHoje[1] + 1, partesDateHoje[0])

        var diasSemana = ['Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado', 'Domingo'];
        var Horarios = ["8:00", "9:00", "10:00", "11:00", "12:00", "14:00", "15:00", "16:00"];

        if (!timeUserInform || !dayUserInform) {
            alert('Faltam campos a serem preenchidos');
        } else if (DataHoje > data) {
            alert('Insira uma data válida');
        } else if (diasSemana[dateUser.getDay()] === 'Sábado' || diasSemana[dateUser.getDay()] === 'Domingo') {
            alert('O atendimento não é efetuado de Sábado e Domingo');
        } else if (diasSemana[dateUser.getDay()] === 'Sexta-Feira' && parseInt(timeUserInform) > 4) {
            alert('Atendemos até a Uma da tarde')
        } else if (diasSemana[dateUser.getDay()] !== 'Sexta-Feira' && parseInt(timeUserInform) >= 3 && parseInt(timeUserInform) <= 4) {
            alert('Não atendemos essa hora');
        } else {

            var pedidoid = {
                horaPedido: Horarios[timeUserInform],
                diaPedido: displayDayUser
            }

            var kantMartela = Compatative(pedidoid)

            kantMartela.then((doc => {
                if (doc == 20) {
                    alert('Ja possuem atendimentos nessa hora');
                } else if (doc == 10) {
                    var pedido = {
                        idUser: user.id,
                        name: user.name,
                        avatar: user.avatar,
                        horaPedido: Horarios[timeUserInform],
                        diaPedido: displayDayUser
                    }

                    addInfoInData(pedido);
                    alert(`Seu Agendamento foi Registrado!`);
                    history.push('/menu')
                }
            }))
        }
    }

    function list() {
        var userid = user.id
        listHorariosThisUser(userid)
    }

    return (
        <>
            <div className='body-mark-page'>
                <header className='header-mark-page'>
                    <img src={logoCyberWhite} className='logo-cyber-mark' />
                    <div className='user-data-mark'>
                        <p>{user.name}</p>
                        <img src={user.avatar} />
                    </div>
                </header>
                <section className='section-mark-page'>
                    <div className='section-mark-data'>
                            <div className='body-text-block'>
                            <div className='text-block'>
                                <h1 className='text'>Agende aqui</h1>
                             </div>
                         </div>    
                        <div className='div-mark-data'>
                            <p className='list'>Selecione a data</p>
                            <input type="date" id="day" className='inputDate' />
                            <p className='list'>Selecione a hora</p>
                            <select id='listTime'>
                                <option value='0'>8:00</option>
                                <option value='1'>9:00</option>
                                <option value='2'>10:00</option>
                                <option value='3'>11:00</option>
                                <option value='4'>12:00</option>
                                <option value='5'>14:00</option>
                                <option value='6'>15:00</option>
                                <option value='7'>16:00</option>
                            </select>

                            <Link to='/menu' className='link'>
                                Voltar para o menu
                            </Link>
                        </div>
                        <button className="mark-button"
                            onClick={teste}>
                            Confirmar Data
                        </button>
                    </div>
                    <div className='section-mark-display'>
                        <h1>Consulte seus Agendamentos</h1>
                        <div className='ul-mark'>
                            <ul id='post'>
                                Seus Agendamentos aparecerão aqui!
                            </ul>
                        </div>
                        <div className='mm'>
                            <button className="mark-button"
                                onClick={list}
                            >Consultar Agendamentos
                            </button>

                        </div>
                    </div>
                </section>

            </div>
        </>
    )

}

