const SMILE=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-smile" viewBox="0 0 16 16">
<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
<path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.5 3.5 0 0 0 8 11.5a3.5 3.5 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5"/>
</svg>`

const SAD=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-frown" viewBox="0 0 16 16">
<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
<path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.5 3.5 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.5 4.5 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5"/>
</svg>`


let vize=prompt("Vize notunuzu giriniz:")
let final=prompt("Final notunuzu giriniz:")
let ortalama= (vize*0.3) + (final*0.7)
let textInfo;
let info=document.querySelector("#info")


if(ortalama>=0 && ortalama<=100){
    textInfo = SMILE
    info.classList.add("text-primary")
    if(ortalama>=90){
        textInfo+=" AA"
    }
    else if(ortalama>=85){
        textInfo+=" BA"
    }
    else if(ortalama>=80){
        textInfo+=" BB"
    }
    else if(ortalama>=75){
        textInfo+=" CB"
    }
    else if(ortalama>=70){
        textInfo+=" CC"
    }
    else if(ortalama>=65){
        textInfo+=" DC"
    }
    else if(ortalama>=60){
        textInfo+=" DD"
    }
    else if(ortalama>=50){
        textInfo+=" FD"
    }
    else if(ortalama<50){
        textInfo=`${SAD} FF`
        info.classList.remove("text-primary")
        info.classList.add("text-danger")
    }

}
else{
    textInfo="Bilgiler Hatalı"
}


info.innerHTML=`${textInfo} --> ${ortalama}`