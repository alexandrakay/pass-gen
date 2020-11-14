

const h3 = document.querySelector('h3')
const button = document.querySelector('button')
const input = document.querySelector('input')
const p = document.querySelector('p')

// alert('howdy do')

button.addEventListener('click', () => {
    input.value = GeneratePassword(16)
    console.log(input.value)
    h3.innerText = 'Click here to copy password ' + input.value
})

const GeneratePassword = (length = 16) => {
    const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

    let password = ''
    for(let i = 0; i < length; ++i){
        let at =Math.floor(Math.random() * (charset.length + 1))
        // console.log(at)
        password += charset.charAt(at)
        // console.log(password)
    }
    return password
}


h3.addEventListener('click', () => {
    // console.log(input.value)
    copyText()
})

const copyText = () => {
    let passText = input.value
    navigator.clipboard.writeText(passText)
    alert(passText)
}