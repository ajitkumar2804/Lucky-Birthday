const dateOfBirth = document.querySelector("#date-of-birth")
const btnCheck = document.querySelector("#check");
const luckyNo = document.querySelector("#lucky-number");
const birthMessage = document.querySelector("#birthday-msg");


btnCheck.addEventListener("click", checkLuck);

function checkLuck() {
      const birthdate = dateOfBirth.value;
      const sum = calculateSum(birthdate);
      if(sum % luckyNo.value ===0){
            showMessage("You Are Lucky 😍 !!!!!");
      }else{
            showMessage("You are Not Lucky 😊....");
      }
}

function calculateSum(birthdate) {
      birthdate = birthdate.replaceAll("-", "");
      let sum=0;
      for(let i=0;i<birthdate.length;i++){
            sum=sum+ Number(birthdate.charAt(i));
      }
      return sum;
}
function showMessage(msg){
      birthMessage.style.display = "block";
      birthMessage.innerHTML = msg;

}