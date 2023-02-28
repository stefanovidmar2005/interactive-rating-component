"use strict";

// APP SELECTIONS
const ratingContainer = document.querySelector(".ratings");
const ratingButtons = document.querySelectorAll(".ratings__btn");

const ratingSumbit = document.querySelector(".submit__btn");
const ratingContent = document.querySelector(".wrapper__content");
const thankYouContent = document.querySelector(".thank-you-content");
const labelRating = document.querySelector(".selection__rating");

// Event Delegation
ratingContainer.addEventListener("click", (e) => {
  e.preventDefault();
  if (!e.target.classList.contains("ratings__btn")) return;
  const target = e.target;
  ratingButtons.forEach((btn) => {
    btn.classList.remove("active");
    target.classList.add("active");
  });
});
// Sumbit Btn
ratingSumbit.addEventListener("click", (e) => {
  e.preventDefault();
  ratingButtons.forEach((btn) => {
    // Guard Clause incase the user has not selected a rating
    if (!btn.classList.contains("active")) return;

    const rating = btn.dataset.rating;
    ratingContent.classList.add("hidden");
    thankYouContent.classList.remove("hidden");

    // Dynamically setting the out of number incase the ratings increase
    labelRating.textContent = `You selected ${rating} out of ${ratingButtons.length}`;
  });
});
