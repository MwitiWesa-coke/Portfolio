function showCertificates() {
  const section = document.getElementById('certificates-section');
  section.classList.toggle('show');
}

function showResume() {
  window.open('ResumeWesa.pdf', '_blank');
}

function showContact() {
  alert('Contact me at:\nPhone: +254707712193\nEmail: mwitiwesa4@gmail.com');
}

// Typing animation for tagline and about me (as before)
const taglineText =
  'Cyber Security(defence) | Software Engineer(Backend) | Entrepreneur | Fisheries Specialist';
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
  'Backend Software Engineer passionate about problem-solving and secure, resilient systems. With skills in web/APIs development, leadership, and entrepreneurship—and currently building cybersecurity defense expertise (secure coding, threat mitigation, network basics)—I aim to deliver value through protected tech solutions that help others and drive impact.'; 
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

function openModal(imgSrc, captionText) {
  const modal = document.getElementById('cert-modal');
  const modalImg = document.getElementById('modal-img');
  const caption = document.getElementById('modal-caption');

  modal.style.display = 'flex';
  modalImg.src = imgSrc;
  modalImg.onload = () => {
    caption.innerHTML = captionText
  }
  caption.innerHTML = captionText;

}

function closeModal() {
  document.getElementById('cert-modal').style.display = 'none';
}

//close modal if clicking outside image
window.onclick = function(event) {
  const modal = this.document.getElementById('cert-modal');
  if (event.target == modal) {
    closeModal();
  }
}