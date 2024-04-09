let isUser;
let left = document.querySelector('.imgDiv1')
let right = document.querySelector('.imgDiv2')    
function setTiming(){
    let timePlace = document.querySelector('.timing');
    let time = new Date().getHours() + "/";
    time += new Date().getMinutes() + "/";
    time += new Date().getSeconds();
    // console.log(time)
}
var endTime = new Date("2024-04-11T00:00:00") / 1000;
function setClock() {
    var elapsed = new Date() / 1000;
    var totalSec =  endTime - elapsed;
    var h = parseInt( totalSec / 3600 )
    var m = parseInt( totalSec / 60 ) % 60;
    var s = parseInt(totalSec % 60, 10);
    var result = h + " Hours, " + m + " Minutes " + s + " Seconds";    
    document.querySelector('.timing').innerText = result;
    setTimeout(setClock, 1000);
}

addEventListener('load', () => {
    setClock();
    isUser = location.search
    let whatsapp = document.querySelector('.whatsapp');
    let addUser = document.querySelector('.addUser');
    let mainText = document.querySelector('.animate-charcter');
    if(isUser == "" ){        
        mainText.innerText = "Kapil"
        addUser.style = 'display : flex';
    }else{
        left.style = "display : none;";
        right.style = "display : none;";
        left.classList.remove('d-flex', 'justify-content-end')
        if(isUser.indexOf("+") > 0){            
            isUser = isUser.slice(isUser.indexOf('=') + 1, isUser.length)
            isUser = isUser.replace("+", " ")            
            mainText.innerText = isUser;
            addUser.style = 'display : none';
            whatsapp.style = 'display : inline';
            if(isUser.indexOf("@") > 0){
                mainText.innerText = isUser.slice(0, isUser.length-1);        
                whatsapp.style = 'display : none';
                whatsapp.setAttribute('style', 'display : none;');
                addUser.setAttribute('style', 'display : flex;');
            }
        }else{
            addUser.style = 'display : none';
            whatsapp.style = 'display : inline';
            mainText.innerText = isUser.slice(isUser.indexOf('=') + 1, isUser.length)
            if(isUser.indexOf("@") > 0){
                mainText.innerText = isUser.slice(isUser.indexOf('=') + 1, isUser.length - 1)
                whatsapp.setAttribute('style', 'display : none;');
                addUser.setAttribute('style', 'display : flex;');
            }
        }
        // http://127.0.0.1:5500/index.html?user=Anirudh
        document.querySelector('.soundBox').style = "display: none";
        // addUser.style = 'display : none';
        // whatsapp.style = 'display : inline';
    }

    setInterval(() => (
        setTiming()
    ), 1000)
})




const fireWorkSound = () => {
    let sound = document.querySelector('.soundBox');
    
    let player = document.getElementById('control');
     
    function removing(){
        document.querySelector('.gate').setAttribute('style', "display : none");
        left.classList.remove('d-flex', 'justify-content-end')
        left.setAttribute('style', 'display: none;')
        right.setAttribute('style', 'display: none;')
        sound.style = "display : none;"
    }
    player.play();
    left.style = "animation-name: animateGate1;"
    right.style = " animation-name: animateGate2; "
    setTimeout(() => (
        removing()
    ), 2000)

}

const setText = () => {
    let setter = document.querySelector('.setText');    
    let previous = setter.getAttribute('href');
    let directUrl = window.location.href;
    let eqIdx = previous.indexOf('=') + 1;
    let spIdx = previous.indexOf(" ");    
    previous = previous.replace(previous.slice(eqIdx,spIdx), location.search.slice(location.search.indexOf("=") + 1))
    let finalUrl =  previous + " " + directUrl + "@"
    if(finalUrl.indexOf("+") > 0){
        finalUrl = finalUrl.replace("+", "");
    }    
    finalUrl = finalUrl.replace("+", "");
    document.querySelector('.setText').setAttribute('href',finalUrl) ;
}




const changeUser = (e) => {
    // console.log(window.location.href)
    // console.log(location.search)
    
    // if(isUser != ""){
    //     console.log("Wahtsapp not show")
    // }else{
    //     console.log("show")
    // }
}