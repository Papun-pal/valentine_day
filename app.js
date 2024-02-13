document.addEventListener("DOMContentLoaded", function() {
    // Get the audio element
    var audio = new Audio('song.mp3');

    // Get the elements with the specified classes
    var book = document.querySelector('.book');
    var book2 = document.querySelector('.book2');

    // Add click event listener to the book element
    book.addEventListener('click', function() {
        // Play the audio
        audio.play();
        console.log("play");
    });

    // Add click event listener to the con element
    book2.addEventListener('click', function() {
        // Stop the audio
        audio.pause();
        // Reset the audio time to start from the beginning
        audio.currentTime = 0;
        console.log(" not play");
    });
});
