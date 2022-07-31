size = 16;
const container = document.querySelector(".frame");
game(size, container);


function game(size, container){

    for(i = 0; i< size; i++)
    {
        const line = document.createElement('div');
        line.setAttribute("class" , "line");
        line.setAttribute("id",i);
        line.style.display = "flex";
        line.style.justifyContent = "center";
        container.appendChild(line);


        for(j = 0; j < size; j++){
        const pad = 600/size - 2 + "px";
        const block = document.createElement('div');
        block.setAttribute('class', j, "square");
        block.style.backgroundColor= "white";
        block.style.padding = pad;
        block.style.border = "1px";
        block.style.borderStyle = "solid";
        block.style.borderColor = "red";
        block.addEventListener("mouseover", function(){
            colorshift(block)
        });
        line.appendChild(block);
        }
    }
}

function colorshift(block){
    block.style.backgroundColor = "black";
}

const button = document.querySelector("button");
button.addEventListener("click", function(){
    size = changesize();
    if(size>100){
        size = 16;
    }
    clear(container);
    game(size, container);
})

function changesize(){
    return prompt("enter grid size, up to 100", [16]);
}

function clear(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild)
    }
}