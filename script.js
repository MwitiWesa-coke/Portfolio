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
  'Software Engineer with a strong foundation in backend development and cybersecurity, blending technical expertise with a background in Fisheries and Aquatic Science. Experienced in building impactful APIs, AI-driven tools, and business solutions that support startups and community growth. Founder of SEAW Industries and Blue Touch, focused on applying technology to solve real-world sustainability challenges.';
let aboutMeIndex = 0;

function typeAboutMe() {
  if (aboutMeIndex < aboutMeText.length) {
    document.getElementById('about-me-text').innerHTML +=
      aboutMeText.charAt(aboutMeIndex);
    aboutMeIndex++;
    setTimeout(typeAboutMe, 40);
  }
}

window.onload = function () {
  typeTagline();
};
