
ScrollReveal().reveal('#home_img',{

    origin: 'top',
    distance: '250px',
    duration: '1500' 

});

ScrollReveal().reveal('#home_text',{

    origin: 'bottom',
    distance: '250px',
    duration: '1500' 

});

ScrollReveal().reveal('#about_text',{

    origin: 'bottom',
    distance: '250px',
    duration: '1500' 

});

ScrollReveal().reveal('#about_img',{

    origin: 'top',
    distance: '250px',
    duration: '1500' 

});


ScrollReveal().reveal('#language',{

    
    duration: '2000', 
    interval:'300'


});

ScrollReveal().reveal('.card',{

    
    duration: '2000', 
    interval:'300'


});


function send_mail() {

    
    if (document.querySelector(".name").value=="") {
       
        document.querySelector(".name").style.animation="anim3 0.1s both";
        document.querySelector(".name").style.animationIterationCount="2";

        setTimeout(() => {
            document.querySelector(".name").removeAttribute("style")
        }, 500);
   
    } else if (document.querySelector(".email").value=="") {
        
        document.querySelector(".email").style.animation="anim3 0.1s both";
        document.querySelector(".email").style.animationIterationCount="2"

        setTimeout(() => {
            document.querySelector(".email").removeAttribute("style")
        }, 500);

    } else if (document.querySelector(".message").value=="") {
        
        document.querySelector(".message").style.animation="anim3 0.1s both";
        document.querySelector(".message").style.animationIterationCount="2"

        setTimeout(() => {
            document.querySelector(".message").removeAttribute("style")
        }, 500);

    } else if (document.querySelector(".email").value.indexOf("@")==-1) {

        if (document.querySelector("#alert")) {document.querySelector("#alert").remove()}    
        document.getElementById("div_send").innerHTML+="<div id='alert' style='background-color: rgba(255, 0, 0, 0.384);'><img src='public/images/error.png' alt='error'>Email incorrect.</div>";
        document.getElementById("alert").style.animation="anim3 0.1s both";
        document.getElementById("alert").style.animationIterationCount="2"
        

    } else {

        if (document.querySelector("#alert")) {document.querySelector("#alert").remove()} 
        document.getElementById("btn_send").innerHTML+="<div class='spinner-border spinner-border-sm spinner' role='status'><span class='visually-hidden'></span></div>";
        emailjs.init("3wChtHIbE8tupy9Jn");

        let params={

        name:document.querySelector(".name").value,
        email:document.querySelector(".email").value,
        message:document.querySelector(".message").value,

        } 

        const serviceid="service_u9o74js";
        const templateid="template_iawv3r6";

        emailjs.send(serviceid,templateid,params)
        .then(res=>{

        if (document.querySelector("#alert")) {document.querySelector("#alert").remove()}   
        document.getElementById("div_send").innerHTML+="<div id='alert' style='background-color: rgba(6, 145, 110, 0.363);'><img src='public/images/Ok.png' alt='Ok'>Email envoyé avec sucées.</div>"
        document.querySelector(".name").value=""
        document.querySelector(".email").value=""
        document.querySelector(".message").value=""
        document.querySelector(".spinner").remove()

        })
        .catch(err=>{
         
        if (document.querySelector("#alert")) {document.querySelector("#alert").remove()}     
        document.getElementById("div_send").innerHTML+="<div id='alert' style='background-color: rgba(255, 0, 0, 0.384);'><img src='public/images/error.png' alt='error'>Erreur d'envoie de l'email, Essayer <a href='https://api.whatsapp.com/send?phone=213558775778'>WhatsApp?</a></div>";
        document.getElementById("alert").style.animation="anim3 0.1s both";
        document.getElementById("alert").style.animationIterationCount="2"
        document.querySelector(".spinner").remove()})
    
    }

}
