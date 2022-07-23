let form=document.querySelector("form");

let login=JSON.parse(localStorage.getItem("signupdata"));
let login1=JSON.parse(localStorage.getItem("logindata"))||[];

form.addEventListener('submit', myfun )

function myfun(event){
    event.preventDefault();
    let loginobj={
     
        email:document.querySelector("#email").value,
        password:document.querySelector("#password").value,
        flag:true,
      
       
    }
    if(checklogin(loginobj.email,loginobj.password)===true){
        login1.push(loginobj);
        localStorage.setItem("logindata",JSON.stringify(login1));
        alert("Login successful");
        url_redirect("navbar.html");

    }else{
        alert("wrong email or password")
    }
}
function checklogin(email,password){
    let filter=login.filter(function(el){
        return el.email===email&&el.password==password;
    })
    if(filter.length>0){
        return true;
    }
    else{
        return false;
    }
}
function url_redirect(url){
    var X = setTimeout(function(){
        window.location.replace(url);
        return true;
    },300);

    if( window.location = url ){
        clearTimeout(X);
        return true;
    } else {
        if( window.location.href = url ){
            clearTimeout(X);
            return true;
        }else{
            clearTimeout(X);
            window.location.replace(url);
            return true;
        }
    }
    return false;
};