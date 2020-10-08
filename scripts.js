let i = 0;
let txt = 'I am also a Gym Owner,' + ' Personal Trainer,' + ' Father,' + ' and Husband';
let speed = 50;


function typeWriter() {

  if (i < txt.length) {
    document.getElementById("type").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

