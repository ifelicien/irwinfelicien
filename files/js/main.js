document.addEventListener('DOMContentLoaded', (event) => {
    const links = document.querySelectorAll('nav ul li a');
    const headers = document.querySelectorAll('section h1');

    links.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.animate([
                // keyframes
                { transform: 'scale(1)', color: '#000' },
                { transform: 'scale(1.2)', color: '#f00' },
                { transform: 'scale(1)', color: '#000' }
            ], {
                // timing options
                duration: 500,
                iterations: 1
            });
        });
    });

    headers.forEach(header => {
        header.animate([
            // keyframes
            { transform: 'translateY(-10px)', opacity: 0 },
            { transform: 'translateY(0)', opacity: 1 }
        ], {
            // timing options
            duration: 1000,
            iterations: 1
        });
    });
});

setInterval(function() {
    var contactLinks = document.querySelectorAll('#contact a');
    contactLinks.forEach(function(link) {
      link.classList.add('shake');
    });
    setTimeout(function() {
      contactLinks.forEach(function(link) {
        link.classList.remove('shake');
      });
    }, 5000); // The shaking animation lasts for 5 seconds
  }, 15000); // The shaking animation starts every 15 seconds

  function copyToClipboard(text) {
    var textarea = document.createElement("textarea");
    textarea.textContent = text;
    textarea.style.position = "fixed";  // Prevent scrolling to bottom of page in MS Edge.
    document.body.appendChild(textarea);
    textarea.select();
    try {
      return document.execCommand("copy");  // Security exception may be thrown by some browsers.
    } catch (ex) {
      console.warn("Copy to clipboard failed.", ex);
      return false;
    } finally {
      document.body.removeChild(textarea);
    }
  }