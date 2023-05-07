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

//functie care ia ca parametru userul si password


async function validateLogin(e, pwd){

    let loginDTO = {
        email : e,
        password :pwd 
    }
    let data= await api("login",'POST',loginDTO);

    return data;
}

