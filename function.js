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

async function attachStartPage(studentId){

    let root=document.querySelector("#root");

    root.innerHTML=`
    <div id="root">   
    <header>
        <input name="studentId" class="studentId" type="hidden" value="${studentId}"/>
        <ul class="error">
        </ul>
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

    <button class="button new-book">Add New Book</button>
    <main>
        <div class="wrap main--grid root-books">
         
        </div>
    </main>
</div>
    `

    let data=await allStudentsBooks(studentId);
    attachCard(data);

    
    let btnAddNewBook=document.querySelector(".new-book");

    btnAddNewBook.addEventListener("click",(e)=>{
        attachNewBookPage();
    });

    let rowsContainer=document.querySelector("#root");
    rowsContainer.addEventListener(".click",(e)=>{
        e.preventDefault();
        let data=e.target.parentNode;

        let bookProperties=data.children;

        const book={
            bookId:bookProperties[0].innerHTML,
            bookName:bookProperties[1].innerHTML,
            createdAt:bookProperties[2].innerHTML,
        }

        attachUpdatePage(book);
    });
}


function attachNewBookPage(){
    let root=document.querySelector("#root");

    root.innerHTML=`
    <header>
    <div class="wrap header--flex">
        <h1 class="header--logo">Books</h1>
        <nav>
            <ul class="header--signedin">
                <li>Welcome, Joe Smith!</li>
                <li>Sign Out</li>
            </ul>
        </nav>
    </div>
</header>
<main>
    <div class="wrap">
        <h2>Create Book</h2>
        <div class="validation--errors">
            <h3>Validation Errors</h3>
            <ul>
                <li>Please provide a value for "Title"</li>
                <li>Please provide a value for "Created At"</li>
            </ul>
        </div>
        <form>
            <div class="main--flex">
                <div>
                    <label for="BookName">Book Name</label>
                    <input id="bookName" name="bookName" type="text" value="">

                    <p>By Joe Smith</p>

                    <label for="createdAt">Created At</label>
                    <textarea id="createdAt" name="createdAt"></textarea>
                </div>
               
            </div>
            <button class="button" type="submit">Create Book</button><button class="button button-secondary" onclick="event.preventDefault(); location.href='index.html';">Cancel</button>
        </form>
    </div>
</main>
    `
}


async function attachUpdatePage(book,studentId) {
    let root = document.querySelector(".root-books");
  
    //input type=hidden nu este visibil pe pagina, dar se poate citi valoarea lui.
    root.innerHTML = ` <h1>Update book</h1> 
        <input name="studentId" class="studentId" type="hidden" value="${studentId}"/>

          <input name="bookId" class="bookId" type="hidden" value="${book.id}"/>        
          <ul class="error">
              
          </ul>
  
          <p>
              <label for="bookNameInp">Book Name</label>
              <input name="bookNameInp" type="text" class="bookName" id="bookName" value="${book.bookName}"  >
          </p>
          <p>
              <label for="createdAtInp">Created Agt</label>
              <input name="createdAtInp" type="text" class="createdAt" id="createdAt" value="${book.createdAt}">
          </p>
          <div>
              <button class="update">Update book</button>
              <button class="cancel">Cancel</button>
          </div>
    `;
  
    let btnCancel = document.querySelector(".cancel");
    btnCancel.addEventListener("click", () => {
      attachStartPage(studentId);
    });
  
    let btnUpdate= document.querySelector(".update");
    btnUpdate.addEventListener("click",async()=>{
        let inp0=document.querySelector(".bookId");
          let inp1=document.querySelector(".bookName");
          let inp2=document.querySelector(".createdAt");
          let studentId = document.querySelector(".studentId").value;

 
          let book={
            id: inp0.value,
              bookName:inp1.value,
              createdAt:inp2.value,
              studentId: studentId
          }
 
          let erors=[];
 
          if(inp1.value==""){
              erors.push("You must complete de bookName field");
              inp1.style.borderColor="red";
 
          }
 
          if(inp2.value==""){
              erors.push("You must complete the createdAt field")
              inp2.style.borderColor=="red";
          }
 
          if(erors.length>0){
              let erorContainer=document.querySelector(".error");
              let h1=document.createElement("h1");
              h1.textContent="Ooops";
 
              for(let i=0;i<erors.length;i++){
                  let li=document.createElement("li");
                  li.textContent=erors[i]; 
                  erorContainer.innerHTML="";
              }
          }

          if(erors.length==0){
            let data=await updateBookApi(book); 
            attachStartPage(studentId);
        }
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

async function deleteBook(e)
{
        let parent = e.parentNode;
        let bookId = parent.children[0].value;
        console.log(bookId);
        await deleteBookById(bookId);
        let studentId = document.querySelector(".studentId").value;
        attachStartPage(studentId)
}

async function updateBook(e)
{
    let parent = e.parentNode;
    let book = {
        id : parent.children[0].value,
        bookName : parent.children[1].textContent,
        createdAt: parent.children[2].textContent
    }
    let studentId = document.querySelector(".studentId").value;
    attachUpdatePage(book,studentId);
}


  //create row
function createCard(book) {
    let a = document.createElement("a");

    a.classList.add("course--module");
    a.classList.add("course--link")
  
    a.innerHTML = `
    <input name="bookId" class="bookId" type="hidden" value="${book.id}"/>        
    <h2 class="course--label">${book.bookName}</h2>
    <h3 class="course--title">${book.createdAt}</h3>
    <button class="delete" onclick="deleteBook(this)">Delete</button>
    <button class="update" onclick="updateBook(this)">Update</update>
    `                  
    return a ;
  }
