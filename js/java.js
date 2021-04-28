'use strict';
let userName = prompt('what is your name?');
alert('welcome ' + userName);
let score = 0;

let ask1 = prompt('do you like football?').toLowerCase();
if (ask1 == 'yes' || ask1 == 'y' ){
     console.log('yes');
    alert('your Answer is yes ');
    score++;
}  else  {
    alert('your Answer is no');}


let ask2 = prompt('Is your favorite club is Real Madrid?').toLowerCase();
    console.log('yes');
if (ask2 == 'yes' || ask2 == 'y' ){
    alert('your Answer is yes ');
    score++;
} else {
    alert('your Answer is no');}
    
  let aks3 = prompt('Is Cristiano Ronaldo your favorite player?').toLowerCase();
    if (aks3 == 'yes' || aks3 == 'y' ){
        alert('your Answer is yes ');
        score++;
    } else {
        alert('your Answer is no');}
 
 let ask4 = prompt('Is your favorite club is Barcelona?').toLowerCase();
  console.log('yes');
  if (ask4 == 'yes' || ask4 == 'y' ){
    alert('your Answer is yes ');
    score++;
 } else {
  alert('your Answer is no');}

  let aks5 = prompt('Is Lionel Messi your favorite player?').toLowerCase();
  if (aks5 == 'yes' || aks5 == 'y' ){
      alert('your Answer is yes ');
      score++;
  } else {
      alert('your Answer is no');}

alert('welcome ' + userName + " thank's for your time");

let x=10
for (let i = 1; i < 4;i++) {
    let num = parseInt(prompt('can you guess my number'))
    if (num === x ){
    alert('you are correct');
    score++;
    break;}
else if (num > x) {
alert('too high')} 
else if(num < x){
    alert('too low')
}
}
alert('correct number is 10')
    
let ask7 =prompt('How many players in the football team ?');
let players = [11,14,10,20];

for (let j =0; j< players.length ;j++){
    if (ask7 == players[j]){
        score++;
        break;
    }else{
        for (let i=1 ;i<=6 ;i++){
            ask7 =prompt('How many players in the football team ?');
            
            break;
        }
    }
}
alert('you\'r score is ' + score)

         
