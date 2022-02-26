let conta = document.getElementById("conta")

let b=`<h2>LOGIN</h2>
<p>Get access to your account</p>
<input type="text" id="email1" placeholder="Email Or Mobile Number"><br>

<input type="text" id="pass1" placeholder="Enter your password here"><br>

<button onclick="getdata(event)">CONTINUE</button>
<div id="main1">
<div id="inst1">
    <p>OR Login Using</p>
</div>
<div id="image">
    <img src="https://d2xamzlzrdbdbn.cloudfront.net/imagesrewamp/checkout/login-via-facebook.png" class="one">
    <img src="https://d2xamzlzrdbdbn.cloudfront.net/imagesrewamp/checkout/login-via-google.png" class="two one" ,id="got">
</div>
</div>
<div id="newone1">
    <p>New to Vijay Sales?</p>
    <p class="color"> <a href="../SIGNUP_PAGE/signup.html">Create Account</a></p>
</div>`
 

conta.innerHTML=b

let email = document.getElementById("email1").value

function getdata(event){
    event.preventDefault();
let email = document.getElementById("email1").value
}

// document.querySelector("#info").addEventListener("submit",data);
let userData=JSON.parse(localStorage.getItem("userDatabase"));
let userData1=JSON.parse(localStorage.getItem("userDatabase1"));

// console.log(arr)
var flag = false;
function getdata(event){
   event.preventDefault();
   
   let lemail=document.getElementById("email1").value;
   let lpass=document.getElementById("pass1").value
   
userData.map(function(ele){
if(lemail==ele.email  ){
    flag=true;
    // check()
    
}

})
console.log(flag)
// check();
var a=false;

userData1.map(function(ele){
    if(lpass==ele.pass  ){
        a=true;
        // check()
        
    }
   
    })
    console.log(a)
    // check();
    
check(flag,a);
}
function check(flag,a){
if(flag == true && a==true) {
    window.location.href="/index.html"
}
else{
    alert("wrong credentials")
}
}

let m= document.getElementById("got");
console.log(m)
m.addEventListener("click",goo);


async function goo(){
    window.location.href="http://localhost:2233/auth/google"
}





