const form = document.forms[0];
const text = form.getElementsByTagName("p")
form.addEventListener("submit",function(){
    event.preventDefault();
    let valid = true;
    for (let i=0; i<4; i++){
        if ((i!=2&&form.elements[i].value=="") || (i==2 && validEmail()===false)) {
            valid = false;
            form.elements[i].style.borderColor="hsl(0, 100%, 74%)";
            form.elements[i].style.backgroundImage = "url('images/icon-error.svg')";
            form.elements[i].style.backgroundRepeat = "no-repeat";
            form.elements[i].style.backgroundPosition = "right 20px center";
            text[i].style.display = "block";
        }
        else{
            form.elements[i].removeAttribute("style");
            text[i].removeAttribute("style")
        }
    }
    if (valid===true){
        form.submit();
    }
})
function validEmail(){
    var email = form.elements[2];
    if (email.value.indexOf("@")==-1 || email.value.indexOf(".")==-1 || email.value.indexOf(".", email.value.indexOf('@'))==-1){
        email.placeholder = "email@example/com";
        email.style.setProperty('--placeholdercolor', "hsl(0, 100%, 74%)");
        email.value="";
        return false;
    }
    else {
        return true;
    }
}


