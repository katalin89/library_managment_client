function api(path,method,body=null){
    const url="http://localhost:8080/api/v1/book/"+path;

    const options={
        method,
        headers:{
            'Content-Type':'application/json;charset=utf-8'
        },
    };

    if(body!==null){
        options.body=JSON.stringify(body);
    }
    return fetch(url,options);
}

async function getAllBooks(){

    let data=await api("all",'GET');

    data=await data.json();

    return data;
}

async function addBook(book){
     let  data=await api("add",'POST',book);

     return data;
}

async function deleteBook(bookId){

    let data=await api(`deleteByTitle/${title}`,DELETE);
}

async function updateBook(book){

    let data =await api(`update`,'PUT',book);

    return data;
}




