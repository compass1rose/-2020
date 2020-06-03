



function fib(n){
  let a=1;
  let b=1;
  for(let i=3; i<=n;i++){
    let c = a+b;
    a=b;
    b=c;
  }
  return b;
}

console.log(fib(4));













/*//generating a random number
const unk = [];
while (unk.length < 4) {
  const rand = Math.floor(Math.random() * 9) + 1;
  if (!unk.includes(rand)) {
    unk.push(rand);
  }
}
  

const numb = [];
var x = false;
console.log("enter the number")
var attempt =0;

  do{
// the user tries to guess the number
  let user = 'user';
  const readlineSync = require('readline-sync');
  user = readlineSync.question();
  const numb = user.split('');
 
//counting bulls and cows 
  let bulls = 0;
  let cows = 0;
  for( let i = 0; i < 4; i++ ){
    if( numb[i] == unk[i] ){
      bulls++;
    }
    continue;
  }
  for (let i = 0; i < 4; i++){
    for(let k = 0; k < 4; k++){
      if(unk[i] == numb[k]){
      cows++;
    }
    }
  }
  console.log('greeting')
  attempt++;
  console.log('attempt ' + attempt);
  cows -=bulls;
  console.log('greeting');
  console.log('bulls='+ bulls +'cows='+ cows);
   
//checking if the user was right

  if(bulls == 4 ){
    console.log('greeting' + unk.join(''))
    x = true;
    
  }
}
    while(x != true );

    




