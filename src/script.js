const toggleBtn = document.getElementById('toggle-btn')
const ul = document.getElementById('res-ul')
const lightMode = `<svg class="w-5 sm:w-8 cursor-pointer md:hidden " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>


`
const darkMode = `<svg  class="w-5 sm:w-8 cursor-pointer md:hidden " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                         <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
`


toggleBtn.addEventListener('click', () => {
     toggleBtn.classList.toggle('menu')

     if (isDarkModeEnable()) {
          toggleBtn.innerHTML =lightMode
          ul.classList.add('top-[70px]')
          ul.classList.add('opacity-100')

     }else{
          toggleBtn.innerHTML = darkMode
          // ul.classList.remove('top-[80px]')
          ul.classList.remove('opacity-100')
     }
})


function isDarkModeEnable(params) {
     return toggleBtn.classList.contains('menu')    
}