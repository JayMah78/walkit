$('h1').css({"color": "black", "font-family": "sans-serif"})


$("form").css({"background-color": "#137366", "color": "white", "font-family": "serif"});

$('button').css({"background": "black", "position": "relative", "bottom": "10px"});

$('footer').append("<h4>Thank you for visiting us!</h2>");
$('h4').css({"position": "relative", "top": "530px", "text-align": "center"});

$('.btn').click(function(){
    alert("We appreciate you taking the time to contact us, we will get back to you very soon!!!");
    $('.contactForm').submit();
})