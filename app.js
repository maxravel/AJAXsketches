window.onload = function(){


    //vanilla js
    var http = new XMLHttpRequest();

    http.onreadystatechange = function(){
        if(http.readyState == 4 && http.status == 200){
            // console.log(JSON.parse(http.response));
        }
    };

    http.open('GET', 'data/tasks.json', true);
    http.send();
    //console.log(http);


    //jQuery method
    $.get('data/tasks.json', function(data){
        console.log(data);
    });
    console.log("test");

};