async function attachLoginPage(){

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
                <input class ="emailAdress" id="emailAddress" name="emailAddress" type="email" value="">
                <label  for="password">Password</label>
                <input id="password" class="password" name="password" type="password" value="">
                <button class="button">Sign In </button><button class="button button-secondary">Cancel</button>
            </form>
            <p>Don't have a user account? Click here to <a href="sign-up.html">sign up</a>!</p>
            
        </div>
    </main>
</div>
    
    `
  
    let btnSignIn=document.querySelector(".button");

    btnSignIn.addEventListener("click",async (e)=>{

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

        //fara await rularea merge mai departe si nu primesc id ul studentului pe care vreau sa atasez la input
        //daca scriu await atuncia pagina face un reload.
        let loggedIn = await getLoggedInUser(student);

        if (loggedIn!=null){
            attachStartPage(loggedIn.id);
        }
    })    
};

async function getLoggedInUser(student){
    let loggedIn =await validateLogin(student.emailAddress,student.password);
    return loggedIn;
}

async function attachStartPage(studentId){

    let container=document.querySelector(".container");

    container.innerHTML=`
    <div id="root">
    <header>
        <input name="studentId" class="studentId" type="hidden" value="${studentId}"/>

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
            <a class="book--module book--link" >
                <h2 class="book--label">Book</h2>
                <h3 class="book--title">The best books</h3>
            </a>
            <a class="book--module book--link">
                <h2 class="book--label">Book</h2>
                <h3 class="book--title">The latest books</h3>
            </a>
            <a class="book--module book--add--module" >
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
        let input=document.querySelector(".studentId");
        let studentId=input.value;        
        attachBookPage(studentId);
    })

    
    
}

async function attachBookPage(studentId){

    let container=document.querySelector(".container");
    container.innerHTML=`
    <input name="studentId" class="studentId" type="hidden" value="${studentId}"/>

	<table>
    
		<thead >
			<tr class="container-sort">
            <th class="id">Id</th>
            <th class="culoare">Title</th>
			<th class="marca">CreatedAt</th>
			</tr>
		</thead>

		<tbody class="container-book">
		
		</tbody>
	</table>
    
    <div class="buttons">
    <button class="buttonStart update">Update </button>
    <button class="buttonStart delete">Delete </button>
    <button class="buttonStart cancel">Cancel </button>
</div>
    `

    let data = await getAllBooks(studentId);
    attachRows(data);


    btnDelete=document.querySelector(".delete");

    btnDelete.addEventListener("click",async() =>{
        let inputS=document.querySelector(".studentId");

        let studentId=inputS.value;      
        let input=document.querySelector(".bookId");

        let bookId=input.value;

        let data=await deleteBook(bookId);

        attachBookPage(studentId);
    });

    let btnCancel=document.querySelector(".cancel");
    btnCancel.addEventListener("click",()=>{
        attachStartPage();
    })


}

//functie care ia ca parametru userul si password

function verifyUser(){
    let email=document.querySelector(".emailAdress");
     let password=document.querySelector(".password");
}

//attatch rows
function attachRows(arr) {
    let container = document.querySelector(".container-books");
  
    container.innerHTML="";
    for (let i = 0; i < arr.length; i++) {
      container.appendChild(createRow(arr[i]));
    }
  }

  //create row
function createRow(book) {
    let tr = document.createElement("tr");
  
    tr.innerHTML = `
                  <td>${book.id}</td>
                  <th>${book.bookName}</th>
                  <td>${book.createdAt}</td>
   ` ;
    return tr;
  }
