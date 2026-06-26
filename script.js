const academyItems = [
  "Credit repair education",
  "Credit file analysis",
  "Dispute strategy",
  "Rebuild planning",
  "Mortgage readiness",
  "Business credit education",
  "Credit repair business mentorship",
  "Client communication templates",
  "Course library access",
  "Community support"
];

const courseItems = [
  "Start Here",
  "5 Credit Factors",
  "Charge-Off Strategy",
  "Collection Kill",
  "Late Payment Cleanup",
  "Bureau Stall Responses",
  "Mortgage Readiness",
  "Business Credit Launch",
  "Credit Repair Business Setup",
  "Client Update Templates"
];

const audienceItems = [
  "People trying to repair their credit",
  "People preparing to buy a home",
  "People rebuilding after collections or charge-offs",
  "Beginners learning credit repair",
  "New credit repair business owners",
  "Mentees who want structure and accountability"
];

const renderCards = () => {
  const insideAcademy = document.querySelector("#inside-academy");
  const coursePreview = document.querySelector("#course-preview");
  const whoFor = document.querySelector("#who-for");

  insideAcademy.innerHTML = academyItems
    .map((item, index) => `
      <article class="info-card reveal">
        <div class="icon">${String(index + 1).padStart(2, "0")}</div>
        <h3>${item}</h3>
      </article>
    `)
    .join("");

  coursePreview.innerHTML = courseItems
    .map((item, index) => `
      <article class="course-card reveal">
        <span class="course-number">Course ${String(index + 1).padStart(2, "0")}</span>
        <h3>${item}</h3>
        <p>Preview lesson placeholder</p>
      </article>
    `)
    .join("");

  whoFor.innerHTML = audienceItems
    .map((item) => `
      <article class="audience-card reveal">
        <span>◆</span>
        <h3>${item}</h3>
      </article>
    `)
    .join("");
};

const revealOnScroll = () => {
  const elements = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );

  elements.forEach((element) => observer.observe(element));
};

document.addEventListener("DOMContentLoaded", () => {
  renderCards();
  revealOnScroll();
});
