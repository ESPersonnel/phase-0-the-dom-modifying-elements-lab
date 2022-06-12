// Write your code here!

// 1) no longer has DOM node 'main#main'
// 2) has a 'newHeader' variable that points to node 'h1#victory'
// 3) has a 'newHeader' variable that points to node 'h1#victory'
// 4) has a 'newHeader' variable that points to node 'h1#victory' with "YOUR-NAME is the champion" inside

// code 1
var main = document.getElementById('main');
// Remove main from the DOM
main.parentNode.removeChild(main);
var newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.innerHTML = 'YOUR-NAME is the champion';
main.appendChild(newHeader);

