(function() {
    "use strict";
    const text = document.getElementById("pop");
    const content = [
        "<span>Discover New Skills...</span><br>Discover new skills and technologies, and unlock your full potential. Our comprehensive learning platform offers a wide range of courses and hands-on projects that cover the latest skills and technologies in demand. From artificial intelligence and machine learning to data science and cybersecurity, we've got you covered.",
        "<span>Build your portfolio...</span><br>Build your portfolio with hands-on projects that demonstrate your skills and showcase your expertise. Our platform offers a variety of projects that simulate real-world scenarios, allowing you to apply your knowledge and gain practical experience.",
        "<span>Enhance your career Prospects...</span><br>Enhance your career prospects with our certificate programs, designed to help you stand out in a competitive job market. Our certificate programs are developed in collaboration with industry experts and cover the latest skills and technologies in demand."
    ];
    let index = 0;
    function changeText() {
        text.innerHTML = content[index];
        text.classList.add("text-animation");
        index = (index + 1) % content.length;
    }
    let interval = setInterval(changeText, 5000);
    text.addEventListener("mouseover", () => {
       
        text.classList.remove("text-animation");
        clearInterval(interval);
    });
    text.addEventListener("mouseout", () => {
        
        interval = setInterval(changeText, 5000);
        
    });
})();