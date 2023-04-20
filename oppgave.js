
const type = "rosa";
const oppgaver = [
    {id:1, beskrivelse:"Hopp hvor mange år du er", icon:"🪂", lyd:"oppgave1.m4a" },
    {id:2, beskrivelse:"Vis din kuleste dans", icon:"💃", lyd:"oppgave2.m4a" }
]

const oppgaveBeskrivelse = document.getElementById("oppgave");
const bilde = document.getElementById("bilde");
const lydknapp = document.getElementById("lyd");
let oppgaveLyd = lagLyd();
document.body.appendChild(oppgaveLyd);


function lagLyd(){
    let a = document.createElement("audio");
    a.setAttribute("preload","none")
    document.body.appendChild(a);
    return a
}

function showTask(oppgave){
    // Viser teksten
    oppgaveBeskrivelse.innerText = oppgave.beskrivelse;
    bilde.innerText = oppgave.icon;
    oppgaveLyd.src = `lydfiler/${type}/${oppgave.lyd}`;

}

let oppgaveIndex = Math.round( Math.random() * (oppgaver.length-1)) ;

showTask(oppgaver[oppgaveIndex]);

lydknapp.onclick = () => {
    oppgaveLyd.play();
}