let boxes = document.querySelectorAll('.btn');
let reset = document.querySelector('#Reset');
let msgconatin = document.getElementById('msgcon');
let winmsg = document.getElementById('msg');

let turn = true;

const winPatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("Box clicked");
        if(turn){
            box.innerText = "x";
            turn = false;
        }
        else{
            box.innerText = "o";
            turn = true;
        }
        box.disabled = true;
        checkwinner();
        
      
    });
});
const disableboxes =()=>{
    for(box of boxes){
        box.disabled = true;
    }
}

const enableBoxes =()=>{
    for(box of boxes){
        box.disabled = false;
        box.innerText=" ";
    }
}

let showwinner=(winner)=>{
    winmsg.innerText = `congratulations ${winner} is the Winner`;
}

const checkwinner = () =>{
    for(let pattern of winPatterns) {
           let pos1val = boxes[pattern[0]].innerText;
           let pos2val = boxes[pattern[1]].innerText;
           let pos3val = boxes[pattern[2]].innerText;
        
           if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                    console.log("Winner",pos1val);
                    showwinner(pos1val);
                    disableboxes();
                    
                }
        }
    }  
};

reset.addEventListener('click',()=>{
    enableBoxes();
});