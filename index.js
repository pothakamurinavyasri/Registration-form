 /*console.log("Hii")*/
 let globalIsSubmit=false
 function validate(isSubmit){
  if(isSubmit){
    globalIsSubmit=true
  }
   let firstName=document.getElementById('first name').value
   let lastName=document.getElementById('last name').value
   let userName=document.getElementById('username').value
   let cityName=document.getElementById('city').value
   let stateValid=document.getElementById('state').value
   let ZipCode=document.getElementById('zip-code').value
   let TNC=document.getElementById('t-and-c').checked  /* checked input */
  /*  console.log(firstName,lastName,userName,cityName,ZipCode,TNC)*/
  if(globalIsSubmit){
    if(firstName.length >=2){
        document.getElementById('first-name-valid').style.display='block'
        document.getElementById('first-name-invalid').style.display='none'
      /*  console.log('First name is valid') */
    } else {
        document.getElementById('first-name-invalid').style.display='block'
        document.getElementById('first-name-valid').style.display='none'
       /* console.log('First name is invalid') */
 }
 if(lastName.length >=2){
    document.getElementById('last-name-valid').style.display='block'
    document.getElementById('last-name-invalid').style.display='none'
  /*  console.log('First name is valid') */
} else {
    document.getElementById('last-name-invalid').style.display='block'
    document.getElementById('last-name-valid').style.display='none'
   /*
  console.log('First name is invalid') */
}
/*
email/username
1. must include @
2. must include .
3. before @ there should be atleast one character.
4. after . there should be 2 characters.
*/
if(userName.includes('@') && userName.includes('.') && userName.indexOf("@")>0 && userName.substr(userName.lastIndexOf('.')+1).length>=2 ){
    document.getElementById('username-valid').style.display='block'
    document.getElementById('username-invalid').style.display='none'
} else {
    document.getElementById('username-invalid').style.display='block'
    document.getElementById('username-valid').style.display='none'
 }
 if(cityName.length >=3){
    document.getElementById('city-name-valid').style.display='block'
    document.getElementById('city-name-invalid').style.display='none' 
} else {
    document.getElementById('city-name-invalid').style.display='block'
    document.getElementById('city-name-valid').style.display='none' 
}
/*
Zip 
1. length should be exactly 6 characters.
2. only numbers are allowed.
  // isNaN --> will return true if value is NaN, !isNaN --> will return true if value is a valid number
*/
let  numberZip=parseInt(ZipCode)
if(
  !isNaN(numberZip) && 
  numberZip > 100000 &&
  numberZip <= 999999
  ){
    document.getElementById('zip-valid').style.display='block'
    document.getElementById('zip-invalid').style.display='none' 
} else {
    document.getElementById('zip-invalid').style.display='block'
    document.getElementById('zip-valid').style.display='none' 

}
if(TNC){
  document.getElementById("t-and-c").style.display="none"
}
else{
  document.getElementById("t-and-nc").style.display="block"
}
if (stateValid!='None'){
  document.getElementById('state-valid').style.display='block'
  document.getElementById('state-invalid').style.display='none' 
} else {
  document.getElementById('state-invalid').style.display='block'
  document.getElementById('state-valid').style.display='none' 
}
  }
 }

