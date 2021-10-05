$(".startbtn").click(function(){
    $(".contentBox").toggleClass("show")
       $(".menu-icon").toggleClass("fa-bars fa-times");
})
function interaction(){
    let currentSection= $("section");
    // console.log(currentSection);
    currentSection.waypoint(function (direction) { 
        if (direction== "down") {
            let currentSectionId = $(this.element).attr('id');
            console.log($(this.element).attr('id'));
            setInteraction(currentSectionId);
        }
    },{upset:"28%"});
    currentSection.waypoint(function (direction) { 
        if (direction== "up") {
            let currentSectionId = $(this.element).attr('id');
            console.log($(this.element).attr('id'));
            setInteraction(currentSectionId);
        }
    },{offset:"1%"});
}
interaction();
// $("#home").waypoint({
//     handler:function(direction){
//         $(`.nav-link[href='#home']`).addClass("createline");
//         console.log("I am at home");
//     }
// })
function setInteraction(currentId){
    $(".nav-link").removeClass("createline");

    $(`.nav-link[href='#${currentId}']`).addClass("createline");
}