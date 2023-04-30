async function getAllBooks(){
    let data=await api("api/v1/book/all",'GET');
    data=await data.json();
    return data;
}

async function addBook(book){
     let data=await api("api/v1/book/add",'POST',book);
     return data;
}

async function deleteBook(bookId){
    let data=await api(`api/v1/book/deleteByTitle/${title}`,DELETE);
}

async function updateBook(book){
    let data =await api(`api/v1/book/update`,'PUT',book);
    return data;
}




