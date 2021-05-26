// Name Arrays 

const girlNamesPolish = ["Zuzanna","Julia", "Zofia","Lena","Alicja","Oliwia","Laura","Maria","Pola","Amelia","Emilia","Antonina","Wiktoria","Aleksandra","Marcelina","Iga","Helena","Klara","Natalia","Michalina","Gabriela","Nadia","Anna","Blanka","Kornelia","Milena","Jagoda","Nela","Kaja","Nikola","Martyna","Anastazja","Barbara","Liliana","Nina","Weronika","Karolina","Agata","Matylda","Mia","Aniela","Magdalena","Róża","Kinga","Rozalia","Sara","Eliza","Adrianna","Joanna","Liwia","Izabela","Kalina","Małgorzata","Gaja","Paulina","Aurelia","Marianna","Lidia","Katarzyna","Melania","Marta","Urszula","Malwina","Bianka","Dominika","Ewa","Klaudia","Patrycja","Olga","Ida","Zoja","Daria","Jagna","Dorota","Ada","Diana","Kamila","Marika","Lilia","Rita","Elena","Stefania","Luiza","Inga","Dagmara","Jadwiga","Sandra","Oliwia","Żaneta","Zoja","Daria","Alicja","Sandra","Elżbieta","Sofia","Nel","Roksana","Monika","Róża","Wioletta"];
const girlNamesEnglish= ["Olivia","Emma","Ava","Sophia","Isabella","Charlotte","Amelia","Mia","Harper","Evelyn","Abigail","Emily","Ella","Elizabeth","Camila","Luna","Sofia","Avery","Mila","Aria","Scarlett","Penelope","Layla","Chloe","Victoria","Madison","Eleanor","Grace","Nora","Riley","Zoey","Hannah","Hazel","Lily","Ellie","Violet","Lillian","Zoe","Stella","Aurora","Natalie","Emilia","Everly","Leah","Aubrey","Willow","Addison","Lucy","Audrey","Bella","Nova","Brooklyn","Paisley","Savannah","Claire","Skylar","Isla","Genesis","Naomi","Elena","Caroline","Eliana","Anna","Maya","Valentina","Ruby","Kennedy","Ivy","Ariana","Aaliyah","Cora","Madelyn","Alice","Kinsley","Hailey","Gabriella","Allison","Gianna","Serenity","Samantha","Sarah","Autumn","Quinn","Eva","Piper","Sophie","Sadie","Delilah","Josephine","Nevaeh","Adeline","Arya","Emery","Lydia","Clara","Vivian","Madeline","Peyton","Julia","Rylee"];
const boyNamesPolish = ["Antoni","Jakub","Jan","Szymon","Aleksander","Franciszek","Filip","Wojciech","Mikołaj","Kacper","Adam","Stanisław","Marcel","Michał","Wiktor","Piotr","Leon","Igor","Nikodem","Ignacy","Tymon","Mateusz","Miłosz","Maksymilian","Tymoteusz","Bartosz","Oliwier","Alan","Oskar","Krzysztof","Dawid","Tomasz","Karol","Julian","Dominik","Maciej","Gabriel","Hubert","Paweł","Fabian","Natan","Ksawery","Kamil","Bruno","Bartłomiej","Patryk","Borys","Kajetan","Artur","Krystian","Adrian","Olaf","Kuba","Sebastian","Cezary","Eryk","Błażej","Grzegorz","Łukasz","Daniel","Marcin","Tadeusz","Witold","Damian","Rafał","Robert","Henryk","Tobiasz","Jerzy","Józef","Radosław","Przemysław","Kornel","Stefan","Milan","Kazimierz","Mieszko","Emil","Leonard","Olivier","Konrad","Konstanty","Arkadiusz","Nataniel","Marek","Gustaw","Feliks","Teodor","Aleks","Ryszard","Alex","Juliusz","Andrzej","Jeremi","Gracjan","Dorian","Jacek","Iwo","Remigiusz","Ludwik"];
const boyNamesEnglish= ["Liam","Noah","Oliver","William","Elijah","James","Benjamin","Lucas","Mason","Ethan","Alexander","Henry","Jacob","Michael","Daniel","Logan","Jackson","Sebastian","Jack","Aiden","Owen","Samuel","Matthew","Joseph","Levi","Mateo","David","John","Wyatt","Carter","Julian","Luke","Grayson","Isaac","Jayden","Theodore","Gabriel","Anthony","Dylan","Leo","Lincoln","Jaxon","Asher","Christopher","Josiah","Andrew","Thomas","Joshua","Ezra","Hudson","Charles","Caleb","Isaiah","Ryan","Nathan","Adrian","Christian","Maverick","Colton","Elias","Aaron","Eli","Landon","Jonathan","Nolan","Hunter","Cameron","Connor","Santiago","Jeremiah","Ezekiel","Angel","Roman","Easton","Miles","Robert","Jameson","Nicholas","Greyson","Cooper","Ian","Carson","Axel","Jaxson","Dominic","Leonardo","Luca","Austin","Jordan","Adam","Xavier","Jose","Jace","Everett","Declan","Evan","Kayden","Parker","Wesley","Kai"];

//Starting the generator

const arrow = document.querySelector(".start_arrow");
const startSection = document.querySelector(".startSection");

arrow.addEventListener("click", ()=>{
    startSection.style.display="none";
});

// Gender & Language choice 
 
const genderIcons = document.querySelectorAll('.genderIcon');
const genderSection = document.querySelector(".gender");

let generatorTitle = document.querySelector(".generator_wrapTitle");
const finalScreen = document.querySelector(".finalScreen");
let finalStitle =  document.querySelector(".finalScreen_wrapSubtitle");
let finalName =  document.querySelector(".finalName");

const playerChoices = {
    gender:"",
    language:"",
}

function choosenGender(){
    playerChoices.gender = this.dataset.gender;
    if(playerChoices.gender==="boy"){
        generatorSection.style.backgroundImage = "url('/IMG/background2.png')";
        generatorTitle.innerHTML="IT'S A BABY BOY!";
        document.getElementById("generatorIcon").src = 'IMG/baby-boy.png';
        finalScreen.style.backgroundImage = "url('/IMG/congratulations_boy.png')";
        finalStitle.innerHTML="YOUR BABY BOY'S NAME IS :";
        finalName.style.color="var(--boy_fontColor)";
        document.getElementById("finalIcon").src = 'IMG/baby-boy_BIG.png';
    }
    // console.log(playerChoices.gender);
    genderSection.style.display="none";
}

genderIcons.forEach(genderIcon=>genderIcon.addEventListener('click',choosenGender));

const languageIcons = document.querySelectorAll('.languageIcon');
const languageSection = document.querySelector(".language");

function choosenLanguage(){
    playerChoices.language = this.dataset.language;
    // console.log(playerChoices.language);
    languageSection.style.display="none";
}

languageIcons.forEach(languageIcon=>languageIcon.addEventListener('click',choosenLanguage));


// Generator handling

const generatorIcon = document.querySelector('.generatorUI_nameproposal_IMG');
let nameProposal = document.querySelector(".nameProposal");
let retryIcon = document.querySelector(".generatorUI_tryAgain_IMG");
let approveIcon = document.querySelector(".generatorUI_approved_IMG");
const generatorSection = document.querySelector('.generator');
let cancel = document.querySelector('.cancel');
let isClicked = false;
let babyClicked = false;


function generateName(){
    const index = Math.floor(Math.random()*100);
    if(playerChoices.gender==="girl"){
        if(playerChoices.language==="polish"){
            nameProposal.innerHTML = `- ${girlNamesPolish[index]} -`;
            finalName.innerHTML =`- ${girlNamesPolish[index]} -`;
        }else{
            nameProposal.innerHTML = `- ${girlNamesEnglish[index]} -`;
            finalName.innerHTML = `- ${girlNamesEnglish[index]} -`
        }
    }else{
        if(playerChoices.language==="polish"){
            nameProposal.innerHTML = `- ${boyNamesPolish[index]} -`;
            finalName.innerHTML = `- ${boyNamesPolish[index]} -`;
        }else{
            nameProposal.innerHTML = `- ${boyNamesEnglish[index]} -`;
            finalName.innerHTML = `- ${boyNamesEnglish[index]} -`
        }
        isClicked=!isClicked
    }
}

generatorIcon.addEventListener('click', ()=>{
    if(!isClicked){
    generateName();
    babyClicked=!babyClicked;
    }else{
        return;
    }
});

retryIcon.addEventListener("click",()=>{
    nameProposal.innerHTML = "";
    finalName.innerHTML ="";
    generateName();
})

approveIcon.addEventListener("click",()=>{
    if(!babyClicked){
        document.querySelector('.popUp').style.display="flex";
    }
    else {
        generatorSection.style.display="none";
    }
})

cancel.addEventListener("click", ()=>{
    document.querySelector('.popUp').style.display="none";
})






