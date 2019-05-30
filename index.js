// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Iterators</h1>`;

function makeSquare(num) {
console.log('Square of '+num+' elements' );
  let sign = '#';
  let signes = '';
  for (let i=0; i<num;i++) {
    for (let j=0; j<num;j++) {    
      signes+=sign;
    }  
    console.log(signes);
    signes='';
  }
};

function makeTriangle(num) {
  console.log('Triangle of '+num+' elements' );
  let char='%';
  for (let i = 0; i < num; i++) {
    console.log(char);
    char+='%';
  }
}
makeSquare(5);
makeTriangle(6);