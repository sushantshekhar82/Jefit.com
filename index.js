let session=localStorage.getItem("session");
let data=JSON.parse(localStorage.getItem("logindata"));

 
    if(session){
    //    console.log(data[data.length-1].email,);
  document.getElementById("login1").innerText="";
 let x= document.getElementById("signup1");

 x.setAttribute("class","email");
 let y=document.getElementById("btn");
 y.setAttribute("class","javabtn");
 let p=document.getElementById("useremail");
 p.innerText=data[data.length-1].email;
 p.style.color="yellow";
 let p2=document.getElementById("logout");
 p2.innerText="Logout";
 p2.addEventListener('click',logoutfun);
 function logoutfun(){
    localStorage.setItem("session1",flag="true");
    alert("logout successfully");
    localStorage.clear();
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
$(".carousel").owlCarousel({
    margin:10,
    loop:true,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    responsive:{
      1000:{
      items:10,
      nav:false
      }
    }
  });
  $(".carousel1").owlCarousel({
    margin:10,
    loop:true,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    responsive:{
      1000:{
      items:3,
      nav:false
      }
    }
  });