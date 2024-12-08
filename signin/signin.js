


$(this).addClass("active");
$(document).ready(function() {
   

    $(".card-toggle").on("click", function() {
  
        $(".card-toggle").removeClass("active");
        
 
        $(this).addClass("active");
   
        $(".card").removeClass("active");
        
        var target = $(this).data("target");
        $(target).addClass("active");
    });
});
async function loadCard() {
    const signPlaceholder = document.getElementById("sign_up");
    

    const response = await fetch("signin/signin.html");
    const signHtml = await response.text();
    signPlaceholder.innerHTML = signHtml;


    const signCssLink = document.createElement('link');
    signCssLink.rel = 'stylesheet';
    signCssLink.href = 'signin/signin.css'; 
    document.head.appendChild(signCssLink);


    const signInScript = document.createElement('script');
    signInScript.src = 'signin/signin.js'; 
    document.body.appendChild(signInScript);
}

document.addEventListener('DOMContentLoaded', loadCard);
