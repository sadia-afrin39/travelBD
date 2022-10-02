const bookingButtons = document.querySelectorAll('.booking-header button');
//console.log(bookingButtons);
const bookingDivs = document.querySelectorAll('.booking-body > div');

function toggleClasses(allDivs, toggleClass, areBookingButtons) {
  allDivs.forEach(eachDiv => {
    (areBookingButtons) ? eachDiv.classList.remove(toggleClass) : eachDiv.classList.add(toggleClass);
  });
}

bookingButtons.forEach(bookingButton => {
  bookingButton.addEventListener('click', () => {
    toggleClasses(bookingButtons, 'active', true);
    toggleClasses(bookingDivs, 'hide', false);
    bookingButton.classList.add('active');
    document.querySelector(`${bookingButton.getAttribute('data-target')}`).classList.remove('hide');
  }); 
});

const menuBar = document.querySelector('.menu-bar');
const navList = document.querySelector('.nav-list');
let List = document.querySelectorAll('.nav-list a');
//console.log(List);
menuBar.addEventListener('click', () => {
  navList.classList.toggle('active');
});

List.forEach(anc => {
	anc.addEventListener('click', () => {
	  navList.classList.toggle('active');
	});
});
