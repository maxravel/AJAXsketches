// window.onload = function(){

//     //vanilla js
//     var http = new XMLHttpRequest();

//     http.onreadystatechange = function(){
//         if(http.readyState == 4 && http.status == 200){
//             console.log(JSON.parse(http.response));
//         }
//     };

//     http.open('GET', 'data/tasks.json', true);
//     http.send();
//     //console.log(http);

//     //jQuery method
//     // $.get('data/tasks.json', function(data){
//     //     console.log(data);
//     // });
//     // console.log("test");

//     //callbacks
//     // var fruits = ['mango', 'avocado', 'apple'];
//     // fruits.forEach(function(val){
//     //     console.log(val);
//     // });

//     function callbackFunction(data){
//         console.log(data);
//     }
//     $.get('data/tasks.json', callbackFunction);

// };


document.querySelector('#button').addEventListener('click', loadData);


function loadData(){

    xhr = new XMLHttpRequest();

    xhr.open('GET', 'data/tasks.json', true);

    // xhr.onreadystatechange = function(){
    //     console.log(xhr.readyState);
    // }

    //optional for loaders/spinners
    xhr.onprogress = function(){
        console.log(xhr.readyState);
    }

    xhr.onload = function(){
        console.log(xhr.readyState);
        if(this.status === 200){
            console.log(this.responseText);
            document.querySelector('#output').innerHTML = this.responseText;
        }
    }

    xhr.onerror = function(){
        console.log('request error');
    }
    
    xhr.send();


}