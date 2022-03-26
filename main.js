$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:1
        }
    }
})


let counter = 0

function addcounter(){
    counter++


    if( counter == 99399 )
    {
        clearInterval(x)
    }
    document.getElementById("count").innerHTML = counter


}

let x = setInterval ( addcounter , 1)


addcounter()





let counter0 = 0

function addcounter0(){
    counter0++


    if( counter0 == 99 )
    {
        clearInterval(y)
    }
    document.getElementById("count-").innerHTML = counter0


}

let y = setInterval ( addcounter0 , 10)


addcounter0()



let counter1 = 0

function addcounter1(){
    counter1++


    if( counter1 == 124 )
    {
        clearInterval(o)
    }
    document.getElementById("count1").innerHTML = counter1


}

let o = setInterval ( addcounter1 , 10)


addcounter1()