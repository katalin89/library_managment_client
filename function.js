async function attachLoginPage(){

    let root=document.querySelector("#root");

    root.innerHTML=`
    <div id="root">
    <header>
        <div class="wrap header--flex">
            <h1 class="header--logo">Student</a></h1>
            <nav>
                <ul class="header--signedout">
                    <li>Sign Up</a></li>
                    <li>Sign In</a></li>
                </ul>
            </nav>
        </div>
    </header>
    <main>
        <div class="form--centered">
            <h2>Sign In</h2>
            
            <section>
                <label for="emailAddress">Email Address</label>
                <input class ="emailAdress" id="emailAddress" name="emailAddress" type="email" value="">
                <label  for="password">Password</label>
                <input id="password" class="password" name="password" type="password" value="">
                <button class="button">Sign In </button>
                <button class="button button-secondary">Cancel</button>
            </section>
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
            let errorRoot=document.querySelector("#root")
        }

        //fara await rularea merge mai departe si nu primesc id ul studentului pe care vreau sa atasez la input
        //daca scriu await atuncia pagina face un reload.
        try {
            let loggedIn =await validateLogin(student.emailAddress,student.password);

           // attachStartPage(loggedIn.id);

           attachStartPage(9);

            console.log(loggedIn);
           } catch (error) {
           

            attachErrorPage();

           }
    })    
};



async function attachErrorPage(){
    let root=document.querySelector('#root');

    root.innerHTML=`
    <header>
            <div class="wrap header--flex">
                <h1 class="header--logo"><a href="index.html">Students</a></h1>
                <nav>
                    <ul class="header--signedin">
                        <li>Error message!</li>
                    
                    </ul>
                </nav>
            </div>
        </header>
        <main>
            <div class="wrap">
                <h2>Error</h2>
                <p>Sorry! Username or password incorrect</p>
            </div>
        </main>
    `
}

async function attachStartPage(studentId){

    let root=document.querySelector("#root");

    root.innerHTML=`
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

    let root=document.querySelector("#root");
    root.innerHTML=`
    <input name="studentId" class="studentId" type="hidden" value="${studentId}"/>

	<table>
    
		<thead >
			<tr class="root-sort">
            <th class="bookId">Id</th>
            <th class="bookName">Title</th>
			<th class="createdAt">CreatedAt</th>
			</tr>
		</thead>

		<tbody class="root-books">
		
		</tbody>
	</table>
    

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

    let rowsContainer = document.querySelector(".root-books");
    rowsContainer.addEventListener("click",async (e) =>{ onBookClick(e)});

}

function onBookClick(e){
    e.preventDefault();
    let data = e.target.parentNode;

    let bookProperties = data.children;


    const book = {
      bookId: bookProperties[0].innerHTML,
      bookName: bookProperties[1].innerHTML,
      createdAt: bookProperties[2].innerHTML,

    };

    attachUpdatePage(book);
}

async function attachUpdatePage(book) {
    let root = document.querySelector(".root-books");
  
    //input type=hidden nu este visibil pe pagina, dar se poate citi valoarea lui.
    root.innerHTML = ` <h1>Update book</h1> 
          <input name="bookId" class="bookId" type="hidden" value="${book.bookId}"/>        
          <ul class="error">
              
          </ul>
  
          <p>
              <label for="bookName">Book Name</label>
              <input name="bookName" type="text" class="bookName" id="bookName" value="${book.bookName}"  >
          </p>
          <p>
              <label for="createdAt">Created Agt</label>
              <input name="createdAt" type="text" class="createdAt" id="createdAt" value="${book.createdAt}">
          </p>
          <div>
              <button class="update">Update book</button>
              <button class="delete" >Delete book</button>
              <button class="cancel">Cancel</button>
          </div>
    `;
  
    let btnCancel = document.querySelector(".cancel");
    btnCancel.addEventListener("click", () => {
      attachHomePage();
    });
  
    let btnDelete = document.querySelector(".delete");
    btnDelete.addEventListener("click", async () => {
      let input = document.querySelector(".bookId");
  
      let bookId = input.value;
  
      await deleteBook(bookId);
  
      attachHomePage();
    });
  }
  



//functie care ia ca parametru userul si password

function verifyUser(){
    let email=document.querySelector(".emailAdress");
     let password=document.querySelector(".password");
}

//attatch rows
function attachRows(arr) {
    let root = document.querySelector(".root-books");
  
    root.innerHTML="";
    for (let i = 0; i < arr.length; i++) {
      root.appendChild(createRow(arr[i]));
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
