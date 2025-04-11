document.addEventListener("DOMContentLoaded", function () {
  new Swiper(".swiper", {
    slidesPerView: "auto",
    spaceBetween: 40,
    grabCursor: true,
    centeredSlides: false,
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const tabContents = [
    {
      chefName: "Phoenix Satcheup",
      category: "Pizza",
      location: "Jakarta, Indonesia",
      experience: "12 Years",
      restaurant: "Pearl Dolphin",
      restaurantImage: "./assets/images/thumbnails/resto-4.png",
      chefImage: "./assets/images/thumbnails/chef-1.png",
    },
    {
      chefName: "Chamber Botfrag",
      category: "Vegan",
      location: "Bandung, Indonesia",
      experience: "8 Years",
      restaurant: "Green Garden",
      restaurantImage: "./assets/images/thumbnails/resto-3.png",
      chefImage: "./assets/images/thumbnails/chef-2.webp",
    },
    {
      chefName: "Asep Vandal",
      category: "Roast Chicken",
      location: "Sunda, Indonesia",
      experience: "10 Years",
      restaurant: "Sundanese Delight",
      restaurantImage: "./assets/images/thumbnails/resto-2.png",
      chefImage: "./assets/images/thumbnails/chef-3.webp",
    },
    {
      chefName: "I Made Invoker",
      category: "Beef Steak",
      location: "Bali, Indonesia",
      experience: "15 Years",
      restaurant: "Bali Bistro",
      restaurantImage: "./assets/images/thumbnails/resto-1.png",
      chefImage: "./assets/images/thumbnails/chef-4.webp",
    },
  ];

  const tabs = document.querySelectorAll(".tab-item");

  function updateTabContent(index) {
    const selectedContent = tabContents[index];
    const chefImageElement = document.querySelector(".tab-content img");
    if (chefImageElement) chefImageElement.src = selectedContent.chefImage;

    const chefNameElement = document.querySelector(".tab-content h2");
    if (chefNameElement) chefNameElement.textContent = selectedContent.chefName;

    // const locationElement = document.querySelector(".tab-content .text-muted");
    // if (locationElement) locationElement.textContent = selectedContent.location;

    const experienceElement = document.querySelector(".experience-years");
    if (experienceElement)
      experienceElement.textContent = selectedContent.experience;

    const restaurantNameElement = document.querySelector(".resto-name");
    if (restaurantNameElement)
      restaurantNameElement.textContent = selectedContent.restaurant;

    const restaurantImageElement = document.querySelector(
      ".tab-content .h-[132px] img"
    );
    if (restaurantImageElement)
      restaurantImageElement.src = selectedContent.restaurantImage;
  }

  function setActiveTab(index) {
    tabs.forEach((tab) => {
      tab.classList.remove("bg-white");
      const profileDetailsLink = tab.querySelector("a");
      if (profileDetailsLink) {
        profileDetailsLink.classList.remove("flex");
        profileDetailsLink.classList.add("hidden");
      }
    });

    const activeTab = tabs[index];
    activeTab.classList.add("bg-white");
    const profileDetailsLink = activeTab.querySelector("a");
    if (profileDetailsLink) {
      profileDetailsLink.classList.remove("hidden");
      profileDetailsLink.classList.add("flex");
    }
  }

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      setActiveTab(index);
      updateTabContent(index);
    });
  });

  setActiveTab(0);
  updateTabContent(0);
});

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");

  // Fungsi untuk mengatur lebar dan tampilan card info
  function updateCards() {
    cards.forEach((card) => {
      const cardInfo = card.querySelector(".card-info");
      if (card.classList.contains("active")) {
        card.style.width = "400px";
        cardInfo.classList.remove("hidden");
        cardInfo.classList.add("flex");
      } else {
        card.style.width = "214px";
        cardInfo.classList.remove("flex");
        cardInfo.classList.add("hidden");
      }
    });
  }

  // Inisialisasi card pertama sebagai aktif
  cards[0].classList.add("active");
  updateCards();

  // Tambahkan event listener untuk hover
  cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      cards.forEach((c) => c.classList.remove("active"));
      card.classList.add("active");
      updateCards();
    });

    card.addEventListener("mouseleave", () => {
      cards.forEach((c) => c.classList.remove("active"));
      cards[0].classList.add("active"); // Kembalikan ke card pertama
      updateCards();
    });
  });
});
