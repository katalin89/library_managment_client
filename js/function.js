function attachLoginPage(){

    let container=document.querySelector(".container");

    container.innerHTML=`

    <div id="root">
    <header>
        <div class="wrap header--flex">
            <h1 class="header--logo"><a href="index.html">Books</a></h1>
            <nav>
                <ul class="header--signedout">
                    <li><a href="sign-up.html">Sign Up</a></li>
                    <li><a href="sign-in.html">Sign In</a></li>
                </ul>
            </nav>
        </div>
    </header>
    <main>
        <div class="form--centered">
            <h2>Sign In</h2>
            
            <form>
                <label for="emailAddress">Email Address</label>
                <input id="emailAddress" name="emailAddress" type="email" value="">
                <label for="password">Password</label>
                <input id="password" name="password" type="password" value="">
                <button class="button" type="submit">Sign In</button><button class="button button-secondary" onclick="event.preventDefault(); location.href='index.html';">Cancel</button>
            </form>
            <p>Don't have a user account? Click here to <a href="sign-up.html">sign up</a>!</p>
            
        </div>
    </main>
</div>
    
    `


    
};

//functie care ia ca parametru userul si password

function verifyUser(){

    let email=document.querySelector(".emailAdress");
     let password=document.querySelector(".password");

}




/*function verifyPassword() {  
  var pw = document.getElementById("pswd").value;  
  //check empty password field  
  if(pw == "") {  
     document.getElementById("message").innerHTML = "**Fill the password please!";  
     return false;  
  }  
   
 //minimum password length validation  
  if(pw.length < 8) {  
     document.getElementById("message").innerHTML = "**Password length must be atleast 8 characters";  
     return false;  
  }  
  
//maximum length of password validation  
  if(pw.length > 15) {  
     document.getElementById("message").innerHTML = "**Password length must not exceed 15 characters";  
     return false;  
  } else {  
     alert("Password is correct");  
  }  
}  */


