// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
document.addEventListener('DOMContentLoaded',function (){
    let itemAccount = document.getElementsByClassName("account");
    console.log(itemAccount);
    itemAccount.textContent = 'Login in';
    console.log(itemAccount);
    // let buttonSignIn = document.getElementsByClassName("sign_in");
    //
    // buttonSignIn.onclick = signIn();
    function signIn() {
        itemAccount.textContent = 'Login out';
        console.log(itemAccount);
    }
    
},false);