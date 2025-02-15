let userscore=0;
let compscore=0;
const choices=document.querySelectorAll(".choice");
const message=document.querySelector("#message");

const userscorepara=document.querySelector("#user_score");
const compscorepara=document.querySelector("#comp_score");


const genCompChoice=()=>{
    //rock paper seasor
    const option=["rock","paper","scissor"];
    const ranidx=Math.floor(Math.random()*3);
    return option[ranidx];
}
const draw=()=>{
    console.log("game is draw");
    message.innerText="Draw";
    }

const showwinner=(userwin,userChoice,compChoice)=>{
    if(userwin){
        userscore++;
        userscorepara.innerText=userscore;
        console.log("you win");
        message.innerText="you win!";
        userscore++;

    }else{
        compscore++;
        compscorepara.innerText=compscore;
        console.log("you lose");
        message.innerText="you lose!";
        comp_score++;



    }
}
const playgame=(userChoice)=>{
    console.log("user choice =",userChoice);
    const compChoice=genCompChoice();
    console.log("computer choice =",compChoice);
    if(userChoice===compChoice){
        draw();
    }
    else{
        let userwin=true;   
        if(userChoice==="rock")
            {
            userwin=compChoice==="paper"?false:true;
        }else if(userChoice==="paper")
            {
            userwin=compChoice==="scissor"?false:true;
        }   
        else{
            userwin=compChoice==="rock"?false:true; 
        }
        showwinner(userwin,userChoice,compChoice);
    }
}
choices.forEach((choice)=>{
    //console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");   
        //console.log("choice is clicked",userChoice);
        playgame(userChoice);

    });

});