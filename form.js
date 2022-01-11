//create array 

let userInfo = {
  moreEmail:[],
  moreNumber:[]
};


  const form =  document.getElementById('form');

    // get value form input Text
   document.getElementById('submitBtn').addEventListener('click',function(e){
  
    e.preventDefault()

    let inputFiled = document.getElementById('nameField').value;
    userInfo.name = inputFiled;
    
    let emailField = document.getElementById('emailField').value;
    userInfo.email = emailField;

    let numberField = document.getElementById('numberField').value;
    userInfo.number = numberField;

   

    

//  loop for more email field
    const anotherEmail = document.getElementsByName('moreEmail')
    for(i=0; i<anotherEmail.length; i++){
      userInfo.moreEmail.push(anotherEmail[i].value);

    }
    

// another loop for more number field
    const anotherNumber = document.getElementsByName('moreNumber')
    for(i = 0; i<anotherNumber.length; i++){
      userInfo.moreNumber.push(anotherNumber[i].value)
    }
 
// data show in table 
    const table = document.getElementById('display');
    
        let row = `<tr>
                   <td>${userInfo.name} </td>
                   <td>${userInfo.email} </td>
                   <td>${userInfo.number} </td>
                  <td>${userInfo.moreEmail.join(", </br>")} </td>
                  <td>${userInfo.moreNumber.join(", </br>")} </td>
                   
                
                </tr>`
       
      table.innerHTML += row;
      if(userInfo.moreEmail.length > 0){
        document.getElementById('anoEmail').style.removeProperty('display')
      }
      
      if(userInfo.moreNumber.length > 0){
        document.getElementById('anoNumber').style.removeProperty('display')
      }
      

form.reset()

});

 // create more input field with js
function moreEmailField() {

    const emailDiv = document.getElementById('emailDiv')
    const input = document.createElement("input");
        input.type = "email";
        input.name = "moreEmail";
        input.placeholder = "enter your email";
        input.className = "form-control";
        emailDiv.appendChild(input);
        
        
}
const button_1 = document.getElementById('emailPlus').addEventListener('click', 
function(e){
    e.preventDefault()
    moreEmailField()
})

function moreNumBtn(){
    const numbrDiv = document.getElementById('numDiv');
    const input = document.createElement('input');
    input.type = "number"
    input.name = "moreNumber"
    input.placeholder = "enter your number"
    input.className = "form-control"
    numbrDiv.appendChild(input);
   

}

const button_2 = document.getElementById('numberPlus').addEventListener('click',
function(e){
    e.preventDefault()
    moreNumBtn()

})

