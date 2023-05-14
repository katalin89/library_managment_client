async function attachLoginPage(){

    let root=document.querySelector("#root");

    root.innerHTML=`
   
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
            <p>Don't have a user account? Click here to >sign up</a>!</p>
            
        </div>
    </main>
    
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
           attachStartPage(loggedIn.id);

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
                <h1 class="header--logo"><a ">Students</a></h1>
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
//////------
async function attachStartPage(studentId){

    let root=document.querySelector("#root");

    root.innerHTML=`
    <div id="root">
    <header>
        <input name="studentId" class="studentId" type="hidden" value="${studentId}"/>

        <div class="wrap header--flex">
            <h1 class="header--logo"><a">Books</a></h1>
            <nav>
                <ul class="header--signedout">
                    <li><a ">Sign Up</a></li>
                    <li><a ">Sign In </a></li>
                </ul>
            </nav>
        </div>
    </header>
    <main>
        <div class="wrap main--grid root-books">
         
        </div>
    </main>

 

    
</div>


    `

    let data=await allStudentsBooks(studentId);
    attachCard(data);
    // let rowsContainer=document.querySelector(".wrap main--grid");

    // rowsContainer.addEventListener("click",(e)=>{
    //     e.preventDefault();
    //     let bookProperties=data.children;

    //     const book={
    //         bookId:bookProperties[0].innerHTML,
    //         bookName:bookProperties[1].innerHTML,
    //         createdAt:bookProperties[2].innerHTML
    //     };

    //     attachRows(book);
    // });

    let btnDelete=document.querySelector(".delete");

    btnDelete.addEventListener("click",async()=>{
        let bookId=document.querySelector(".bookId");

         bookId=input.value;

         await deleteBook(bookId);

         attachStartPage()
    })


    
    
}

/*  let btnDelete = document.querySelector(".delete");
    btnDelete.addEventListener("click", async () => {
      let input = document.querySelector(".bookId");
  
      let bookId = input.value;
  
      await deleteBook(bookId);
  
      attachHomePage();
    });*/
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
function attachCard(arr) {
    let root = document.querySelector(".root-books");
  
    root.innerHTML="";
    for (let i = 0; i < arr.length; i++) {
      root.appendChild(createCard(arr[i]));
    }
  }

  //create row
function createCard(book) {
    let a = document.createElement("a");

    a.classList.add("course--module");
    a.classList.add("course--link")


  
    a.innerHTML = `

        
    <h2 class="course--label">${book.bookName}</h2>
    <h3 class="course--title">${book.createdAt}</h3>
    <button class="delete">Delete</button>
    <button class=" update">Update</update>

    
        `
                  
    return a ;
  }
