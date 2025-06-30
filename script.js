const menuIcon = document.getElementById('menu')
const sidebarCenter = document.getElementById('sidebarCenter')
const closeButton = document.getElementById('close')
const sideBar = document.getElementById('sidebar')

menuIcon.addEventListener('click', function(){
    sideBar.style.display = 'block'
    sideBar.classList.add('show')
})

closeButton.addEventListener('click', function(){
    sideBar.style.display = 'none'
})