var starter = document.getElementById("starter")
var dashboard = document.getElementById("dashboard")
var starter_button = document.getElementById("starter_button")
var flash_num = localStorage.getItem("num")
var flash_title = localStorage.getItem("title")
var flash_value = localStorage.getItem("value")
var title = document.getElementById("title")
var create_button = document.getElementById("create_button")
var info_input = document.getElementById("infos")

function start() {
    starter.addEventListener('click', function(){
        starter.style.display = "none"
        dashboard.style.display = "flex"
    })
}

function create_flash(){
    var i = 0
}

function load_flash(){
    flash.style.display = "flex"
    title.textContent = flash_title
}

function verif(){
    if(flash_num == null){
        localStorage.setItem("num", "0")
        create_button.addEventListener('click', function(){
            info_input.style.display = "flex"
        })
    }else{
        load_flash()
    }
}

start()