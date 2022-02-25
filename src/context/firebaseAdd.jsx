
import { firebase }from '../services/firebase'



export function addInfoInData(e){

    const  perfil =  {
        idUser: e.idUser,
        name: e.name,
        avatar:e.avatar,
        diaPedido:e.diaPedido,
        horaPedido:e.horaPedido
    }

    const  tabelUsers = firebase.firestore().collection('Users')
    tabelUsers.add(perfil)
}

export function loadPosts(){
    const  tabelUsers = firebase.firestore().collection('Users')
    tabelUsers.get().then( snap =>{
        snap.forEach(doc =>{

            writeUser(doc)
            
        })
    })

}

export function writeUser(doc){

        const ListUser = 
        `<li id=${doc.idUser}>
        ${doc.data().diaPedido}
        ${doc.data().horaPedido}
        </li>`
    

    document.getElementById('post').innerHTML += ListUser

}

export async function Compatative (userData){
    
    var kantMartela = 10
    const db = firebase.firestore()

    const dbData  = await db.collection('Users').get();
    dbData.forEach((doc) => {
            if(doc.data().horaPedido  == userData.horaPedido && doc.data().diaPedido == userData.diaPedido){
                return kantMartela = 20;
            }
        })
        if(kantMartela == 20){
            return kantMartela;
        }else {
            return kantMartela;
        }
}

export async  function listHorariosThisUser(idUser){

    const db = await firebase.firestore().collection('Users');
    document.getElementById('post').innerHTML = 'Buscando . . .';
    db.get().then((snap =>{
        document.getElementById('post').innerHTML = '';    
        snap.forEach(doc =>{

            if(doc.data().idUser == idUser){
                writeUser(doc)
            }
        })
    }))

}


export async function listHorariosHoje(){
   
    const dateHoje = new Date();

    var dayHoje = dateHoje.getDate();
    var monthHoje = dateHoje.getMonth()+1;
    var yearHoje = dateHoje.getFullYear();

    var dateFormattedHoje = dayHoje + '/' + (monthHoje) + '/' + yearHoje


    
    const db = await firebase.firestore().collection('Users');
    db.get().then((snap => {
        snap.forEach(doc =>{
            //if(doc.data().diaPedido == dateFormattedHoje){
               writeAdm(doc);
            //}
        })
    }))

}

function writeAdm(doc){
    const ListUser = 
    `<p>Voce vai atender:
    <img src='${doc.data().avatar}'/>
    ${doc.data().name} as
    ${doc.data().horaPedido} Horas
    </p>`

    document.getElementById('horarios').innerHTML += ListUser

}


///////////////////////////////////////////////////////
 
export function InsertTutorial(e){

    const Tutorial = {
        Title : e.title,
        Descricao : e.descricao,
        File : e.file
    }
    const tableTutorial = firebase.firestore().collection('Tutoriais');
    tableTutorial.add(Tutorial)

}

export async function CreateStorageURL(arqv){

    var ref = firebase.storage().ref().child('Arquivos');
    const tableTutorial = firebase.firestore().collection('Tutoriais');
    var task = ref.child((arqv.name).toString()).put(arqv);
    

    await task.then(snapshot => { 
        snapshot.ref.getDownloadURL().then(
            url => { 
                alert(url)
            });
    });

    
}



function WriteTutoriais(doc){
    const ListTutorial = `
    <div id='box-data-base'>
        <h1> ${doc.data().Title} </h1>
        <p>${doc.data().Descricao} </p>
        <a href="${doc.data().File}" download>Baixar Tutorial</a>
    </div>    
    `

    document.getElementById('box').innerHTML += ListTutorial 

}

export function WriteDisplay(){

    const tableTutorial = firebase.firestore().collection('Tutoriais');
    tableTutorial.get().then((snap =>{
        snap.forEach(doc =>{
          WriteTutoriais(doc)
        })
    }))
    
}


/*
http://responsiveslides.com/#:~:text=ResponsiveSlides.js%20is%20a%20tiny%20jQuery%20plugin%20that%20creates,including%20all%20IE%20versions%20from%20IE6%20and%20up.
*/


export function  WriteDisplayTutoriais(){


    const tableTutorial = firebase.firestore().collection('Tutoriais');
    tableTutorial.get().then((snap =>{
        snap.forEach(doc =>{
          writeTitle(doc);
        })
    }))

}

function writeTitle(doc){
    
    const table = `<li>${doc.data().Title}</li>`
    document.getElementById('Tutorias').innerHTML += table;
}