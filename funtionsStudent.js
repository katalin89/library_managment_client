async function attachStudents(){
    let container=document.querySelector(".container");

    
    const para = document.createElement("p");
    para.innerHTML = `<a class="button new_student">Create New Student</a>`;
    const studentTable = document.createElement("table");
    studentTable.innerHTML = `    <thead>
    <tr class="container-sort">
    <th class="id">Id</th>
    <th class="firstName">First Name</th>
    <th class="createdAt">Last Name</th>
    <th class="email">Email</th>
    <th class="age">Age</th>
    </tr>
    </thead>
<tbody class="container-students">
</tbody>`

    container.appendChild(para);
    container.appendChild(studentTable);


    let data=await getAllStudents();
    attachRowsStudent(data);
    let btnAddNewStudent=document.querySelector(".new_student");

    btnAddNewStudent.addEventListener("click",(e)=>{
        attachNewStudentPage();
    });

    let cardContainer=document.querySelector(".container-students");
    cardContainer.addEventListener("click",(e)=>{

        e.preventDefault();

        let data=e.target.parentNode;

        let studentProperties=data.children;

        let student={
            firstName:studentProperties[0].innerHTML,
            lastName:studentProperties[1].innerHTML,
            email:studentProperties[2].innerHTML,
            age:studentProperties[3].innerHTML
        };
        attachUpdatePageStudent(student);
    });

}

async function attachUpdatePageStudent(student){
    let container=document.querySelector(".container");

    container.innerHTML=`<h1>Update Student</h1
        <input name="studentId" class="bookId" type="hidden " value="${student.id}"/>
        <ul class="error">
        </ul>
        <p>
            <label for="firstName">First Name</label>
            <input name="firstName" type="text" class="firstName" id="firstName" value="${student.firstName}">
        </p>

        <p>
            <label for="lastName">Last Name</label>
            <input name="lastName" type="text" class="lastName" id="lastName" value="${student.lastName}">
        </p>

        <p>
            <label for="email">Email</label>
            <input name="email" type="text" class="email" id="email" value="${student.email}">
        </p>

        <p>
            <label for="age">Age</label>
            <input name="age" type="text" class="age" id="age" value="${student.age}">
        </p>

    <div>
        <button class="update">Update student</button>
        <button class="delete">Delete student</button>
        <button class="cancel">Cancel</button>
    </div>
    `
        let btnCancel=document.querySelector(".cancel");
        
        btnCancel.addEventListener("click",()=>{
            attachHomePage();
        });
        let btnUpdate=document.querySelector(".update");

        btnUpdate.addEventListener("click",async()=>{
         
            let inp1=document.querySelector(".firstNameInp");
            let inp2=document.querySelector(".lastNameInp");
            let inp3=document.querySelector(".emailInp");
            let inp4=document.querySelector(".ageInp");

               let student={
            firstName:inp1.value,
            lastName:inp2.value,
            email:inp3.value,
            age:inp4.value
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
                let data = await updateStudent(student);
          
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


function attachNewStudentPage(){
    let container=document.querySelector(".container");
    container.innerHTML=`
    <h1>New Student</h1>
    <ul class="error">
    </ul>
    <p>
        <label for="firstNameInp">First Name</label>
        <input name="firstNameInp" type="text" id="firstNameInp" class="firstNameInp">
    </p>
    <p>
        <label for="lastNameInp">Last Name</label>
        <input name="lastNameInp" type="text" id="lastNameInp" class="lastNameInp">
    </p>
    <p>
        <label for="emailInp">Email </label>
        <input name="emailInp" type="text" id="emailInp" class="emailInp">
    </p>
    <p>
        <label for="ageInp">Age</label>
        <input name="ageInp" type="text" id="ageInp" class="ageInp">
    </p>

    <div class="butoane">
        <button class="add">Add new Student</button>
        <button class="cancel">Cancel</button>
    </div
    `;

    let btnCancel = document.querySelector(".cancel");
    btnCancel.addEventListener("click", () => {
      attachHomePage();
    });

    let btnAddNewStudent=document.querySelector(".add");

    btnAddNewStudent.addEventListener("click",async()=>{
        let inp1=document.querySelector(".firstNameInp");
        let inp2=document.querySelector(".lastNameInp");
        let inp3=document.querySelector(".emailInp");
        let inp4=document.querySelector(".ageInp");


        let student={
            firstName:inp1.value,
            lastName:inp2.value,
            email:inp3.value,
            age:inp4.value
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
            let data = await addStudent(student);
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
        updateStudent(obj);
    })
    
}

function createRowStudent(student) {
    let tr = document.createElement("tr");
  
    tr.innerHTML = `
                  <td>${student.id}</td>
                  <th>${student.firstName}</th>
                  <td>${student.lastName}</td>
                  <td>${student.email}</td>
                  <td>${student.age}</td>
   ` ;
    return tr;
  }

  function attachRowsStudent(arr){
    let container=document.querySelector(".container-students");

    container.innerHTML="";
    for(let i=0;i<arr.length;i++){
        container.appendChild(createRowStudent(arr[i]));
    }
}