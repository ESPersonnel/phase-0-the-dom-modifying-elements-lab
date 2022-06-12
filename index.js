// Write your code here!

var main = document.getElementById('main');

main.parentNode.removeChild(main);

var newHeader = document.createElement('h1');

newHeader.id = 'victory';

newHeader.innerHTML = 'YOUR-NAME is the champion';

main.appendChild(newHeader);

