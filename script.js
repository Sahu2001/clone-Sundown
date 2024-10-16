const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var elemc = document.querySelector("#elem-container")
var fixed = document.querySelector("#fixed-image")
elemc.addEventListener("mouseenter",function(){
    fixed.style.display = "block"
    // console.log(block)
    
})
elemc.addEventListener("mouseleave",function(){
    fixed.style.display = "none"
})

// var elem1 = document.querySelector("#elem1")
// elem1.addEventListener("mouseenter",function(){
//     var image = elem1.getAttribute("data-image")
//     // console.log(image)guiwaodhuiwaodhausiodhuawiodhuqwiodhuwieodhueiwofhesuifodhsufioaehw8fiopadshfjiuaoseh8fuaewophfuaeisohfueiwofhiuesaofhaeisuofheiuwofhesudiofhuaespfheiuafohdeuiafopheiufpaehwfiuopesahifopawhfiudeospfhjiksd;lfhjeiosaphfieoshfiuesaohfiuekfpdes;d'fkoespf;jdsaiorl;fjadisof;ejwifol;aejwsiflop;aewjifl;aewjfilkaepw;jfiaelwk;fjiaekwlsp;fjieasop;fjkadslf;cjadisopfuejwlf;jasekdlf;jaesikofpjaewiofl;jdsklfpjaewifo;jaewkfl;aejsifo;aewfnjshkedldjkslcnjdckdskvcdsjvnvnvnnvnvnvnvvnvnvvnnv
//     fixed.style.backgroundImage = `url(${image})`
// })

var elems = document.querySelectorAll(".elem")
// console.log(elems)
elems.forEach(function(e){
    // console.log("hey")
    e.addEventListener("mouseenter",function(){
        var image = e.getAttribute("data-image")
        // console.log(image)
        fixed.style.backgroundImage = `url(${image})`
    })

})

    
