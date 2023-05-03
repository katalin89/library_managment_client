function api(path,method,body=null){
    const url="http://localhost:8080/api/v1/students/"+path;

    const options={
        method,
        headers:{
            'Content-Type':'application/json;charset=utf-8',
        },

    };

    if(body!==null){
        options.body=stringfy(body);
    }

    return fetch(url,options);

}

//functie care ia ca parametru userul si password

