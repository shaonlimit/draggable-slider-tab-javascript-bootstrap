const tabBox = document.querySelector('.tab-box');

tabBox.addEventListener('mousemove',function(e){
    tabBox.addEventListener('mousedown',function(){
        tabBox.scrollLeft -= e.movementX;
    })
})