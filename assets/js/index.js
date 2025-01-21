$('.clients-logo').owlCarousel({
    loop:true,
    margin:20,
    responsiveClass:true,
    dots: false,
    autoplay:true,
    responsive:{
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:7,
            nav:false,
            loop:false,
            
        }
    }
})


let containerTop = $('.container-top');
let heroImg = $('.hero-img');
heroImg = heroImg.find('img')


let bannerItems = [
    {
        bg: "linear-gradient(to right, #F0A6C7,#D46B9B )",
        img: "./assets/images/girl1.png",
    },
    {
        bg: "linear-gradient(to right, #5EB3F6,#1553B6 )",
        img: "./assets/images/boy.png",
    },
    {
        bg: "linear-gradient(to right, #BDA9CA,#A367C7 )",
        img: "./assets/images/girl2.png",
    },
];
 
// for (i ; i < bannerItems.length;i++){
//     setTimeout(() => {
       
//     },1000)
// }

let index = 0
const changeBannerItem = ()=>{
    console.log(index)
    containerTop.css({'background':bannerItems[index].bg})
    heroImg.attr({'src':bannerItems[index].img})
    index= index +1;

    if(index >= bannerItems.length){
        index = 0
    }
}

setInterval(changeBannerItem,5000)

// $('.freelancers-section-carousel').owlCarousel({
//     loop:true,
//     margin:20,
//     responsiveClass:true,
//     dots: false,
//     autoplay:true,
//     responsive:{
//         600:{
//             items:1,
//             nav:false,
//             loop:true
//         },
//         1000:{
//             items:3,
//             nav:false,
//             loop:false,
            
//         }
//     }
// })
$('.freelancers-section-carousel').owlCarousel({
    loop:true,
    margin:20,
    dots:false,
    responsiveClass:true,
    autoplay:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:3,
            nav:false,
            loop:false
        }
    }
})
$('.services-carousel').owlCarousel({
    loop:true,
    margin:20,
    dots:false,
    responsiveClass:true,
    autoplay:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:3,
            nav:false,
            loop:false
        }
    }
})
$('.guide-carousel').owlCarousel({
    loop:true,
    margin:20,
    dots:false,
    responsiveClass:true,
    autoplay:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:3,
            nav:false,
            loop:false
        }
    }
})