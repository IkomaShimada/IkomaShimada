let estadoLicuadora = "apagado"
let licuadora = document.getElementById("blender")
let sonidoLicuadora = document.getElementById("blender-sound")
let sonidoLicuadoraButton = document.getElementById("blender-btn-sound")

function controlLicuadora(){
    if (estadoLicuadora ==="apagado"){
        estadoLicuadora = "encendido"
        licuadora.classList.add("active")
        hacerSonido();
        console.log("La licuadora está encendida")
    }else {
        estadoLicuadora = "apagado"
        licuadora.classList.remove("active")
        hacerSonido();
        console.log("La licuadora está apagada")
    }
}

function hacerSonido(){
    if (sonidoLicuadora.paused){
        sonidoLicuadoraButton.play()
        sonidoLicuadora.play()
    }else {
        sonidoLicuadoraButton.play()
        sonidoLicuadora.pause();
        sonidoLicuadora.currentTime =0
    }
}