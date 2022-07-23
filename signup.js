let form=document.querySelector("form");

let signup=JSON.parse(localStorage.getItem("signupdata"))||[];

form.addEventListener('submit', myfun )

function myfun(event){
    event.preventDefault();
    let signupobj={
        username:document.querySelector("#username").value,
        email:document.querySelector("#email").value,
        password:document.querySelector("#password").value,
        confirmpass:document.querySelector("#confirmpass").value,
        // check:document.querySelector("robot").value,

    }
   
    function checkEmail(email){
     let filter=signup.filter(function(el){
        return email===el.email
     });
     if(filter.length>0){
        return false;
     }
     else{
        return true;
     }

   }

   if(checkEmail(signupobj.email)===true){
    if(signupobj.password===signupobj.confirmpass){
        if(document.getElementById('robot').checked){
            
       signup.push(signupobj);
        localStorage.setItem("signupdata",JSON.stringify(signup));
        alert("Signup successful")
        url_redirect("login.html");
    }else{
        alert("confirm you are not robot by checking")
    }
    
        }
        else{
            alert("password not matched")
        }
       
   
   }
   else{
    alert("User already exist")
    // window.location.reload()
    url_redirect("login.html");
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