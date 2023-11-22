let age = prompt("Enter your age:");
age = Number(age); // age is converted from string to number

if( age >= 18 ){
    alert("VALID");
}
else if( age >=0 && age < 18 ){
    alert("NOT VALID");
}
else{
    alert("TYPE ERROR");
}