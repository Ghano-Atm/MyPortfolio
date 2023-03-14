
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




document.getElementById("form_contact").onsubmit= function send_mail(e) {

    e.preventDefault();
    let email=document.querySelector(".email").value;
    let subject=document.querySelector(".subject").value;
    let message=document.querySelector(".message").value;
    
    Email.send({

        SecureToken : "36999e9c-0546-4972-9558-881b7d2f473d",
        To : 'ghanoatm95@gmail.com',
        From : email,
        Subject : subject,
        Body : message

    }).then(
      message => alert(message)
    );

    Email.send({
        Host : "ghanoatm95@gmail.com",
        Username : "Ghano ",
        Password : "password",
        To : 'ghanoatm95@gmail.com',
        From : email,
        Subject : subject,
        Body : message
    }).then(
      message => alert(message)
    );

}