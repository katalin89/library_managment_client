async function attachLoginPage() {
  let root = document.querySelector("#root");

  root.innerHTML = `
   
    <header>
        <div class="wrap header--flex">
            <h1 class="header--logo">Home</h1>
            <nav>
                <ul class="header--signedout">
                    <li class="signUp">Sign Up</li>
                    <li>Sign In</li>
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
           
            
        </div>
    </main>
    
    `;
    // <button class="button register">Register</button>

  // <p>Don't have a user account? Click here to sign up</p>

  let btnSignIn = document.querySelector(".button");

  btnSignIn.addEventListener("click", async (e) => {
    let inp1 = document.querySelector(".emailAdress");
    let inp2 = document.querySelector(".password");

    let student = {
      emailAddress: inp1.value,
      password: inp2.value,
    };

    let erors = [];

    if ((inp1.value = "")) {
      erors.push("You most complete  the email adress field");
      inp1.getElementsByClassName.borderColor = "red";
    }

    if (inp2.value == "") {
      erors.push("You most complete");
      inp2.style.borderColor = "red";
    }

    if (erors.length > 0) {
      let errorRoot = document.querySelector("#root");
    }

    //fara await rularea merge mai departe si nu primesc id ul studentului pe care vreau sa atasez la input
    //daca scriu await atuncia pagina face un reload.
    try {
      let loggedIn = await validateLogin(
        student.emailAddress,
        student.password
      );
      attachStartPage(loggedIn.id);

      console.log(loggedIn);
    } catch (error) {
      attachErrorPage();
    }
  });

  let btnSignUp=document.querySelector(".signUp");
  btnSignUp.addEventListener("click",(e)=>{
    attachSignUp();
  })
}
 /* let btnSignOut=document.querySelector(".signOut");
  btnSignOut.addEventListener("click",(e)=>{
    attachLoginPage();
  });*/
async function attachErrorPage() {
  let root = document.querySelector("#root");

  root.innerHTML = `
    <header>
            <div class="wrap header--flex">
                <h1 class="header--logo">Home</h1>
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
    `;
}

async function attachStartPage(studentId) {
  let root = document.querySelector("#root");

  root.innerHTML = `
   
    <header>
        <input id="studentId" name="studentId" class="studentId" type="hidden" value="${studentId}"/>
        <ul class="error">
        </ul>
        <div class="wrap header--flex">
            <h1 class="header--logo books">Home</h1>
            <nav>
               <h1 class="signOut">Sign Out</h1>
            </nav>
        </div>
    </header>

    <button class="button new-book">Add New Book</button>
    <main>
        
        <div class="wrap main--grid root-books">
         
        </div>
    </main>
    `;

    let btnSignOut=document.querySelector(".signOut");
    btnSignOut.addEventListener("click",(e)=>{
      attachLoginPage();
    })
    
    let btnBooks=document.querySelector(".books");
    btnBooks.addEventListener("click",(e)=>{
        attachCard(data);
    })

  let data = await allStudentsBooks(studentId);
  attachCard(data);

  let btnAddNewBook = document.querySelector(".new-book");

  btnAddNewBook.addEventListener("click", (e) => {
    attachNewBookPage(studentId);
  });

  let rowsContainer = document.querySelector("#root");
  rowsContainer.addEventListener(".click", (e) => {
    e.preventDefault();
    let data = e.target.parentNode;

    let bookProperties = data.children;

    const book = {
      bookId: bookProperties[0].innerHTML,
      bookName: bookProperties[1].innerHTML,
      createdAt: bookProperties[2].innerHTML,
    };

    attachUpdatePage(book);
  });
}

async function attachNewBookPage(studentId) {
  let root = document.querySelector("#root");

  root.innerHTML = `
  <header>
  <input id="studentId" name="studentId" class="studentId" type="hidden" value="${studentId}"/>
  <div class="wrap header--flex">
      <h1 class="header--logo books">Home</h1>
      <nav>
          <ul class="header--signedin">
            
              <li class="signOut">Sign Out</li>
          </ul>
      </nav>
  </div>
</header>
<main>
  <div class="wrap">
      <h2>Create Book</h2>
      
      <ul class="error">
            
      </ul>
          <div class="main--flex">
              <div>
                  <label for="BookName">Book Name</label>
                  <input id="bookName" name="bookName"  type="text" value="">
                  <label for="createdAt">Created At</label>
                  <input id="createdAt" name="createdAt" type="text" value="">
              </div>
             
          </div>
          <button id="add" class="button add" type="submit">Create Book</button><button class="button button-secondary" onclick="event.preventDefault(); location.href='index.html';">Cancel</button>
  </div>
</main>
  `;

  let btnBooks=document.querySelector(".books");
  btnBooks.addEventListener("click",(e)=>{
      attachStartPage(studentId);
  });

  let btnSignOut=document.querySelector(".signOut");
  btnSignOut.addEventListener("click",(e)=>{
    attachLoginPage();
  });

  

    let btnAddNewBook=document.querySelector("#add");

    btnAddNewBook.addEventListener("click",async()=>{
      let inp1=document.querySelector("#bookName");
      let inp2=document.querySelector("#createdAt");
      let inp3=document.querySelector("#studentId");


      let book={
        bookName:inp1.value,
        createdAt:inp2.value,
        studentId:inp3.value
      };

      let erors=[];
      if(inp1.value==""&&
        inp2.value==""
      ){
        erors.push("Fields are not completed");
      }
      if(inp1.value==""){
        erors.push("You must complete Book Name");

        inp1.style.border="red";
      }

      if(inp2.value==""){
        erors.push("You must coplete Created At field");
        inp2.style.borderColor="red";
      }

      if(erors.length>0){
        let erorContainer=document.querySelector(".error");

        erorContainer.innerHTML="";

        let h1=document.createElement("h1");

        h1.textContent ="Ooops";

      

        erorContainer.appendChild(h1);

        for(let i=0;i<erors.length;i++){
          let li=document.createElement("li");
          li.textContent=erors[i];

          erorContainer.appendChild(li);
        }
      }else{
        let data=await addBook(book);
        attachStartPage(studentId);
      }

    });


  // let data = await allStudentsBooks(studentId);
  // attachCard(data);
}


async function attachUpdatePage(book, studentId) {
  console.log(book);
  let root = document.querySelector("#root");

  //input type=hidden nu este visibil pe pagina, dar se poate citi valoarea lui.
  root.innerHTML = `

  
    <header>
        <div class="wrap header--flex">
            <h1 class="header--logo">Update Book</h1>
            
        </div>
    </header>
    <main>
        <div class="wrap">
          
            
            
                <div class="main--flex">
                    <div>
                        <label for="bookNameInp">Book Name</label>
                        <input id="bookNameInp" name="bookNameInp" type="text" value="" class="bookName" placeholder=${book.bookName}>

                     

                        <label for="createdAtInp">CreatedAt</label>
                        <input type="date" id="createdAt" name="createdAt" value="${book.createdAt}">
                    
                        </div>
                    
                </div>
                
                <div>
                    <button class="  button update">Update book</button>
                    <button class="  button cancel">Cancel</button>
                </div>
                
        
        </div>
    </main>    
    
  
    `;

  //courseTitle(inp for id)



  let btnCancel = document.querySelector(".cancel");
  btnCancel.addEventListener("click", () => {
    attachStartPage(studentId);
  });

  let btnUpdate = document.querySelector(".update");
  btnUpdate.addEventListener("click", async () => {
     
    let inp1 = document.querySelector(".bookName");
    let inp2 = document.querySelector(".createdAt");
    let studentId = document.querySelector(".studentId").value;

    let studentsBook = {
      id: book.id,
      bookName: inp1.value,
      createdAt: inp2.value,
      studentId: +studentId,
    };

    let erors = [];

    if (inp1.value == "") {
      erors.push("You must complete de bookName field");
      inp1.style.borderColor = "red";
    }

    if (inp2.value == "") {
      erors.push("You must complete the createdAt field");
      inp2.style.borderColor == "red";
    }

    if (erors.length > 0) {
      let erorContainer = document.querySelector(".error");
      let h1 = document.createElement("h1");
      h1.textContent = "Ooops";

      for (let i = 0; i < erors.length; i++) {
        let li = document.createElement("li");
        li.textContent = erors[i];
        erorContainer.innerHTML = "";
      }
    }

    if (erors.length == 0) {
      let data = await updateBookApi(studentsBook);
      attachStartPage(studentId);
    }
  });
}

async function attachSignUp(){
  let root=document.querySelector("#root");
//  <input id="studentId" name="studentId" class="studentId" type="hidden" value="${studentId}"/>



  root.innerHTML=`

  <header>

  <div class="wrap header--flex">
      <h1 class="header--logo">Register</a></h1>
      <nav>
          <ul class="header--signedout">
              <li class="signUpInp">Sign Up</li>
              <li>Sign In</li>
          </ul>
      </nav>
  </div>
</header>
<main>
  <div class="form--centered">
      <h2>Sign Up</h2>
      
      <form>
          <label for="firstName">First Name</label>
          <input id="firstName" name="firstName" type="text" value="">
          <label for="lastName">Last Name</label>
          <input id="lastName" name="lastName" type="text" value="">
          <label for="emailAddress" class="emailAdress">Email Address</label>
          <input id="emailAddress" name="emailAddress" type="email" value="">
          <label for="password" class="password">Password</label>
          <input id="password" name="password" type="password" value="">
          <button class="button" type="submit class="button">Sign Up</button><button class="button button-secondary" onclick="event.preventDefault();">Cancel</button>
      </form>
      <p>Already have a user account? Click here to sign in!</p>
  </div>
</main>
  `

   let btnSignUp=document.querySelector(".button");

   btnSignUp.addEventListener("click",(e)=>{

    let inp1 = document.querySelector("#emailAddress");
    let inp2 = document.querySelector("#password");
    let inp3 = document.querySelector("#firstName");
    let inp4 = document.querySelector("#lastName");
  
  
    let studentDTO = {
      firstName: inp3.value,
      lastName: inp4.value,
      email: inp1.value,
      password: inp2.value,
    };

      let createdStudent = signUp(studentDTO);
       attachStartPage(createdStudent.id);
   });
}

//functie care ia ca parametru userul si password
function verifyUser() {
  let email = document.querySelector(".emailAdress");
  let password = document.querySelector(".password");
}

//attatch rows
function attachCard(arr) {
  let root = document.querySelector(".root-books");

  root.innerHTML = "";
  for (let i = 0; i < arr.length; i++) {
    root.appendChild(createCard(arr[i]));
  }
}

async function deleteBook(e) {
  let parent = e.parentNode;
  let bookId = parent.children[0].value;
  console.log(bookId);
  await deleteBookById(bookId);
  let studentId = document.querySelector(".studentId").value;
  attachStartPage(studentId);
}

async function updateBook(e) {
  let parent = e.parentNode;
  let book = {
    id: parent.children[0].value,
    bookName: parent.children[1].textContent,
    createdAt: parent.children[2].textContent,
  };
  let studentId = document.querySelector(".studentId").value;
  attachUpdatePage(book, studentId);
}

// function updateBook(){
//     let inp1=document.getElementById("bookNameInp");
//     let inp2=document.getElementById("createdAtInp");

//     const book={
//         bookName:inp1.value,
//         createdAt:inp2.value,

//     }

//     updateBookApi(book);
// }

function createCard(book) {
  let a = document.createElement("a");

  a.classList.add("course--module");
  a.classList.add("course--link");

  a.innerHTML = `
    <input name="bookId" class="bookId" type="hidden" value="${book.id}"/>        
    <h2 class="course--label">${book.bookName}</h2>
    <h3 class="course--title">${book.createdAt}</h3>
    <button class="delete" onclick="deleteBook(this)">Delete</button>
    <button class="update" onclick="updateBook(this)">Update</update>
    `;
  return a;
}

