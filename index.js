const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const pwLength = 10;

let pw1 = document.getElementById("password-1")
let pw2 = document.getElementById("password-2")

function startGenerate () {
    let randomIndex = Math.floor(Math.random() * characters.length)
    return characters[randomIndex]
}

function generatePassword () {
   let password = ""
   let password2 = ""
   for (let i = 0; i < pwLength; i++) {
      password += startGenerate()
      password2 += startGenerate()
      pw1.textContent = password
      pw2.textContent = password2
   }
   return password
}