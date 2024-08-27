
const library = [];


// To avoid gsap animation getting stuck on "Not Read"
count = 0;
statusVal = 0;

// Status button Animation
function statAni() {

    ani = gsap.to(".statInd", {
        x: "106%",
        backgroundColor: "#0AE448",
        duration: 1,
        delay: 0,
        ease: "expo.inOut"
    })
}


// This takes the input from the status button and shows the animation
const readBtn = document.querySelectorAll("#status");
readBtn.forEach((readBtn) => {

    readBtn.addEventListener('click', () => {

        if (readBtn.value == "Not Read") {
            count = 0;
            ani.reverse();
            statusVal = 0;
        }

        if (readBtn.value == "Read" && count == 0) {
            statAni();
            count = 1;
            statusVal = 1;
        }
    });

});


// Adding books to the library
const addBook = document.querySelector(".addBook");
const title = document.querySelector("#bookTitle");
const authorName = document.querySelector("#authorName");

addBook.addEventListener("click", (e) => {

    e.preventDefault();
    library.push(Book());
    refresh();
});



function Book() {

    let book = {};
    book.cardNo = library.length + 1;
    book.title = title.value;
    book.author = authorName.value;
    book.status = statusVal;
    book.imageUrl = "https://i.pinimg.com/736x/8f/74/6e/8f746e9dea75324611e63348163228db.jpg";
    statusVal = 0;
    return book;

}

const bookshelf = document.querySelector(".bookshelf");

function storeBook(tempBook) {

    const bookCard = document.createElement("div");
    const cardImg = document.createElement("div");
    const cardTitle = document.createElement("div");
    const authorNameNew = document.createElement("div");
    const bookImg = document.createElement("img");

    bookCard.className = "bookCard";
    cardImg.className = "cardImg";
    cardTitle.className = "cardTitle";
    authorNameNew.className = "authorName"

    cardTitle.textContent = tempBook.title;
    authorNameNew.textContent = tempBook.author;
    bookImg.src = tempBook.imageUrl;
    cardImg.appendChild(bookImg);

    bookCard.appendChild(cardImg);
    bookCard.appendChild(cardTitle);
    bookCard.appendChild(authorNameNew);
    bookshelf.appendChild(bookCard);
}


function refresh() {
    library.forEach((singleBook) => {
        console.log(singleBook);
        storeBook(singleBook);
    });
}
