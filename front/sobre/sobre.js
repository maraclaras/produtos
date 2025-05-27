document.addEventListener("DOMContentLoaded", function() {
    const textContainer = document.getElementById("description");

    textContainer.addEventListener("mouseover", function() {
        textContainer.style.color = "#5c7d75";
    });

    textContainer.addEventListener("mouseout", function() {
        textContainer.style.color = "black";
    });
});
