async function attachHomePage(){
    let container=document.querySelector(".container");

    container.innerHTML=`

    <header>
        <div class="library">
            <img src="images/books.jpeg" alt="">
        </div>

        <div class="title">
            <h1>Library</h1>
        </div>

        <div class="cauta">
                <label for="">Cauta</label>
                <input type="text">
        </div>
    </header>

    
    <p><a class="button new_book">Create New Book</a></p>
    <table>
  
    <thead>
        <tr class="container-sort">
        <th class="id">Id</th>
        <th class="name">Name</th>
        <th class="createdAt">Created At</th>
        </tr>
    </thead>

    <tbody class="container-books">
    
    </tbody>
    </table>
    `;

    let data=await getAllBooks();
    attachRows(data);

    let btnAddNewBook=document.querySelector(".new_book");
    btnAddNewBook.addEventListener("click",(e)=>{
        attachNewBookPage();
    });

    let cardContainer=document.querySelector(".container-books");
    cardContainer.addEventListener("click",(e)=>{

        e.preventDefault();

        let data=e.target.parentNode;

        let bookProperties=data.children;

        let book={
            bookId:bookProperties[0].innerHTML,
            title:bookProperties[1].innerHTML,
            createdAt:bookProperties[2].innerHTML,

        };
        attachUpdatePage(book);
    });

    attachStudents();
}

async function attachUpdatePage(book){
    let container=document.querySelector(".container");

    container.innerHTML=`<h1>Update Book</h1
        <input name="bookId" class="bookId" type="hidden " value="${book.bookId}"/>

        <ul class="error">

        </ul>

        <p>
            <label for="titleInp">Title</label>
            <input name="titleInp" type="text" class="titleInp" id="titleInp" value="${book.title}">
        </p>

        <p>
        <label for="createdAt">Created At</label>
        <input name="cretedAt" type="text" class="createdAt" id="createdAt" value="${book.createdAt}">
    </p>

    <div>
        <button class="update">Update book</button>
        <button class="delete">Delete book</button>
        <button class="cancel">Cancel</button>
    </div>
    `
        let btnCancel=document.querySelector(".cancel");
        
        btnCancel.addEventListener("click",()=>{
            attachHomePage();
        });
        let btnUpdate=document.querySelector(".update");

        btnUpdate.addEventListener("click",async()=>{
            let inp1=document.querySelector(".titleInp");
            let inp2=document.querySelector(".createdAt");

            let book={
                bookName:inp1.value,
                createdAt:inp2.value,
            };

            let erors=[];
            if(inp1.value==""){
                erors.push("You must complete the title")
                inp1.getElementsByClassName.borderColor="red";
            }

            if(inp2.value==""){
                erors.push("You must complete the create date")
                inp1.getElementsByClassName.borderColor="red";
            }

            if (erors.length > 0) {
                let errorContainer = document.querySelector(".error");
          
                let h1 = document.createElement("h1");
                h1.textContent = "Ooops";
                errorContainer.appendChild(h1);
          
                for (let i = 0; i < erors.length; i++) {
                  let li = document.createElement("li");
          
                  li.textContent = erors[i];
          
                  errorContainer.appendChild(li);
                }
              } else {
                let errorContainer = document.querySelector(".error");
          
                errorContainer.innerHTML = "";
              }
              if (erors.length == 0) {
                let data = await updateBook(book);
          
                attachHomePage();
              }


        });

        let btnDelete=document.querySelector(".delete");

        btnDelete.addEventListener("click",async()=>{
            let input=document.querySelector(".bookId");
            let bookId= input.value;
            let data=await  deleteBook(bookId);

            attachHomePage();
        });
}


function attachNewBookPage(){
    let container=document.querySelector(".container");

    container.innerHTML=`

    <h1>New Book</h1>

    <ul class="error">

    </ul>

    <p>
        <label for="titleInp">Title</label>
        <input name="titleInp" type="text" id="titleInp" class="titleInp">
    </p>
<p>
    <label for="createdAtInp">Created At</label>
    <input name="createdAtInp" type="text" id="createdAtInp" class="createdAtInp">
</p>

<div class="butoane">
    <button class="add">Add new  Book</button>
    <button class="cancel">Cancel</button>
</div
    
    `;

    let btnCancel = document.querySelector(".cancel");
    btnCancel.addEventListener("click", () => {
      attachHomePage();
    });

    let btnAddNewBook=document.querySelector(".add");

    btnAddNewBook.addEventListener("click",async()=>{
        let inp1=document.querySelector(".titleInp");
        let inp2=document.querySelector(".createdAtInp");

        let book={
            bookName:inp1.value,
            createdAt:inp2.value,
        };

        let erors=[];

        if(inp1.value=="" &&
            inp2.value==""
        ){
            erors.push("Fields are not completed");
        }

        if(inp1.value==""){
            erors.push("Title field have to complete");
            inp1.getElementsByClassName.borderColor="red";
        }

        if(inp2.value==""){
            erors.push("CretedAt field have to complete");
            inp1.getElementsByClassName.borderColor="red";
        }

        if (erors.length > 0) {
            let errorContainer = document.querySelector(".error");
      
            errorContainer.innerHTML = "";
      
            let h1 = document.createElement("h1");
            h1.textContent = "Ooops";
            errorContainer.appendChild(h1);
      
            for (let i = 0; i < erors.length; i++) {
              let li = document.createElement("li");  
              li.textContent = erors[i];
              errorContainer.appendChild(li);
            }
          } else {
            let data = await addBook(book);
            attachHomePage();
          }
    })
}


function createCard(obj){
    let div=document.createElement("div");

    div.classList.add(card);

    let images=document.querySelector("img");

    images.classList.add('image');
    images.classList.add('imgClick');
    images.src="http:"+object.backdrop_path;

    div.appendChild(images);

    div.addEventListener("click",()=>{
        updateMainBook(obj);
    })
}

function createRow(book) {
    let tr = document.createElement("tr");
  
    tr.innerHTML = `
                  <td>${book.id}</td>
                  <th>${book.bookName}</th>
                  <td>${book.createdAt}</td>
       
   ` ;
    return tr;
  }

  function attachRows(arr){
    let container=document.querySelector(".container-books");

    container.innerHTML="";
    for(let i=0;i<arr.length;i++){
        container.appendChild(createRow(arr[i]));
    }
}