var starter = document.getElementById("starter")
var dashboard = document.getElementById("dashboard")
var starter_button = document.getElementById("starter_button")

function start() {
    starter.addEventListener("click", function () {
        starter.style.display = "none"
        dashboard.style.display = "flex"
    })
}

start()

