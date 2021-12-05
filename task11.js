const birthday=document.querySelector("#birthdayDate");
const luckyNo=document.querySelector("#luckynumber");
const checkbutton=document.querySelector("#check-button");
const output=document.querySelector("#out-put");


function checklucky(sum,luckyNo){
   if (sum%luckyNo===0){
       output.innerText="Your birthday is lucky🥳!!"
   }else{
       output.innerText="Your birthday is not lucky😕!!"
   }
}
function checkBirthDateIsLucky(){
    const dob=birthday.value;
    const sum=calculatesum(dob);
    if (sum&&dob){
    checklucky(sum,luckyNo.value) 
}  else{
    output.innerText="*required both the fields"
}

}  
function calculatesum(dob){
    dob=dob.replaceAll("-","");
    let sum=0;
    for (i=0;i<dob.length;i++){
        sum=sum+Number(dob.charAt(i));
    }
    return sum;
}

checkbutton.addEventListener("click",checkBirthDateIsLucky); 