function showCertificates() {
  const section = document.getElementById('certificates-section');
  section.classList.toggle('show');
}

function showResume() {
  window.open('Resume-Wesa.pdf', '_blank');
}

function showContact() {
  alert('Contact me at:\nPhone: +254707712193\nEmail: mwitiwesa4@gmail.com');
}

// Typing animation for tagline and about me (as before)
const taglineText =
  'Software Engineer  | Entrepreneur | Fisheries Specialist | Cyber security student';
let taglineIndex = 0;

function typeTagline() {
  if (taglineIndex < taglineText.length) {
    document.getElementById('tagline-text').innerHTML +=
      taglineText.charAt(taglineIndex);
    taglineIndex++;
    setTimeout(typeTagline, 50);
  } else {
    setTimeout(typeAboutMe, 500);
  }
}

const aboutMeText = 
  'I am a software engineer with a strong foundation in backend and web-development. With a passion for solving challenges and learning why and how they came to be and how to solve them.<br>I have acquired skills in different fields — software engineering, fisheries management, leadership, entrepreneurial — and currently learning cyber security as I sharpen my backend skills. My aim is to put my skills to use and that they may be of help and benefit to others and me.'; 
let aboutMeIndex = 0;

function typeAboutMe() {
  const aboutMeElement = document.getElementById('about-me-text');

  if (aboutMeText.substring(aboutMeIndex, aboutMeIndex + 4) === '<br>') { 
    aboutMeElement.innerHTML += '<br>'; 
    aboutMeIndex += 4; 
  } else if (aboutMeIndex < aboutMeText.length) {
    aboutMeElement.innerHTML += aboutMeText.charAt(aboutMeIndex);
    aboutMeIndex++;
  }

  if (aboutMeIndex < aboutMeText.length) {
    setTimeout(typeAboutMe, 40);
  }
}
window.onload = function () {
  typeTagline();
};
