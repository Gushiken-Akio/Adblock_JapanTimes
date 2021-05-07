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

document.head.innerHTML = document.head.innerHTML + '<style type="text/css">.tp-modal-open {overflow: scroll !important;}</style>'