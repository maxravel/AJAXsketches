// window.onload = function(){

    // // VANILLA JS*********************
    // var http = new XMLHttpRequest();

    // http.onreadystatechange = function(){
    //     if(http.readyState == 4 && http.status == 200){
    //         console.log(JSON.parse(http.response));
    //     }
    // };

    // http.open('GET', 'data/tasks.json', true);
    // http.send();
    // console.log(http);

    //jQuery method*************************8
    // $.get('data/tasks.json', function(data){
    //     console.log(data);
    // });
    // console.log("test");

    //**********************CALLBACKS****************
    // var fruits = ['mango', 'avocado', 'apple'];
    // fruits.forEach(function(val){
    //     console.log(val);
    // });

    // function callbackFunction(data){
    //     console.log(data);
    // }
    // $.get('data/tasks.json', callbackFunction);
   

// };



//*************************EXAMPLE ONE
// document.querySelector('#button').addEventListener('click', loadData);

// function loadData(){

//     xhr = new XMLHttpRequest();

//     xhr.open('GET', 'data/tasks.json', true);

//     xhr.onreadystatechange = function(){
//         console.log(xhr.readyState);
//     }

//     //optional for loaders/spinners
//     xhr.onprogress = function(){
//         console.log(xhr.readyState);
//     }

//     xhr.onload = function(){
//         console.log(xhr.readyState);
//         if(this.status === 200){
//             console.log(this.responseText);
//             document.querySelector('#output').innerHTML = this.responseText;
//         }
//     }

//     xhr.onerror = function(){
//         console.log('request error');
//     }
    
//     xhr.send();

// }



//*************************EXAMPLE TWO
// document.querySelector('#btn1').addEventListener('click', loadCustomer);
// function loadCustomer(e){
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', 'data/customer.json', true);
//     xhr.send();
//     xhr.onload = function(){
//         if(this.status === 200){
//             // console.log(this.responseText);

//             const customer = JSON.parse(this.responseText);
//             // console.log(customer);

//             const output = `
//             <ul>
//                 <li>ID: ${customer.id}</li>
//                 <li>Name: ${customer.name}</li>
//                 <li>Company: ${customer.company}</li>
//                 <li>Phone: ${customer.phone}</li>
//             </ul>
//             `
//             document.querySelector('#customer').innerHTML =  output;
//         }
//     }
// }



//**************************CUSTOMERS***********
// document.querySelector('#btn2').addEventListener('click', loadCustomers);
// function loadCustomers(e){
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', 'data/customers.json', true);
//     xhr.send();
//     xhr.onload = function(){
//         if(this.status === 200){
//             // console.log(this.responseText);

//             const customers = JSON.parse(this.responseText);
//             // console.log(customer);

//             let output ='' 
//             customers.forEach(function(customer){
//                 output+=`
//                 <ul>
//                     <li>ID: ${customer.id}</li>
//                     <li>Name: ${customer.name}</li>
//                     <li>Company: ${customer.company}</li>
//                     <li>Phone: ${customer.phone}</li>
//                 </ul>
//                 `
//             });
            
//             document.querySelector('#customers').innerHTML =  output;
//         }
//     }
// }



//***********************JSON Crash Course **********
// var person = {
//     name:'john',
//     age: 39,
//     adress: {
//         street: "lawinowa",
//         house: 34,
//     },
//     colors: ["red","yellow"]
// }

// person = JSON.stringify(person); // - to json ""
// person = JSON.parse(person); // - to object

// console.log(person);



//***********************FETCH******************
// document.querySelector('#fetch').addEventListener('click', loadJson);
// function loadJson(){
//     fetch('data/medtasks.json')
//         .then(function(res){
//             return res.json();
//         })
//         .then(function(data){
//             console.log(data[0].answer1);
//             console.log(data);
//             const firstTry = data.filter(z => z.id ==="rat");
//             console.log(firstTry);
//             // const ratunkowa = JSON.parse(this.responseText);
//             // const secondTry = ratunkowa.filter(z => z.id ==="rat");
//             // console.log(secondTry);
//         });
// }



//************************WORKING WITH EXTERNAL API
// document.querySelector('#loadJokes').addEventListener('click', loadJokes);

// function loadJokes(){
//     const xhr = new XMLHttpRequest();
//     const number = document.querySelector('#jokesNumber').value;
//     xhr.open('GET',	
//     `http://api.icndb.com/jokes/random/${number}`, true);        
    
//     xhr.onload = function(){
//         if(this.status ===200){
//             const response = JSON.parse(this.responseText);

//             let output = '';

//             if(response.type === 'success'){

//                 response.value.forEach(function(joke){
//                     output += `<br><br>${joke.joke}`;
//                 });   
//             }

//             else{
//                 console.log('something went wrong')
//             }
         
//             document.querySelector("#jokes").innerHTML = output;
//         }
//     }

//     xhr.send(); 
    
// }



//************************WORKING WITH COINMARKETCAP EXTERNAL API
document.querySelector('#countValue').addEventListener('click', countingV);

function countingV(){
    const xhr = new XMLHttpRequest();
    const number = document.querySelector('#coinAmount').value;
    xhr.open('GET',	
    'https://api.coinmarketcap.com/v2/ticker/1214/', true);        
    
    xhr.onload = function(){
        if(this.status ===200){
            const response = JSON.parse(this.responseText);

            //let output = '';
            //console.log(response.data.quotes.USD.price);

            // if(response.type === 'success'){

            //     // response.value.forEach(function(joke){
            //     //     output += `<br><br>${joke.joke}`;
            //     // });   
            //     console.log(response);
            // }

            // else{
            //     console.log('something went wrong')
            // }
         
            document.querySelector("#outputValueDolars").innerHTML = Math.round(number*response.data.quotes.USD.price*100)/100+"$";
        }
    }

    xhr.send(); 

    const xhr2 = new XMLHttpRequest();
    xhr2.open('GET',	
    'https://bitbay.net/API/Public/LSKPLN/ticker.json', true);        
    
    xhr2.onload = function(){
        if(this.status ===200){
            const response = JSON.parse(this.responseText);

            //let output = '';
            //console.log(response.data.quotes.USD.price);

            // if(response.type === 'success'){

            //     // response.value.forEach(function(joke){
            //     //     output += `<br><br>${joke.joke}`;
            //     // });   
            //     console.log(response);
            // }

            // else{
            //     console.log('something went wrong')
            // }
         
            document.querySelector("#outputValuePLN").innerHTML = Math.round(number*response.last*100)/100+"PLN";
        }
    }

    xhr2.send(); 
    
}





//******************************** PROMISES ********************
// window.onload = function(){

//     function get(url){
//         return new Promise(function(resolve, reject){
//             //resolve - success; reject - error;
//             var xhttp = new XMLHttpRequest();
//             xhttp.open("GET",url,true);
//             xhttp.onload = function(){
//                 if(xhttp.status==200){
//                     resolve(JSON.parse(xhttp.response));
//                 }
//                 else{reject(xhttp.statusText);}
//             };
//             xhttp.onerror = function(){
//                 reject(xhttp.statusText);
//             };
//             xhttp.send();

//         });
//     }

//     var promise = get("data/customer.json");
//     promise.then(function(customer){
//         console.log(customer);
//         return get("data/customers.json");
//     }).then(function(customers){
//         console.log(customers);
//         return get("data/medtasks.json");
//     }).then(function(medtasks){
//         console.log(medtasks);
//     }).catch(function(error){
//         console.log(error);
//     });


//     //***************jQuery method
//     $.get("data/customer.json").then(function(a){
//         console.log(a);
//         return $.get("data/customers.json");
//     }).then(function(b){
//         console.log(b);
//         return $.get("data/medtasks.json");
//     }).then(function(c){
//         console.log(c);
//     })

// }

//************************GENERATORS ************************/
// window.onload = function(){

//     //funtion* - generator
//     function* gen(){
//         var x = yield 10;
//         console.log(x)
//     }

//     var myGen = gen();
//     console.log(myGen.next());
//     console.log(myGen.next(10));
// }

//ECMA6 Take
// window.onload = function(){

//     function* gen(){
//         //when first myGen.next(): yield stops function after console.log("abc");
//         yield console.log("abc");
//         //when second myGen.next(): yield stops function after console.log("def");
//         yield console.log("def");
//         //when third myGen.next(): yield stops function after console.log("ghi");
//         yield console.log("ghi");
//         //when fourth myGen.next(): console.log final works:
//         console.log("final");
//     }

//     var myGen = gen();
//     myGen.next();
//     myGen.next();
//     myGen.next();
//     myGen.next();
    
// }



//*********************ASYNCHRONOUS CALLBACK

// const posts = [
//     {title:"post one",text:"this is post one"},
//     {title:"post two",text:"this is post two"}
// ];

// function getPosts(){
//     setTimeout(()=>{
//         let output = '';
//         posts.forEach((post,index)=>{
//             output += `<li>${post.title}</li>`;
//         });
//         document.body.innerHTML = output;
//     },1000);
// }

// // getPosts();

// function createPost(post, callback){
//     setTimeout(()=>{
//         posts.push(post);
//         callback();
//     },2000);
// }

// createPost({title:"post three",text:"this is post three"}, getPosts);



//*******************SAME EXAMPLE WITH PROMISES

// const posts = [
//     {title:"post one",text:"this is post one"},
//     {title:"post two",text:"this is post two"}
// ];

// function getPosts(){
//     setTimeout(()=>{
//         let output = '';
//         posts.forEach((post,index)=>{
//             output += `<li>${post.title}</li>`;
//         });
//         document.body.innerHTML = output;
//     },1000);
// }

// function createPost(post, callback){
//     return new Promise((resolve,reject) => {
//         setTimeout(()=>{
//             posts.push(post);
//             const error = false;
//             if(!error){
//                 resolve();
//             }
//             else{
//                 reject('Error: Something went wrong.');
//             }
//         },2000);
//     });   
// }

// createPost({title:"post three",text:"this is post three"})
//     .then(getPosts)
//     .catch(err => console.log(err));


//Promise.all
// const promise1 = Promise.resolve("hello world");
// const promise2 = 10;
// const promise3 = new Promise((resolve,reject)=>setTimeout(resolve,2000,"goodbye"));
// const promise4 = fetch("https://jsonplaceholder.typicode.com/users").then(res=>res.json());

// Promise.all([promise1,promise2,promise3,promise4]).then(((values)=>console.log(values)));



//*********************ASYNC/AWAIT
// const posts = [
//     {title:"post one",text:"this is post one"},
//     {title:"post two",text:"this is post two"}
// ];

// function getPosts(){
//     setTimeout(()=>{
//         let output = '';
//         posts.forEach((post,index)=>{
//             output += `<li>${post.title}</li>`;
//         });
//         document.body.innerHTML = output;
//     },1000);
// }

// function createPost(post, callback){
//     return new Promise((resolve,reject) => {
//         setTimeout(()=>{
//             posts.push(post);
//             const error = false;
//             if(!error){
//                 resolve();
//             }
//             else{
//                 reject('Error: Something went wrong.');
//             }
//         },2000);
//     });   
// }


// async function init(){
//     await createPost({title:"post three",text:"this is post three"});
//     getPosts();
// };

// init();

//Async/Await + fetch
// async function fetchUsers(){
//     const res = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await res.json();
//     console.log(data);
// }

// fetchUsers();



// async function medtasksLoad(){
//     const res = await fetch("data/medtasks.json");
//     const data = await res.json();
//     data.forEach(function(question){
//         console.log(question.answer1);
//     })
// }

// medtasksLoad();



//*****************FETCH API */
