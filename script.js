
const btn = document.getElementById('toggle');

btn.addEventListener('click', () => {
  document.body.classList.toggle('light');
});

// typing animation
const text = "Hi, I'm Maeva Tcheuffa";
let i = 0;
function type(){
  if(i < text.length){
    document.querySelector(".typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(type, 100);
  }
}
type();
