let container = document.getElementById("container")


let x=` <h2>SIGN UP</h2>
<p>With your Email ID or Mobile Number to get started</p>
<input type="text" id="email" placeholder="Email Or Mobile Number"><br>
<p>By continuing you agree to Vijay Sales Terms of Use and Privacy Policy.</p>

<button onclick="getdata(event)">CONTINUE</button>
<div id="main">
<div id="inst">
    <p>OR Login Using</p>
</div>
<div id="image">
    <img src="https://d2xamzlzrdbdbn.cloudfront.net/imagesrewamp/checkout/login-via-facebook.png" class="one">
    <img src="https://d2xamzlzrdbdbn.cloudfront.net/imagesrewamp/checkout/login-via-google.png" class="two one", id="google">
</div>
</div>
<div id="newone">
    <p>Existing User?</p>
    <p class="color"> <a href="../SIGNIN_PAGE/signin.html">Login</a></p>
</div>
`
container.innerHTML=x

let email = document.getElementById("email").value


function resendOTP(event){
    event.preventDefault();
    let i= Math.ceil(Math.random()*5000)+1000;

    setTimeout(()=>{
        alert(`Your OTP Is ${z}`) 
        }, 5000)
}
let userData=JSON.parse(localStorage.getItem("userDatabase")) ||[];
function getdata (event){
    event.preventDefault();
let email = document.getElementById("email").value

let userCrd={
           email:email
       }
       userData.push(userCrd)

localStorage.setItem("userDatabase",JSON.stringify(userData))

let z= Math.ceil(Math.random()*5000)+1000;
setTimeout(()=>{
    alert(`Your OTP Is ${z}`) 
   
}, 5000)


setTimeout(()=>{
    let otp=document.getElementById("otp").value
   

}, 5000)



if(email.length > 0){
    let y = `
    <h2>SIGN UP</h2>
    <p>With your Email ID or Mobile Number to get started</p>
    <input type="text" id="email" value=${email} />
    <p>OTP Sent Successfully</p>
    <div id="send">
     <input type="text" id="otp" placeholder="Enter OTP"><br>
     <button onclick="resendOTP(event)" id="resend">Resend OTP ?</button><br>
          </div>
    <input type="text" id="pass" placeholder="Set Password"><br>
    <button onclick="setdata(event)">SignUp</button>`
container.innerHTML=y


}else{
    container.innerHTML=x
}


}




let userData1=JSON.parse(localStorage.getItem("userDatabase1")) ||[];

function setdata (event){
event.preventDefault();
let pass = document.getElementById("pass").value;
let otp =document.getElementById("otp").value;

let userCrden={
    pass:pass,
    otp:otp
}
userData1.push(userCrden)

localStorage.setItem("userDatabase1",JSON.stringify(userData1))


window.location.href="../SIGNIN_PAGE/signin.html"
}

let n= document.getElementById("google");
n.addEventListener("click",go);

async function go(){
    window.location.href="http://localhost:2233/auth/google"
}

data= JSON.stringify(data)

let response = await fetch(`http://localhost:2233/auth/google/register`,{

    method:"POST",

    body:data,

    headers:{
        "Content-Type":"application/json"
    }


})







