
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

let todoTitle = document.createElement("h4");
let todoText = document.createElement("p");
let todoSelect = document.createElement("span");
let btnSelect = document.createElement("button");



let todoList = [];


if(localStorage.getItem("todo") != undefined){
    todoList = JSON.parse(localStorage.getItem("todo"));

    for (let item of todoList) {
        
        // console.log(item.todo);

        todoTitle.innerHTML = item.todo;
        todoText.innerHTML = item.description;
        todoSelect.innerHTML = item.priority;
    }

////    //////    /////////////////////
        div.appendChild(todoTitle);
        div.appendChild(todoText);
        div.appendChild(todoSelect);
        
    

        btnSelect.innerHTML = "done";
        btnSelect.classList.add("btnSelectClass");
        btnSelect.onclick = BtnOnclickDone;

        div.appendChild(btnSelect);

        div.classList.add("divPage");

        out.appendChild(div);

          
    // CreateOutPage();


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



function CreateOutPage (event){
    event.preventDefault();
    
    let div = document.createElement("div");
    let todoTitle = document.createElement("h4");
    let todoText = document.createElement("p");
    let todoSelect = document.createElement("span");
    let btnSelect = document.createElement("button");
    
    div.classList.add("divPage");

    CreateTodo();



    for(let key in todoList){
        todoTitle.innerHTML= todoList[key].todo;
        todoText.innerHTML= todoList[key].description;
        todoSelect.innerHTML= todoList[key].priority;

    }



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


///////
function BtnOnclickDone() {   
    div.style.backgroundColor = "rgb(200, 200, 200)";
    // out.removeChild(div);    
}

/////////////////// фільтрація елементів

searchIn.addEventListener("keyup", () => {
    let filterSearch = searchIn.value.toUpperCase();
    // console.log(filterSearch);

    let divsOut = document.getElementsByClassName("divPage");
    console.log(divsOut);

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