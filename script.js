 let covidApi = 'https://corona.dnsforfamily.com/graph.png?';

async function display(){
    let country = await fetch('https://restcountries.eu/rest/v2/all');
    let response = await country.json();
    let result = response;
    console.log(result);
    coviddata(result);
}

display();


async function coviddata(country){
   try{
    for(let i=0; i< country.length; i++){
        let countryCode = country[i].alpha2Code
        console.log(countryCode);
        
        let div1 = document.getElementsByClassName('div1')[0];
        let object = document.createElement('object');
        object.data = covidApi + 'c='+ countryCode
        div1.append(object);
    }}
    catch(err){
       console.log(err);
    }
}

// let res = fetch('https://corona.dnsforfamily.com/graph.png?c=AF')

// console.log(res);