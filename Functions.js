const set_headline = () => {


    let h1 = document.getElementById(headline);
    h1 = document.querySelector("#headline");
    console.log(h1.innerHTML);
    h1.innerHTML="JavaScript Functions";
    h1.style.backgroundColor="red";
}
set_headline()
const change_content=(element_id, new_contents)=>{
let element = document.getElementById( element_id);
element.innerHTML = new_contents;
}
const birthYear=Number(prompt('Enter your year of birth'));
const age=2020 - birthYear;
console.log( 'Your age is'+ age);

const mph = Number(prompt('enter a velocity in miles'));
const kmh = Math.round(mph * 1.609344);
console.log('Velocity in km/h is : '+ kmh);

const CzkToEuro = 25.695;
let money = prompt('enter a value in euro');
alert ('This is '+ Math.round(money*CzkToEuro)+' CZK');

/*let message = prompt( 'Enter your message here : ');
document.write(Math.ceil(message.length/160));*/

let message = prompt('Enter the value you got in Fahrenheit here: ');
message=Number(message.replace('.',','))
document.write(Math.round(message * 9 / 5 + 32));