let curURLResponse = getRequest(getCurURL());
curURLResponse.then((data)=>{
    if(data != null){
        alert(JSON.stringify(data));
    }
    else{
        alert("No data.");
    }
});

