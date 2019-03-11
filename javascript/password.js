var passcode;
var myCode = "baVarian2K19";
var lock = document.getElementById('lockContainer');
var input = document.getElementById('password');
var bmw = document.getElementById('bmwContainer');

function checkPassword()
{
  passcode = document.getElementById('password').value;
  if (passcode == myCode)
  {
      lock.style.display = "none";
      bmw.style.display = "block";

  }
  else
  {
     input.style.borderColor = "red";
     input.value = "";
     input.placeholder = "Password incorrect. Try again."
  }
}
