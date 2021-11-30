window.onload = resetData()

function totalPrice() {
    var input = document.getElementsByClassName("item");
    var total = 0;
    
    for (var i = 0; i < input.length; i++) {
        if (input[i].checked)
        {
                total += parseFloat(input[i].value);
            }
    }
    total = total.toFixed(2);
    document.getElementById("total").value = "$" + total;
}


function validateForm(){
    if(firstCheck()&&lastCheck()&&phoneCheck()&&creditNumCheck()&&validateExpDate()){
        return true;
    }
    return false;
}



function getFocus()
{
    document.getElementById('first').focus();
    document.getElementById('first').style.border = "thin solid black"
}


function resetFirstName() {
    document.getElementById('first').placeholder = 'Name here';
}



function firstCheck()
{
    var format = /[A-z]/g;
    var input = document.getElementById("first").value;
    if(input.match(format))
    {
        document.getElementById("firstCK").innerHTML = "Valid";
        document.getElementById("firstCK").style.color = "blue";
        document.getElementById('first').style.border = 'thin solid blue';
        return true;
    }
    else
    {
        document.getElementById("firstCK").innerHTML = "Please enter correct first name!!";
        document.getElementById("firstCK").style.color = "red";
        document.getElementById('first').style.border = 'thin solid red';
        return false;
    }
}

function resetLastName() {
    document.getElementById('last').placeholder = 'Last Name here';
}

function lastCheck()
{
    var format = /[A-z]/g;
    var input = document.getElementById("last").value;
    if(input.match(format))
    {
        document.getElementById("lastCK").innerHTML = "Valid";
        document.getElementById("lastCK").style.color = "blue";
        document.getElementById('last').style.border = 'thin solid blue';
        return true;
    }
    else
    {
        document.getElementById("lastCK").innerHTML = "Please enter correct last name!!";
        document.getElementById("lastCK").style.color = "red";
        document.getElementById('last').style.border = 'thin solid red';
        return false;
    }
}


function resetPhone() {
    document.getElementById('phone').placeholder = 'Phone number here';
}


function phoneCheck()
{
    var format = /^\d{3}-\d{3}-\d{4}$/;
    var input = document.getElementById("phone").value;
    if(input.match(format))  
    {     
        document.getElementById("phoneCK").innerHTML = "Valid";
        document.getElementById("phoneCK").style.color = "blue";
        document.getElementById('phone').style.border = 'thin solid blue';
        return true;
    }   
    else  
    {     
        document.getElementById("phoneCK").innerHTML = "Please enter correct format! e.g. 123-456-7890";
        document.getElementById("phoneCK").style.color = "red";
        document.getElementById('phone').style.border = 'thin solid red'; 
        return false;  
    }  
}



function resetCardNum() {
    document.getElementById('cardNum').placeholder = 'Card Number here';
}

function creditNumCheck()
{
    var format = /^\d{4} \d{4} \d{4} \d{4}$/;
    var num = document.getElementById("cardNum").value;
    if(num.match(format))
    {
        document.getElementById("creditNumCK").innerHTML = "Valid";
        document.getElementById("creditNumCK").style.color = "blue";
        document.getElementById('cardNum').style.border = 'thin solid blue';
        
        return true;
    }
    else
    {
        document.getElementById("creditNumCK").innerHTML = "Please enter correct format! e.g. 1111 1111 1111 1111";
        document.getElementById("creditNumCK").style.color = "red";
        document.getElementById('cardNum').style.border = 'thin solid red';
        return false;
    }
}



function resetExpDate() {
    document.getElementById('expdate').placeholder = 'Exp. Date here';
}


function validateExpDate()
{
var format = /^\s*([1-9]|0[1-9]|1[012])\/\d{4}(?!\S)/;
var input = document.getElementById("expdate").value;
if(input.match(format))
{
    document.getElementById("expDateNum").innerHTML = "Valid";
    document.getElementById("expDateNum").style.color = "blue";
    document.getElementById('expdate').style.border = 'thin solid blue';
    return true;
}
else
{
    document.getElementById("expDateNum").innerHTML = "Please enter correct format! e.g. 01/2020";
    document.getElementById("expDateNum").style.color = "red";
    document.getElementById('expdate').style.border = 'thin solid red';
    return false;
}

}




function resetData() {
    document.getElementById('first').style.border = 'thin solid lightgrey';
    document.getElementById('first').value = '';
    document.getElementById('firstCK').innerHTML = '';
    document.getElementById('last').style.border = 'thin solid lightgrey';
    document.getElementById('last').value = '';
    document.getElementById('lastCK').innerHTML = '';
    document.getElementById('phone').style.border = 'thin solid lightgrey';
    document.getElementById('phone').value = '';
    document.getElementById('phoneCK').innerHTML = '';
    document.getElementById('cardNum').style.border = 'thin solid lightgrey';
    document.getElementById('cardNum').value = '';
    document.getElementById('creditNumCK').innerHTML = '';
    document.getElementById('expdate').style.border = 'thin solid lightgrey';
    document.getElementById('expdate').value = '';
    document.getElementById('expDateNum').innerHTML = '';
}
