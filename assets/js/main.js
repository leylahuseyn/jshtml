const inp = document.querySelector("input");
const ul = document.getElementById("list");
const btn = document.getElementById("btn");
const bt = document.getElementById("delete");
let stdns = [];
btn.onclick = e=>{
    e.preventDefault();
    if (inp.value.trim() != '') {
        stdns.push(inp.value.trim());
        inp.value = "";
        fillList();
    }
    else{
        alert("Nese daxil et");
    }
}
bt.onclick = event=>{
    event.preventDefault();
        stdns.pop();
        fillList();
}

function fillList() {
    ul.innerHTML = stdns.reduce((total, val)=> total + `<li class="list-group-item">${val}</li>`,'');
}