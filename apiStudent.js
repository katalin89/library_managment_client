async function getAllStudents(){
    let data=await api("api/v1/students/all",'GET');
    data=await data.json();
    return data;
}

async function addStudent(student){
     let  data=await api("api/v1/students/add",'POST',student);
     return data;
}

//delete student

async function deleteBook(bookId){
    let data=await api(`api/v1/students/deleteByTitle/${title}`,DELETE);
}

async function updateStudent(student){
    let data =await api(`api/v1/students/update`,'PUT',student);
    return data;
}




