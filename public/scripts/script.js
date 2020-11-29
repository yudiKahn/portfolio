window.onload = function(){
    var target=document.getElementById('loader');
    var fade = setInterval(function () {
      if (!target.style.opacity) {
          target.style.opacity = 1;
      }
      if (target.style.opacity > 0) {
          target.style.opacity -= 0.1;
      } else {
          target.style.display='none';
          clearInterval(fade);
      }
   }, 150);
   setTimeout(() => {this.showOnScroll(); this.slide('.to-l'); this.slide('.to-r')}, 1000);
}
$(".carousel").on("touchstart", function(event){
  var xClick = event.originalEvent.touches[0].pageX;
  $(this).one("touchmove", function(event){
      var xMove = event.originalEvent.touches[0].pageX;
      if( Math.floor(xClick - xMove) > 5 ){
          $(this).carousel('next');
      }
      else if( Math.floor(xClick - xMove) < -5 ){
          $(this).carousel('prev');
      }
  });
  $(".carousel").on("touchend", function(){
          $(this).off("touchmove");
  });
});
$('.navbar-brand').click(()=>{
    setTimeout(() => {this.showOnScroll(); this.slide('.to-l'); this.slide('.to-r')}, 1000);
})
function elInView(el){
    if(typeof jQuery == "function" && el instanceof jQuery){
        el = el[0];
    }
    var rect = el.getBoundingClientRect();
    return(
        (rect.top <= 0 && rect.bottom >=0) || 
        (rect.bottom>=(window.innerHeight || document.documentElement.clientHeight)&&rect.top<=(window.innerHeight || document.documentElement.clientHeight)) ||
        (rect.top>=0 && rect.bottom<=(window.innerHeight || document.documentElement.clientHeight))
    )
}
let scroll = window.requestAnimationFrame || function(callback){
    window.setTimeout(callback, 1000/60)
};
function showOnScroll(){
    let elToShow = document.querySelectorAll('.show-on-scroll');  
    function loop(){
        elToShow.forEach(function(el){
            if(elInView(el)){
                el.classList.add('visible')
                el.classList.remove('unvisible')
            }else {
                el.classList.remove('visible')
                el.classList.add('unvisible')
            }
        });
        scroll(loop);
    }
    loop();
}
function slide(className){
    let elToSlide= document.querySelectorAll(className);
    let classToAdd=className=='.to-l'?'run-l':'run-r';
    function loop(){
        elToSlide.forEach(el=>{
            if(elInView(el)){
                el.classList.add(classToAdd)
            }else {
                el.classList.remove(classToAdd)
            }
        })
        scroll(loop);
    }
    loop();
}