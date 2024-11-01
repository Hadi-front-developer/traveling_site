
let nixbord = document.querySelectorAll('#tr');
console.log(nixbord)
 
nixbord.forEach(btn => {
     btn.addEventListener('click', e => {
          btn.classList.toggle('wayne')
     })
})