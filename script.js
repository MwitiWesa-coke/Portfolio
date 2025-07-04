function showCertificates() {
    const section = document.getElementById('certificates-section');
    section.classList.toggle('show');
}

function showResume() {
    window.open('Wesa_Mwiti_Resume.pdf', '_blank');
}

function showContact() {
    alert('Contact me at:\nPhone: +254707712193\nEmail: mwitiwesa4@gmail.com');
}

// Typing animation for tagline and about me (as before)
const taglineText = "Software Engineer | Entrepreneur | Fisheries Specialist ";
let taglineIndex = 0;

function typeTagline() {
    if (taglineIndex < taglineText.length) {
        document.getElementById("tagline-text").innerHTML += taglineText.charAt(taglineIndex);
        taglineIndex++;
        setTimeout(typeTagline, 50);
    } else {
        setTimeout(typeAboutMe, 500);
    }
}

const aboutMeText = "I am a visionary Software Engineer, Entrepreneur, and Fisheries Specialist dedicated to harnessing technology and innovation as catalysts for positive change. My passion lies at the intersection of community empowerment, sustainability, and practical enterprise. I have led impactful projects such as AI-driven offline assistants and femicide prevention platforms, demonstrating my drive to solve real-world challenges. In addition to software, I am deeply engaged in entrepreneurial ventures including aquarium sales, fish and fish product distribution, and fast food enterprises. As the founder of SEAW Industries and Blue Touch, I aim to transform the fisheries value chain through innovation and quality-driven solutions. A passionate leader both on and off the field, I bring the same grit and strategy from my love of chess and rugby into every venture I pursue. My mission is to create scalable, sustainable, and socially impactful businesses that uplift communities and inspire future leaders.";
let aboutMeIndex = 0;

function typeAboutMe() {
    if (aboutMeIndex < aboutMeText.length) {
        document.getElementById("about-me-text").innerHTML += aboutMeText.charAt(aboutMeIndex);
        aboutMeIndex++;
        setTimeout(typeAboutMe, 40);
    }
}

window.onload = function() {
    typeTagline();
};