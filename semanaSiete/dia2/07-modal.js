let btnModal = document.getElementById("btnModal");

// let miModal  = document.getElementById("miModal")

// el Javascript que hemos importado de bootstrap me trae un objeto llamado bootstrap

let miModal = new bootstrap.Modal(document.getElementById("miModal"));

console.log(miModal);

btnModal.addEventListener("click", function(){
    miModal.show()
})

