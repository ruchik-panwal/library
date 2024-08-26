const library = [{
    cardNo: 1,
    author: "",
    title: "",
    status: ""
}];





// Status button Animation
function statAni() {

    ani = gsap.to(".statInd", {
        x: 171,
        duration: 1,
        delay: 0,
        ease: "expo.inOut"
    })
}


// This takes the input from the status button and shows the animation
const readBtn = document.querySelectorAll("#status");
readBtn.forEach((readBtn) => {

    readBtn.addEventListener('click', () => {
        if (readBtn.value == "Read")
            ani.reverse();
        else
            statAni();
    })

});



