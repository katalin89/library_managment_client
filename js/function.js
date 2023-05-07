function attachLoginPage(){

    let container=document.querySelector(".container");

    container.innerHTML=`

    <div id="root">
    <header>
        <div class="wrap header--flex">
            <h1 class="header--logo"><a href="index.html">Student</a></h1>
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
                <input  class ="emailAdress" id="emailAddress" name="emailAddress" type="email" value="">
                <label  for="password">Password</label>
                <input id="password" class="password" name="password" type="password" value="">
                <button class="button" >Sign In </button><button class="button button-secondary">Cancel</button>
            </form>
            <p>Don't have a user account? Click here to <a href="sign-up.html">sign up</a>!</p>
            
        </div>
    </main>
</div>
    
    `
  
    let btnSignIn=document.querySelector(".button");

    btnSignIn.addEventListener("click",(e)=>{

        let inp1=document.querySelector(".emailAdress");
        let inp2=document.querySelector(".password");

        let student={
            emailAddress:inp1.value,
             password: inp2.value
         }

         let erors=[];

        if(inp1.value=""){
            erors.push("You most complete  the email adress field");
            inp1.getElementsByClassName.borderColor="red";

        }

        if(inp2.value==""){
            erors.push("You most complete");
            inp2.style.borderColor="red";
        }

        if(erors.length>0){
            let errorContainer=document.querySelector(".")
        }

        if (validate(student.emailAddress,student.password)){
            attachStartPage();
        }
    })    
};


async function  validate( emailAddress,password) {
    if (validateLogin(emailAddress,password) != null) return true;
    else return false;

}

async function  attachStartPage(){

    let container=document.querySelector(".container");

    container.innerHTML=`
    <div id="root">
    <header>
        <div class="wrap header--flex">
            <h1 class="header--logo"><a href="index.html">Books</a></h1>
            <nav>
                <ul class="header--signedout">
                    <li><a href="sign-up.html">Sign Up</a></li>
                    <li><a href="sign-in.html">Sign In </a></li>
                </ul>
            </nav>
        </div>
    </header>
    <main>
        <div class="wrap main--grid">
            <a class="book--module book--link" href="book-detail.html">
                <h2 class="book--label">Book</h2>
                <h3 class="book--title">Choose Category</h3>
            </a>
            <a class="book--module book--link" href="book-detail.html">
                <h2 class="book--label">Book</h2>
                <h3 class="book--title">The best books</h3>
            </a>
            <a class="book--module book--link" href="book-detail.html">
                <h2 class="book--label">Book</h2>
                <h3 class="book--title">The latest books</h3>
            </a>
            <a class="book--module book--add--module" href="create-book.html">
                <span class="book--add--title">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    viewBox="0 0 13 13" class="add"><polygon points="7,6 7,0 6,0 6,6 0,6 0,7 6,7 6,13 7,13 7,7 13,7 13,6 "></polygon></svg>
                    New Book 
                </span>
            </a>
        </div>
    </main>
</div>
    `

    let btnNewBook=document.querySelector(".book--add--title");

    btnNewBook.addEventListener("click",(e)=>{
        attachBookPage();
    })

  

   
}

async function attachBookPage(){

    let container=document.querySelector(".container");
    container.innerHTML=`
    
    <div id="root">
        <header>
            <div class="wrap header--flex">
                <h1 class="header--logo"><a href="index.html">Books</a></h1>
                <nav>
                    <ul class="header--signedin">
                        <li>Welcome, Joe Smith!</li>
                        <li><a href="sign-out.html">Sign Out</a></li>
                    </ul>
                </nav>
            </div>
        </header>
        <main>
            <div class="actions--bar">
                <div class="wrap">
                    <a class="button" href="update-book.html">Update Book</a>
                    <a class="button" href="#">Delete Book</a>
                    <a class="button button-secondary" href="index.html">Return to List</a>
                </div>
            </div>
            
            <div class="wrap">
                <h2>Book Detail</h2>
                <form>
                    <div class="main--flex">
                        <div>
                            <h3 class="book--detail--title">Book</h3>
                            <h4 class="book--name">Build a Basic Bookcase</h4>
                            <p>By Joe Smith</p>

                            <p>High-end furniture projects are great to dream about. But unless you have a well-equipped shop and some serious woodworking experience to draw on, it can be difficult to turn the dream into a reality.</p>
                            
                            <p>Not every piece of furniture needs to be a museum showpiece, though. Often a simple design does the job just as well and the experience gained in completing it goes a long way toward making the next project even better.</p>
                            
                            <p>Our pine bookcase, for example, features simple construction and it's designed to be built with basic woodworking tools. Yet, the finished project is a worthy and useful addition to any room of the house. While it's meant to rest on the floor, you can convert the bookcase to a wall-mounted storage unit by leaving off the baseboard. You can secure the cabinet to the wall by screwing through the cabinet cleats into the wall studs.</p>
                            
                            <p>We made the case out of materials available at most building-supply dealers and lumberyards, including 1/2 x 3/4-in. parting strip, 1 x 2, 1 x 4 and 1 x 10 common pine and 1/4-in.-thick lauan plywood. Assembly is quick and easy with glue and nails, and when you're done with construction you have the option of a painted or clear finish.</p>
                            
                            <p>As for basic tools, you'll need a portable circular saw, hammer, block plane, combination square, tape measure, metal rule, two clamps, nail set and putty knife. Other supplies include glue, nails, sandpaper, wood filler and varnish or paint and shellac.</p>
                            
                            <p>The specifications that follow will produce a bookcase with overall dimensions of 10 3/4 in. deep x 34 in. wide x 48 in. tall. While the depth of the case is directly tied to the 1 x 10 stock, you can vary the height, width and shelf spacing to suit your needs. Keep in mind, though, that extending the width of the cabinet may require the addition of central shelf supports.</p>
                        </div>
                        <div>
                            <h3 class="book--detail--title">Estimated Time</h3>
                            <p>14 hours</p>

                            <h3 class="book--detail--title">Materials Needed</h3>
                            <ul class="book--detail--list">
                                <li>1/2 x 3/4 inch parting strip</li>
                                <li>1 x 2 common pine</li>
                                <li>1 x 4 common pine</li>
                                <li>1 x 10 common pine</li>
                                <li>1/4 inch thick lauan plywood</li>
                                <li>Finishing Nails</li>
                                <li>Sandpaper</li>
                                <li>Wood Glue</li>
                                <li>Wood Filler</li>
                                <li>Minwax Oil Based Polyurethane</li>
                            </ul>
                        </div>
                    </div>
                </form>
            </div>
        </main>
    </div>

    
    `

}

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


