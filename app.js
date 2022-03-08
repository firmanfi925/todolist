const inputTodo = document.getElementById("input-todo");
const body = document.getElementsByClassName("body");

const buttonTambah = document.getElementById("button-tambah");
buttonTambah.addEventListener("click", function() {
    body[0].innerHTML += `<div class="item-todo" id="${inputTodo.value}">${inputTodo.value}
    <img src="./delete.png" width="12" class="button-delete" data="${inputTodo.value}" onClick="hapusList()" />
    </div>`;
    inputTodo.value = "";
})

function hapusList() {
    const buttonDelete = document.getElementsByClassName("button-delete");
    for (let i = 0; i < buttonDelete.length; i++) {
        buttonDelete[i].addEventListener("click", function() {
            document.getElementById(buttonDelete[i].getAttribute("data")).remove();
        });
    }
}

// inputTodo.addEventListener("keypress", function(e) {
//     if(e.key === "Enter") {
//         body[0].innerHTML += `<div class="item-todo">${inputTodo.value}</div>`;
//         inputTodo.value = "";
//     }
// })

