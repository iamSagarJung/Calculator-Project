const allbtn=document.querySelectorAll("button");
const screen=document.getElementById("screen");
const equalto=document.querySelector(".equalto")
const body=document.body;




for(let btns of allbtn){
    btns.addEventListener("click",(e)=>{
        buttonText=e.target.textContent;
        

        if(buttonText == "X"){
            buttonText='*';
            screen.value += buttonText;

        }
        
        else if(buttonText=="C"){
            screen.value="";
            screen.style.backgroundColor="#fff"
            screen.style.color="#000"
        }

        else if (buttonText=="="){
            screen.value=eval(screen.value)
            screen.style.backgroundColor="#5c5c5c"
            screen.style.color="white"

        }
        else if(buttonText=="Back"){
            const length=screen.value
            console.log(length)
            screen.value=length.slice(0,-1)
        }
        else{
            screen.value += buttonText;
        }
        
        
    
    })
}



