// Source file for the javasript of the counter3 html page
document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('button').onclick = count;
})

let counter = 0;

function count() {
  counter++;
  document.querySelector('#counter').innerHTML = counter;

  if (counter % 5 === 0){
    alert(`COunter is at ${counter}!`);
  }
}
