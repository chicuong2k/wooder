//header
let positionProduct = document.querySelector('.products').offsetTop;
let scrollMenu = document.querySelector('header ');
let heightHeader = document.querySelector('header ').offsetHeight;
let menus = document.querySelectorAll('header .menu ul li a');


//menu
menus.forEach(function(element,index){
    element.addEventListener('click',function(e){
        let getId =element.getAttribute('href');
        let classId =getId.replace('#','')
        let section =document.querySelector('.' + classId);
        
        element.addEventListener('click',function(){
            window.scrollTo({
                top:  section.offsetTop - heightHeader,
                behavier: 'smooth',
                });
            });
        });
});
//menu full
let buttonMenu = document.querySelector('.right');
let menuFull =document.querySelector('.menu__full');
let closeMenu =document.querySelector('.menu__full .container__fluid .close');
let getMenuFull = document.querySelectorAll('.menu__full .container__fluid ul li a');


buttonMenu.addEventListener('click',function(){
    menuFull.style.transform = 'translateX(0%)' ;
});
closeMenu.addEventListener('click',function(){
    menuFull.style.transform = 'translateX(100%)' ;
});
getMenuFull.forEach(function(element,index){
    element.addEventListener('click',function(e){
        let getId =element.getAttribute('href');
        let classId =getId.replace('#','')
        let section =document.querySelector('.' + classId);
        
        element.addEventListener('click',function(){
            window.scrollTo({
                top:  section.offsetTop - heightHeader,
                behavier: 'smooth',
                });
                menuFull.style.transform = 'translateX(100%)' ;
            });
        });
});


window.addEventListener('scroll',function(){
    let heightHeader = document.querySelector('header ').offsetHeight;
    let posiProduct = window.pageYOffset;
    if(posiProduct > positionProduct + heightHeader)
    {scrollMenu.style.position = 'fixed';}
    else 
    {scrollMenu.style.position = 'absolute' ;}
})
//video
let playVideo = document.querySelectorAll('.play__button');
let popup__video = document.querySelector('.popup__video');
let close__video = document.querySelector('.close__video');
let iframe = document.querySelector('.popup__video iframe');

playVideo.forEach(function(button){
    button.addEventListener('click',function(){
        let video__id =button.getAttribute('data-video-id');

        iframe.setAttribute('src','https://www.youtube.com/embed/' + video__id) ;
        popup__video.style.display = 'flex';
    });
    close__video.addEventListener('click',function(){
        popup__video.style.display = 'none';
        iframe.removeAttribute('src');
    });
});
popup__video.addEventListener('click', function(e) {
    popup__video.style.display = 'none';
    iframe.removeAttribute('src');
}); 
//news
let tagText = document.querySelectorAll('.news__tags .tag');
let tagList= document.querySelectorAll('.news_list');
tagText.forEach(function(item,index){
    item.addEventListener('click',function(){
        let tagID = index + 1;
        tagText.forEach(function(tag){
            tag.classList.remove('active');
        })
        tagList.forEach(function(tags){
            tags.classList.remove('active');
        });
        item.classList.add('active');
        document.querySelector('.news_list-'+ tagID ).classList.add('active');
    });
});
//back to top
let backtotop = document.querySelector('.backtotop');
backtotop.addEventListener('click',function(){
window.scrollTo({
    top:0,
    behavior:'smooth'
});
});

//flickiy
jQuery(document).ready(function(){
    jQuery('.slider__item-wrap').flickity({
    // options
    cellAlign: 'left',
    contain: true ,
    wrapAround: true,
    prevNextButtons: false,
  })
  });
  var carousel = $('.slider__item-wrap');

// previous
$('.bt.__prev').on( 'click', function() {
  carousel.flickity('previous');
});

$('.bt.__next').on( 'click', function() {
    carousel.flickity('next');
  });