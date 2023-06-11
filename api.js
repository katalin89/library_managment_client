function api(path,method,body=null){
    const url="http://localhost:8080/api/v1/"+path;

    const options={
        method,
        headers:{
            'Content-Type':'application/json;charset=utf-8',
        },

    };

    if(body!==null){
        options.body=JSON.stringify(body);
    }

    return fetch(url,options);
}

async function validateLogin(e, pwd){

    let loginDTO = {
        email : e,
        password :pwd 
    }
    let data= await api("students/login",'POST',loginDTO);


    if(data.status==200){

        return data.json();
    }else{

        throw new Error("forbidden");
    }    
}

async function signUp(studentDTO){
    //error cors apare cand path ul este gresit
    let data= await api("students/signUp",'POST',studentDTO);
    if(data.status==200){
        return data.json();
    }else{
        throw new Error("forbidden");
    }
}



async function allStudentsBooks(id){
    let data = await api(`students/allStudentsBooks/${id}`,'GET');

    data= await data.json();

    return data;
}

async function addBook(book){

    let data= await api("students/addBook",'POST',book);

    return data;
}


async function deleteBookById(bookId){
    let data=await api(`students/deleteByBookName/${bookId}`,'DELETE');
}

async function updateBookApi(book){
    let data=await api(`book/updateBook`,'PUT',book);

    return data;
}
