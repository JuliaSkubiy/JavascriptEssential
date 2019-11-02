
let modal = document.querySelector(".modal");
let btn = document.querySelector("#myBtn");
let cancel = document.querySelector(".cancel");
let save = document.querySelector(".save");

let form = document.querySelector("#form");
let out = document.querySelector(".out");
let searchIn = document.querySelector("#searchInut");

let selectStatus = document.querySelector("#selectStatus");
let priority = document.querySelector("#priority");

let div = document.createElement("div");

// let todoTitle = document.createElement("h4");
// let todoText = document.createElement("p");
// let todoSelect = document.createElement("span");
// let btnSelect = document.createElement("button");

    // let outText = "";
    // let outDescription = "";
    // let outSelect = "";



let todoList = [];


if(localStorage.getItem("todo") != undefined){
    todoList = JSON.parse(localStorage.getItem("todo"));

    for (let item of todoList) {
        item
        console.log(item.todo);
    }      
    // CreateOutPage();
    // out.appendChild(div);
}

btn.onclick = function(){
    modal.style.display = "block";
}

function Close(){
    modal.style.display = "none";
    form.elements.title.value = "";
    form.elements.textarea.value = "";
}

cancel.onclick = Close;

save.onclick = CreateOutPage;


function CreateTodo(){

    let temp = {}; // {todo: title, description: text, priority: (hide, normal,low), status: (open,done)}
    temp.todo = form.elements.title.value;
    temp.description = form.elements.textarea.value;
    temp.priority = form.elements.select.value;
    temp.status = "open";

    let i = todoList.length;
    todoList[i] = temp;
    console.log(todoList);

    localStorage.setItem("todo", JSON.stringify(todoList));
}



function CreateOutPage (){
    
    let div = document.createElement("div");
    let todoTitle = document.createElement("h4");
    let todoText = document.createElement("p");
    let todoSelect = document.createElement("span");
    let btnSelect = document.createElement("button");
    
    div.classList.add("divPage");

    CreateTodo();


    let outText = "";
    let outDescription = "";
    let outSelect = "";

    for(let key in todoList){
        outText = todoList[key].todo;
        outDescription = todoList[key].description;
        outSelect = todoList[key].priority;

    }
    todoTitle.innerHTML = outText;
    todoText.innerHTML = outDescription;
    todoSelect.innerHTML = outSelect;




    div.appendChild(todoTitle);
    div.appendChild(todoText);
    div.appendChild(todoSelect);
        
    

    btnSelect.innerHTML = "done";
    btnSelect.classList.add("btnSelectClass");

    div.appendChild(btnSelect);
    
    btnSelect.onclick = function(){   
        div.style.backgroundColor = "rgb(200, 200, 200)";
        // out.removeChild(div);    
    }

    out.appendChild(div);

    Close();

}



/////////////////// фільтрація елементів

searchIn.addEventListener("keyup", () => {
    let filterSearch = searchIn.value.toUpperCase();
    // console.log(filterSearch);

    let titeleOut = document.getElementsByTagName("h4");
    // console.log(titeleOut);

    for(let i=0; i < titeleOut.length; i++){
    //    console.log(titeleOut[i].innerHTML);

       if(titeleOut[i].innerHTML.toUpperCase().indexOf(filterSearch)> -1){
            titeleOut[i].style.display = "block";   //замінити на div !!!
       }
       else{
            titeleOut[i].style.display = "none";    //замінити на div !!!
       }
    }
});

selectStatus.onchange = function(){

    let selectValue = selectStatus.value;
    console.log(selectValue);

    
}



priority.onchange = function(){

    let priorityValue = priority.value;
    // console.log(priorityValue);

    let spanValue = document.getElementsByTagName("span");

    for(let i = 0; i < spanValue.length; i++){

        spanValue[i].style.border = "";

        // console.log(spanValue[i].value);
        if(spanValue[i].innerHTML == priorityValue){
            spanValue[i].style.border = "1px solid red";
        }

        // else{
        //     spanValue[i].style.border = "1px solid red";
        // }
    }

}



console.log("work");