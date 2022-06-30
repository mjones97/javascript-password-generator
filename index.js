const password1 = document.querySelector("#password-1")
const password2 = document.querySelector("#password-2")
const passwordLengthEl = document.querySelector("#password-length-input")
const pLengthErrorEl = document.querySelector("#pLength-error")

const characters =['A','B','C','D','E','F','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','n','o','p','q','r','s','t','u','v','w','x','y','z','*','&','$','#','!','?','<','>','+'] 

function getRandomPassword() {
    let password = ""
    let passwordLength = 0
    if (passwordLengthEl.value < 6) {
        pLengthErrorEl.textContent = "Requirement: Password must have at least 6 characters"
    } else {
        pLengthErrorEl.textContent = ""
        passwordLength = passwordLengthEl.value
        for (let i = 0; i < passwordLength; i++) {
            randomIndex = Math.floor(Math.random() * characters.length)
            password += characters[randomIndex]
        }
        return password
    }
}

function getPasswords() {
    let firstPassword = getRandomPassword()
    let secondPassword = getRandomPassword()
    password1.textContent = firstPassword
    password2.textContent = secondPassword
}
