// Select all buttons and blog cards
const filterButtons = document.querySelectorAll('.filter-btn');
const blogCards = document.querySelectorAll('.blog-card');

// Add click event to each filter button
filterButtons.forEach(button => {
  button.addEventListener('click', () => {

    // Remove active class from all buttons
    filterButtons.forEach(btn => btn.classList.remove('active'));
    // Add active class to clicked button
    button.classList.add('active');

    const category = button.getAttribute('data-category');

    blogCards.forEach(card => {
      if (category === 'الكل' || card.getAttribute('data-category') === category) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});






  document.getElementById("openWhatsapp").addEventListener("click", function () {
    const phone = "212654078525"; // رقمك مع كود المغرب (212)
    const message = encodeURIComponent("مرحبًا! أريد التحدث معك 😊");
    const url = `https://wa.me/${phone}?text=${message}`;
    window.open(url, "_blank");
  });




























