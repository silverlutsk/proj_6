let profit = +prompt('Please, enter your profit')
let impost = +prompt('Please, enter the impost percentage rate (%)')

function conventer(profit, impost){
    console.log('The amount of tax on your income will be '+(profit-(profit-(profit*(impost/100)))))
    alert('The amount of tax on your income will be '+(profit-(profit-(profit*(impost/100)))))
}

conventer(profit, impost)

////////////////////////////////////////////////////////////////////////////////

let num = +prompt('Please, enter a number to check')

function check_even_odd(num){
    if (num % 2 === 0) {
        console.log('The number is even');
        alert('The number is even')
    }
    else if((num % 2 !== 0)) {
        console.log('The number is odd');
        alert('The number is odd')
    }
}

check_even_odd(num)

//////////////////////////////////////////

let a = +prompt('Enter the first number')
let b = +prompt('Enter the second number')

function check_more_les(a, b){
    if (a > b){
        console.log(a +'>'+ b);
        alert(a +'>'+ b)
    }

    else if (a < b){
        console.log(a +'<'+ b);
        alert(a +'<'+ b)
    }

    else if(a = b){
        console.log(a +'='+ b);
        alert(a +'='+ b)
    }
}

check_more_les(a,b)

///////////////////////////////////////

let login = prompt('Welcome, enter your login to verify(admin, user or guest)')

function check_login(login){
    if (login == 'admin'){
        console.log('Hello, admin! Welcome to the website.\nAdvanced features are available on the site. \nPassword change.\nDesign update.\nRegistration of new users.');
        alert('Hello, admin! Welcome to the website.\nAdvanced features are available on the site. \nPassword change.\nDesign update.\nRegistration of new users.')
    }

    else if (login == 'user'){
        console.log('Hello, user! Welcome to the website.\nStandard services on the site are available to you.\nChanging the color theme.\nInformation search.\nInviting friends.');
        alert('Hello, user! Welcome to he website.\nStandard services on the site are available to you.\nChanging the color theme.\nInformation search.\nInviting friends.')
    }
    else if (login == 'guest'){
        console.log('Hello, guest! Welcome to the website.\nPlease, log in or register on the website!');
        alert('Hello, guest! Welcome to the website.\nPlease, log in or register on the website!')
    }

else{
    console.log('Error.\nIncorrect data!!!');
    alert('Error.\nIncorrect data!!!')
}
}

check_login(login)




