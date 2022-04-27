let addtodobutton = document.getElementById('addtodo');
let todocontainer = document.getElementById('todocontainer');
let inputfield = document.getElementById('inputfield');


addtodobutton.addEventListener('click', function(){
    var paragragh = document.createElement('p');
    paragragh.classList.add('paragrapgh-styling');
    paragragh.innerText = inputfield.value;
    todocontainer.appendChild(paragragh);
    inputfield.value = "";
    paragragh.addEventListener('click', function(){
        paragragh.style.textDecoration = "line-through";

    })
    paragragh.addEventListener('dblclick', function(){
        todocontainer.removeChild(paragragh);
        
    })

})
