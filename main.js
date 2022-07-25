function asideClose() {
    nav1 = document.getElementById('nav1')
    nav2 = document.getElementById('nav2')
    header = document.querySelector('header')
    btn = document.getElementById('navBtn')
    header.style.opacity = '0.95'
    if (nav1.style.display != 'none'){
        nav1.style.display = 'none';
        nav2.style.display = 'flex';
        header.style.width = '45px'
        header.style.paddingLeft = '6px'
    }else{
        nav1.style.display = 'flex'
        nav2.style.display = 'none'
        header.style.width = '50%'
        header.style.paddingLeft = '2%'
    }
}
window.onload=function(){
    header = document.querySelector('header')
    if(window.innerWidth<650){
        document.getElementById('navBtn').click();
    }
  };
label = document.getElementById('add_file')
element = document.getElementById('fileName')
removeFile = document.getElementById('removeFile')
document.getElementById('file').onchange = function () {
element.innerHTML += this.files.item(0).name
label.style.display = 'none'
removeFile.style.display = 'block'
console.log(this.value)
};
function clearFile(){
    input = document.getElementById('file')
    input.value = ''
    removeFile.style.display = 'none'
    label.style.display = 'block'
    element.innerHTML = "File Selected:"
}
