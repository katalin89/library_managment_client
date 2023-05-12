function api(path,method,body=null){
    const url="http://localhost:8080/api/v1/students/"+path;

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
    let data= await api("login",'POST',loginDTO);


    if(data.status==200){

        return data.json();
    }else{

        throw new Error("forbidden");
    }

    
}



async function allStudentsBooks(id){
    let data = await api(`allStudentsBooks/${id}`,'GET');


    data= await data.json();

    return data;
}

async function deleteBook(bookId){
    let data=await api(`delete/${bookId}`,'DELETE');

}

async function deleteByBookName(){
    let data=await api(`deleteByBookName/${bookId}/${bookName}`,'DELETE');
}