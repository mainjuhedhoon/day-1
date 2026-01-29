// Array of objects
let slides = [
  { 
    image: "https://images.goway.com/production/hero/iStock-539167007.jpg?VersionId=V0d0ExSYFQapWixAIM4GDFYI7qFw4NPq",
    title: "First Slide",
    desc: "This is the first slide description",
    interval: 10000,
  },
  {
    image: "https://i.ytimg.com/vi/rfkrnkimQCM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDtMwsh2JfmDoiq_fNrNddI-E9LJw",
    title: "Second Slide",
    desc: "This is the second slide description",
    interval: 2000,
  },
  {
    image: "https://images.goway.com/production/featured_images/switzerland_train_alps_landwasser_viaduct_iStock-1815540289.jpg?VersionId=kk6Jwe5jdQSA1MyDniRkiPNC_KfOooQ9",
    title: "Third Slide",
    desc: "This is the third slide description",
    interval: 3000,
  },
];
 
// Select DOM elements
let indicators = document.getElementById("carouselIndicators");
let inner = document.getElementById("carouselInner");

// Loop using forEach
slides.forEach(function (slide, index) {
  // Indicators
  indicators.innerHTML += `
    <button 
      type="button" 
      data-bs-target="#carouselExampleDark" 
      data-bs-slide-to="${index}" 
      class="${index === 0 ? "active" : ""}">
    </button>
  `;

  // Slides
  inner.innerHTML += `
    <div class="carousel-item ${index === 0 ? "active" : ""}" data-bs-interval="${slide.interval}">
      <img src="${slide.image}" class="d-block w-100" alt="${slide.title}">
      <div class="carousel-caption d-none d-md-block">
        <h5 class="text-light">${slide.title}</h5>
        <p class="text-light">${slide.desc}</p>
      </div>
    </div>
  `;
});