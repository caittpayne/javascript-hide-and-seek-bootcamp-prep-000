function getFirstSelector(selector) {
  const firstSelector = document.querySelector(selector);

  return firstSelector
}

function nestedTarget() {
  const target = document.getElementById('nested');
  
  return target
}

function increaseRankBy(n) {
  const list = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < list.length; i++) {
   list[i].innerHTML = parseInt(list[i].innerHTML) + n; 
  }
}

function deepestChild() {
const child = document.getElementById('grand-node').children;

return child[0]
}