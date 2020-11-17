// Write your code here!
let name = 'Joe'
let main = document.querySelector('#main')
main.remove();

let newHeader = document.querySelector('#victory')

newHeader.innerHTML = `${name} is the champion`