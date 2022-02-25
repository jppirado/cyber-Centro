function  f () {
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
        var Horarios = ["8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"];

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
        }
        else {
            var a = window.confirm("Deseja Confirmar O Agendamento");

            if (a == true) {

                var dat = displayDayUser + ' ' + Horarios[timeUserInform]
                var value = false;



                const  horarios = Database.ref(`horarios`).get()

                console.log(horarios.then)
                  

                if (!value) {
                    const add = Database.ref('horarios');
                    const firebaseHorario = add.push({
                        date: displayDayUser + ' ' + Horarios[timeUserInform]
                    });
                    alert(`Seu Horário Foi Agendado Para: ${diasSemana[dateUser.getDay()]}, ${displayDayUser}, as  ${Horarios[timeUserInform]} Horas`);
                    history.push('/menu');
                }

            }
        }
    }