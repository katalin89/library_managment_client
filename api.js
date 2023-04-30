function api(path,method,body=null){
    const url="http://localhost:8080/"+path;

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