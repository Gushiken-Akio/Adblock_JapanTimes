const elements = document.getElementsByClassName('tp-backdrop tp-active');
while (elements.length > 0) 
{
elements[0].remove();
}

const elements2 = document.getElementsByClassName('tp-modal');
while (elements2.length > 0) 
{
elements2[0].remove();
}

function KeyPress(e) {
  var evtobj = window.event? event : e
  if (evtobj.keyCode == 40) {
    window.scrollBy(0, 100) 
  }
  if (evtobj.keyCode == 38) {
    window.scrollBy(0, -100) 
  }
}

document.onkeydown = KeyPress;