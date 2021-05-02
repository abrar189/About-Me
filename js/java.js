'use strict';

let userName = prompt('what is your name?');
alert('welcome ' + userName);
let score = 0;

function q1() {

    let ask1 = prompt('do you like football?').toLowerCase();
    if (ask1 == 'yes' || ask1 == 'y') {
       
        alert('your Answer is yes ');
        score++;
    } else {
        alert('your Answer is no');
    }
}



function q2() {

    let ask2 = prompt('Is your favorite club is Real Madrid?').toLowerCase();
    
    if (ask2 == 'yes' || ask2 == 'y') {
        alert('your Answer is yes ');
        score++;
    } else {
        alert('your Answer is no');
    }
}

function q3() {

    let aks3 = prompt('Is Cristiano Ronaldo your favorite player?').toLowerCase();
    if (aks3 == 'yes' || aks3 == 'y') {
        alert('your Answer is yes ');
        score++;
    } else {
        alert('your Answer is no');
    }
}

function q4() {

    let ask4 = prompt('Is your favorite club is Barcelona?').toLowerCase();
    
    if (ask4 == 'yes' || ask4 == 'y') {
        alert('your Answer is yes ');
        score++;
    } else {
        alert('your Answer is no');
    }
}

function q5() {

    let aks5 = prompt('Is Lionel Messi your favorite player?').toLowerCase();
    if (aks5 == 'yes' || aks5 == 'y') {
        alert('your Answer is yes ');
        score++;
    } else {
        alert('your Answer is no');
    }

    alert('welcome ' + userName + " thank's for your time");
}

function q6() {

    let x = 10
    for (let i = 1; i < 4; i++) {
        let num = parseInt(prompt('can you guess my number'))
        if (num === x) {
            alert('you are correct');
            score++;
            break;
        }
        else if (num > x) {
            alert('too high')
        }
        else if (num < x) {
            alert('too low')
        }
    }
    alert('correct number is 10')
}

function q7() {

    let ask7 = prompt('How many players in the football team ?');
    let players = [11, 14, 10, 20];

    for (let j = 0; j < players.length; j++) {
        if (ask7 == players[j]) {
            score++;
            break;
        } else {
            for (let i = 1; i <= 6; i++) {
                ask7 = prompt('How many players in the football team ?');

                break;
            }
        }
    }
}

q1();
q2();
q3();
q4();
q5();
q6();
q7();
alert('you\'r score is ' + score)


