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



//*************************EXAMPLE ONE

// document.querySelector('#button').addEventListener('click', loadData);

// function loadData(){

//     xhr = new XMLHttpRequest();

//     xhr.open('GET', 'data/tasks.json', true);

//     // xhr.onreadystatechange = function(){
//     //     console.log(xhr.readyState);
//     // }

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

document.querySelector('#btn1').addEventListener('click', loadCustomer);
function loadCustomer(e){
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'data/customer.json', true);
    xhr.send();
    xhr.onload = function(){
        if(this.status === 200){
            // console.log(this.responseText);

            const customer = JSON.parse(this.responseText);
            // console.log(customer);

            const output = `
            <ul>
                <li>ID: ${customer.id}</li>
                <li>Name: ${customer.name}</li>
                <li>Company: ${customer.company}</li>
                <li>Phone: ${customer.phone}</li>
            </ul>
            `
            document.querySelector('#customer').innerHTML =  output;
        }
    }
}


//CUSTOMERS***************************8
document.querySelector('#btn2').addEventListener('click', loadCustomers);
function loadCustomers(e){
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'data/customers.json', true);
    xhr.send();
    xhr.onload = function(){
        if(this.status === 200){
            // console.log(this.responseText);

            const customers = JSON.parse(this.responseText);
            // console.log(customer);

            let output ='' 
            customers.forEach(function(customer){
                output+=`
                <ul>
                    <li>ID: ${customer.id}</li>
                    <li>Name: ${customer.name}</li>
                    <li>Company: ${customer.company}</li>
                    <li>Phone: ${customer.phone}</li>
                </ul>
                `
            });
            
            document.querySelector('#customers').innerHTML =  output;
        }
    }
}


//JSON Crash Course *********************************

var person = {
    name:'john',
    age: 39,
    adress: {
        street: "lawinowa",
        house: 34,
    },
    colors: ["red","yellow"]
}

person = JSON.stringify(person); // - to json ""
person = JSON.parse(person); // - to object

console.log(person);



//***********************FETCH
document.querySelector('#fetch').addEventListener('click', loadJson);
function loadJson(){
    fetch('data/medtasks.json')
        .then(function(res){
            return res.json();
        })
        .then(function(data){
            console.log(data[0].answer1);
            console.log(data);
            const firstTry = data.filter(z => z.id ==="rat");
            console.log(firstTry);
            const ratunkowa = JSON.parse(data);
            const secondTry = ratunkowa.filter(z => z.id ==="rat");
            console.log(secondTry);


        });
}

