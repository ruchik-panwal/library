const library = [{
    cardNo: 1,
    author: "",
    title: "",
    status: ""
}];



count = 1;

// Status button Animation
function statAni() {

    count = 1;
    ani = gsap.to(".statInd", {
        x: "106%",
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
        if (readBtn.value == "Not Read" && count == 1) {
            statAni();
        }
    })

});



