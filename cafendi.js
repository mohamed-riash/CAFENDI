let mOpenCard = document.getElementById("mOpenCard");
let mOverlay = document.getElementById("mOverlay");
let mCloseBtn = document.getElementById("mCloseBtn");
let mShare = document.querySelector(".mShare");

mOpenCard.onclick = () => {
  mOverlay.classList.add("mActive");
};

mCloseBtn.onclick = () => {
  mOverlay.classList.remove("mActive");
};

// ======== SHARE FUNCTION =================================
mShare.onclick = () => {
  if (navigator.share) {
    navigator.share({
      title: "CAFENDI",
      text: "داه لينك منيو  CAFENDI  يا صاحبي ",
      url: window.location.href,
    });
  }
};

// ======== FAYEZ ======== //

//======== elements =========//
const box = document.querySelector(".fCards-section");
const dot = document.querySelector(".mNavBarSelected");
const tabs = document.querySelectorAll(".mNavBarChosed");
const fscrollArea = document.querySelector(".fscrollArea");

// active index
let active = 0;

//======== move circle to tab =========//
function moveCircleToTab(i) {
  const tab = tabs[i];
  const width = tab.offsetWidth;

  let totalOffset = 0;
  for (let j = 0; j < i; j++) {
    totalOffset += tabs[j].offsetWidth + 10;
  }

  dot.style.setProperty("--move", totalOffset + "px");
  dot.style.setProperty("--width", width + "px");

  const scrollLeft = totalOffset - fscrollArea.offsetWidth / 2 + width / 2;
  fscrollArea.scrollTo({
    left: scrollLeft,
    behavior: "smooth",
  });
}

//======== scroll to section =========//
function scrollToSection(i) {
  const sectionIds = [
    " hotDrinks",
    "icedCoffe",
    "milkShake",
    "freshSmoothie",
    "sodaMore",
    "waffle",
    "panCake",
    "dessert",
    "tacoSandwiches",
    "pasta",
    "chickenPizza",
    "beefPizza",
    "seafoodPizza",
    "beefBurger",
    "chickenBurger",
    "crepe",
    "appetizers",
  ];
  const section = document.getElementById(sectionIds[i]);
  if (section) {
    const offset = 50;
    box.scrollTo({ top: section.offsetTop - offset, behavior: "smooth" });
  }
}

//======== full action =========//
function goTo(i) {
  active = i;
  moveCircleToTab(i);
  scrollToSection(i);
}

//======== click on tabs =========//
tabs.forEach((tab, i) => {
  tab.addEventListener("click", () => {
    goTo(i);
  });
});

//======== scroll event =========//
box.addEventListener("scroll", () => {
  let y = box.scrollTop;

  const sectionIds = [
    " hotDrinks",
    "icedCoffe",
    "milkShake",
    "freshSmoothie",
    "sodaMore",
    "waffle",
    "panCake",
    "dessert",
    "tacoSandwiches",
    "pasta",
    "chickenPizza",
    "beefPizza",
    "seafoodPizza",
    "beefBurger",
    "chickenBurger",
    "crepe",
    "appetizers",
  ];

  for (let i = sectionIds.length - 1; i >= 0; i--) {
    const section = document.getElementById(sectionIds[i]);
    if (section && y >= section.offsetTop - 100) {
      if (active !== i) {
        active = i;
        moveCircleToTab(i);
      }
      break;
    }
  }
});

//======== next/prev buttons =========//
const btnPrev = document.querySelector(".prev");
const btnNext = document.querySelector(".next");

btnNext.addEventListener("click", () => {
  let nextActive = active + 1;
  if (nextActive >= tabs.length) nextActive = 0;
  goTo(nextActive);
});

btnPrev.addEventListener("click", () => {
  let prevActive = active - 1;
  if (prevActive < 0) prevActive = tabs.length - 1;
  goTo(prevActive);
});

//======== initialize =========//
moveCircleToTab(0);
