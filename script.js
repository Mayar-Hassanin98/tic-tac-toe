//Html Elements
const statusDiv=document.querySelector('.status');
const resetDiv=document.querySelector('.reset');
const cellDivs=document.querySelectorAll('.game-cell');

//game constants
  const xSymbol='✖';
  const oSymbol='O';

//game variables
let gameIsLive=true;
let xIsNext=true;
let winner=null;

//functions

const letter=(letter)=>letter==='x'?xSymbol:oSymbol;


const gameWinner=(symbol)=>{
    gameIsLive=false;
    winner=symbol;
    if(winner==='x'){
    statusDiv.innerHTML=`${letter(winner)} has won!`}
    else {
        statusDiv.innerHTML=`<span>${letter(winner)} has won!</span>`
    }

}
const checkGameStatus=()=>{
  const one=cellDivs[0].classList[1];
  const two=cellDivs[1].classList[1];
  const three=cellDivs[2].classList[1];
  const four=cellDivs[3].classList[1];
  const five=cellDivs[4].classList[1];
  const six=cellDivs[5].classList[1];
  const seven=cellDivs[6].classList[1];
  const eight=cellDivs[7].classList[1];
  const nine=cellDivs[8].classList[1];
   
  //if there's a winner 
   if(one &&one === two && one ===three)  {
      gameWinner(one);
      cellDivs[0].classList.add('won');
      cellDivs[1].classList.add('won');
      cellDivs[2].classList.add('won');

   }
   else if(four&&four===five&&five===six){
       gameWinner(four);
       cellDivs[3].classList.add('won');
       cellDivs[4].classList.add('won');
       cellDivs[5].classList.add('won');
   }
   else if (seven&&seven===eight&&eight===nine){
       gameWinner(seven);
       cellDivs[6].classList.add('won');
       cellDivs[7].classList.add('won');
       cellDivs[8].classList.add('won');
   }
   else if(one&&one===four&&four===seven){
    gameWinner(one);
    cellDivs[0].classList.add('won');
    cellDivs[3].classList.add('won');
    cellDivs[6].classList.add('won');
   }
   else if(two&&two===five&&five===eight){
      gameWinner(two);
      cellDivs[1].classList.add('won');
      cellDivs[4].classList.add('won');
      cellDivs[7].classList.add('won');
   }
 
   else if (three&&three==six&&six===nine){
    gameWinner(three);
    cellDivs[2].classList.add('won');
    cellDivs[5].classList.add('won');
    cellDivs[8].classList.add('won');
   }
   else if (one&&one===five&&five===nine){
       gameWinner(one);
       cellDivs[0].classList.add('won');
       cellDivs[4].classList.add('won');
       cellDivs[8].classList.add('won');
   }
   else if(three&&three===five&&five===seven){
         gameWinner(three);
         cellDivs[2].classList.add('won');
         cellDivs[4].classList.add('won');
         cellDivs[6].classList.add('won');
   }
   else if (one&&two&&three&&four&&five&&six&&seven&&eight&&nine){
       
       gameIsLive=false;
       statusDiv.innerHTML=`Game is Tied`; 
   }
   else{
       xIsNext=!xIsNext;
       if(xIsNext===true){
        statusDiv.innerHTML=`${xSymbol}is next`;
       }
       else {
        statusDiv.innerHTML=`<span>${oSymbol}is next</span>`
       }
   }
};

//event Listeners
resetDiv.addEventListener('click',(e)=>{
     xIsNext=true;
     statusDiv.innerHTML=`${xSymbol}is next`;
     for(const cellDiv of cellDivs){
         cellDiv.classList.remove('x');
         cellDiv.classList.remove('o');
         cellDiv.classList.remove('won');
     }

     gameIsLive=true;
})

for(const cellDiv of cellDivs){
    cellDiv.addEventListener('click',(e)=>{
        const classList=e.target.classList;
        if(!gameIsLive||classList[1]==='x' || classList[1]==='o') return;
        if(xIsNext){
            
            classList.add('x');
            checkGameStatus();
            xISNext=false;
        }
        else{
            classList.add('o');
            checkGameStatus();
            xISNext=true;
        }
    })
}