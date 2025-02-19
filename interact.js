document.getElementById("year").textContent = new Date().getFullYear();
var typed = new Typed('#element', {
    strings: ['Web Developer', 'Graphic Designer', 'Python Developer'],
    typeSpeed: 50,
    backSpeed: 30,       // Speed of deleting text
    loop: true,          // Makes the typing loop indefinitely
    showCursor: true,    // Ensures the cursor is visible
    cursorChar: '|',     // Character used as the cursor
});