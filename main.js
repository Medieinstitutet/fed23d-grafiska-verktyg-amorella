/* header + menu + nav */
const hamMenu = document.querySelector(".hamMenu");
const offScreenMenu = document.querySelector(".offScreenMenu");
hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});

/* menu animation */
document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
  // gsap code here!

  ScrollTrigger.create({
    trigger: document.querySelector("#homeSection"),
    start: "top 40%",
    end: "bottom 40%",
    toggleClass: { targets: ".navHome", className: "selected" },
  });

  ScrollTrigger.create({
    trigger: document.querySelector("#aboutSection"),
    start: "top 40%",
    end: "bottom 40%",
    toggleClass: { targets: ".navAbout", className: "selected" },
  });

  ScrollTrigger.create({
    trigger: document.querySelector("#flavourSection"),
    start: "top 40%",
    end: "bottom 40%",
    toggleClass: { targets: ".navFlavours", className: "selected" },
  });

  ScrollTrigger.create({
    trigger: document.querySelector("#reviewContainer"),
    start: "top 40%",
    end: "bottom 40%",
    toggleClass: { targets: ".navContact", className: "selected" },
  });
});

/* Footer - input */
const input = document.getElementById("footerSubscriptionInput");
const subscribeBtn = document.getElementById("footerSubscriptionBtn");

input.addEventListener("input", () => {
  if (!input.value || input.value == "Try again...") {
    return;
  } else {
    subscribeBtn.removeAttribute("disabled");
  }
});

subscribeBtn.addEventListener("click", () => {
  if (!input.value || input.value == "Try again...") {
    subscribeBtn.setAttribute("disabled", "disabled");
    input.value = "Try again...";
  } else {
    input.value = "";
    subscribeBtn.setAttribute("disabled", "disabled");
  }
});

/* Cookie Pop-Ups */
function cookieVersion1() {
  const body = document.querySelector("body");
  const cookieDialog = document.createElement("dialog");
  const cookieHeader = document.createElement("div");
  const cookieBody = document.createElement("div");
  const cookieFooter = document.createElement("div");
  cookieDialog.setAttribute("id", "cookieDialog");
  cookieDialog.classList.add("cookieDialog");
  cookieHeader.classList.add("cookieHeader");
  cookieBody.classList.add("cookieBody");
  cookieFooter.classList.add("cookieFooter");

  const cookieHeaderHeading = document.createElement("p");
  cookieHeaderHeading.textContent = "amorella.com";
  const cookieHeaderCloseBtn = document.createElement("button");
  cookieHeaderCloseBtn.classList.add("cookieHeaderCloseBtn");
  cookieHeaderCloseBtn.innerHTML = `<svg width="28" height="28" viewBox="0 0 58 55" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M40.0002 27.5L56.489 12.3265C58.5124 10.4645 58.5124 7.44555 56.489 5.58203L52.8245 2.2098C50.8011 0.347792 47.5205 0.347792 45.4954 2.2098L29.0066 17.3833L12.5178 2.2098C10.4944 0.347792 7.21375 0.347792 5.18869 2.2098L1.52415 5.58203C-0.49926 7.44403 -0.49926 10.463 1.52415 12.3265L18.013 27.5L1.52415 42.6735C-0.49926 44.5355 -0.49926 47.5545 1.52415 49.418L5.18869 52.7902C7.2121 54.6522 10.4944 54.6522 12.5178 52.7902L29.0066 37.6167L45.4954 52.7902C47.5188 54.6522 50.8011 54.6522 52.8245 52.7902L56.489 49.418C58.5124 47.556 58.5124 44.5371 56.489 42.6735L40.0002 27.5Z" fill="white"/>
  </svg>`;

  const cookieBodyHeading = document.createElement("p");
  const cookieBodyContent = document.createElement("p");
  cookieBodyContent.setAttribute("id", "cookieBodyContent");
  cookieBodyHeading.textContent =
    "We believe your data is your property and support your right to privacy and transparency.";
  cookieBodyContent.innerHTML = `Select a Data Access Level to choose how we use and share your data. <br><br> 
  Highest level of privacy. Data accessed for necessary basic operations only. <br>
  Data shared with 3rd parties to ensure the site is secure and works on your device.`;
  cookieBodyHeading.classList.add("textWeightBold");

  const cookieBodyBtnContainer = document.createElement("div");
  cookieBodyBtnContainer.classList.add("cookieBodyBtnContainer");
  const cookieBodyRejectAllBtn = document.createElement("button");
  const cookieBodyAcceptSomeBtn = document.createElement("button");
  const cookieBodyAcceptAllBtn = document.createElement("button");
  cookieBodyRejectAllBtn.textContent = "Reject All";
  cookieBodyAcceptSomeBtn.textContent = "Accept Some";
  cookieBodyAcceptAllBtn.textContent = "Accept All";
  cookieBodyRejectAllBtn.classList.add("cookieBodyRejectAllBtn");

  const cookieFooterCustomize = document.createElement("a");
  const cookieFooterPrivacyPolicy = document.createElement("a");
  cookieFooterCustomize.setAttribute(
    "href",
    "https://www.youtube.com/watch?v=-WWTQi8q-zo&ab_channel=NayyarShaikh",
  );
  cookieFooterPrivacyPolicy.setAttribute(
    "href",
    "https://www.youtube.com/watch?v=PMauhUveLZU&ab_channel=ElegantThemes",
  );
  cookieFooterCustomize.textContent = "Customize";
  cookieFooterPrivacyPolicy.textContent = "Privacy Policy";

  const allCookieBtns = [
    cookieHeaderCloseBtn,
    cookieBodyRejectAllBtn,
    cookieBodyAcceptSomeBtn,
    cookieBodyAcceptAllBtn,
  ];
  allCookieBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      localStorage.setItem("cookieChoice", "made");
      cookieDialog.remove();
    });
  });

  cookieHeader.append(cookieHeaderHeading, cookieHeaderCloseBtn);
  cookieBodyBtnContainer.append(
    cookieBodyRejectAllBtn,
    cookieBodyAcceptSomeBtn,
    cookieBodyAcceptAllBtn,
  );
  cookieBody.append(
    cookieBodyHeading,
    cookieBodyContent,
    cookieBodyBtnContainer,
  );
  cookieFooter.append(cookieFooterCustomize, cookieFooterPrivacyPolicy);
  cookieDialog.append(cookieHeader, cookieBody, cookieFooter);
  body.append(cookieDialog);
}
function cookieVersion2() {
  const cookieBodyContent = document.getElementById("cookieBodyContent");
  cookieBodyContent.innerHTML = `Select a Data Access Level to choose how we use and share your data. <br><br> 
  Highest level of privacy. Data accessed for necessary basic operations only.
  Data shared with 3rd parties to ensure the site is secure and works on your device.`;
}
// Prevents reload of html upon refresh if cookie choice is made.
function cookieChoiceMadeAlready() {
  if (localStorage.getItem("cookieChoice")) {
    return true;
  }
  return false;
}

/* Change HTML layout depending on screensize */
/* Initial loading check. */
whatSizeIsWindow();

/* Whenever the user changes the window. */
window.onresize = function () {
  whatSizeIsWindow();
};

/* Check windowsize, depending on size call on different HTML generator */
function whatSizeIsWindow() {
  // Removes exsisting, open dialogs if there are any.
  const cookieDialog = document.getElementById("cookieDialog");
  if (cookieDialog) {
    cookieDialog.remove();
  }
  // Loads different html depending on screensize and if cookie popup has been dismissed before.
  const width = window.innerWidth;
  if (width > 1024) {
    htmlVersionThree();
    if (!cookieChoiceMadeAlready()) {
      cookieVersion1();
      cookieVersion2();
    }
    return;
  } else if (width > 640) {
    htmlVersionTwo();
    if (!cookieChoiceMadeAlready()) {
      cookieVersion1();
    }
    return;
  } else {
    htmlVersionOne();
    if (!cookieChoiceMadeAlready()) {
      cookieVersion1();
    }
    return;
  }
}

/* HTML versions for different layouts */
function htmlVersionOne() {
  const homeSection = document.getElementById("homeSection");
  const aboutSection = document.getElementById("aboutSection");
  const flavourSection = document.getElementById("flavourSection");

  homeSection.innerHTML = `
    <img
      class="homeStarBg"
      src="assets/icons/bubblegum-star.svg"
      alt="yellow star for highlight"
    />
    <h4 class="homeHeader">Bubblegum bliss</h4>
    <article class="newIcecreamArticle">
      <div class="newHeaderWrapper">
        <h3 class="newIcecreamArticleHeader">New!</h3>
      </div>
      <img
        class="newIceCreamImg"
        src="/assets/images/ice-creams/bubblegum_mobile.webp"
        alt="pink bubblegum flavour ice cream"
        width="200"
        height="220"
      />
      <p class="newIcecreamArticleTxt textWeightBold">
        Dive into a swirl of joy with Amorella's newest delight: Bubblegum Bliss!
      </p>
      <button class="newIcecreamBtn">View this flavour</button>
    </article>
    <img
      class="whiteBackground"
      src="assets/images/white-background.webp"
      alt="white swosh"
    />
    <img
      class="chewingGum1"
      src="assets/icons/chewing-gum.svg"
      alt="chewing gum bubble"
    />
    <img
      class="chewingGum2"
      src="assets/icons/chewing-gum.svg"
      alt="chewing gum bubble"
    />
    <img
      class="chewingGum3"
      src="assets/icons/chewing-gum.svg"
      alt="chewing gum bubble"
    />
    <img
      class="chewingGum4"
      src="assets/icons/chewing-gum.svg"
      alt="chewing gum bubble"
    />
  `;
  aboutSection.innerHTML = `
    <div class="topSplats">
    <svg
      width="98"
      height="38"
      viewBox="0 0 98 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="topSplat1"
    >
      <path
        d="M49 38C76.062 38 98 29.4934 98 19C98 8.50659 76.062 0 49 0C21.938 0 0 8.50659 0 19C0 29.4934 21.938 38 49 38Z"
        fill="#EB5B98"
      />
    </svg>
    <svg
      width="633"
      height="453"
      viewBox="0 0 633 453"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="topSplat2"
    >
      <path
        d="M256.06 42.5541C276.804 -13.5789 356.196 -13.5789 376.94 42.554L379.356 49.0918C390.488 79.2168 424.119 94.406 454.08 82.841L533.984 51.9986C574.821 36.2357 607.61 88.1105 576.158 118.556C552.226 141.721 565.39 182.37 598.384 186.926C644.365 193.275 644.365 259.725 598.384 266.074C565.39 270.63 552.226 311.279 576.158 334.444C607.61 364.89 574.821 416.764 533.984 401.001L454.08 370.159C424.119 358.594 390.488 373.783 379.356 403.908L376.94 410.446C356.196 466.579 276.804 466.579 256.06 410.446L253.644 403.908C242.512 373.783 208.881 358.594 178.92 370.159L99.0159 401.001C58.1785 416.764 25.3897 364.89 56.8419 334.444C80.7739 311.279 67.6097 270.63 34.6155 266.074C-11.365 259.725 -11.365 193.275 34.6155 186.926C67.6097 182.37 80.7739 141.721 56.8419 118.556C25.3897 88.1105 58.1785 36.2357 99.0159 51.9986L178.92 82.841C208.881 94.406 242.512 79.2168 253.644 49.0918L256.06 42.5541Z"
        fill="#EB5B98"
      />
    </svg>
    <p>Join us on a journey of indulgence and happiness, one scoop at a time!</p>
    <svg
      width="65"
      height="45"
      viewBox="0 0 65 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="topSplat3"
    >
      <path
        d="M32.5 45C50.4493 45 65 34.9264 65 22.5C65 10.0736 50.4493 0 32.5 0C14.5507 0 0 10.0736 0 22.5C0 34.9264 14.5507 45 32.5 45Z"
        fill="#EB5B98"
      />
    </svg>
  </div>
  <div class="aboutImgContainer">
    <img src="assets/images/ice-creams/pink.webp" alt="pink softserve icecream" />
  </div>
  <div class="bottomSplat">
    <svg
      width="633"
      height="453"
      viewBox="0 0 633 453"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M256.06 42.5541C276.804 -13.5789 356.196 -13.5789 376.94 42.554L379.356 49.0918C390.488 79.2168 424.119 94.406 454.08 82.841L533.984 51.9986C574.821 36.2357 607.61 88.1105 576.158 118.556C552.226 141.721 565.39 182.37 598.384 186.926C644.365 193.275 644.365 259.725 598.384 266.074C565.39 270.63 552.226 311.279 576.158 334.444C607.61 364.89 574.821 416.764 533.984 401.001L454.08 370.159C424.119 358.594 390.488 373.783 379.356 403.908L376.94 410.446C356.196 466.579 276.804 466.579 256.06 410.446L253.644 403.908C242.512 373.783 208.881 358.594 178.92 370.159L99.0159 401.001C58.1785 416.764 25.3897 364.89 56.8419 334.444C80.7739 311.279 67.6097 270.63 34.6155 266.074C-11.365 259.725 -11.365 193.275 34.6155 186.926C67.6097 182.37 80.7739 141.721 56.8419 118.556C25.3897 88.1105 58.1785 36.2357 99.0159 51.9986L178.92 82.841C208.881 94.406 242.512 79.2168 253.644 49.0918L256.06 42.5541Z"
        fill="#EB5B98"
      />
    </svg>
    <article>
      <h5>About</h5>
      <p>
        Welcome to Scoops & Smiles, where every lick is a dance of delight and
        every scoop a celebration of sweetness! At our whimsical ice cream
        emporium, we craft frozen fantasies that tickle your taste buds and warm
        your heart. From classic cones to avant-garde sundaes, we blend premium
        ingredients with a sprinkle of magic to create flavors that ignite joy in
        every bite.
      </p>
    </article>
  </div>
  `;
  flavourSection.innerHTML = `
  <h5 class="flavourHeading">Some flavours you might like!</h5>
  <article class="pistachioArticle">
    <img
      class="pistachioImg"
      src="assets/icons/pistachio2.svg"
      alt="An animated image of a pistachio"
      width="75"
      height="91"
    />
    <h5 class="pistachioHeader">Pistachio gelatio</h5>
    <figure class="pistachioImgContainer">
      <img
        class="pistachioIcecreamImg"
        src="assets/images/ice-creams/pistage_small.webp"
        alt="green pistachio flavour ice cream"
        width="250"
        height="330"
      />
    </figure>
    <p class="pistachioArticleTxt">
      Each scoop whispers tales of creamy bliss and nutty perfection!
    </p>
  </article>

  <article class="blueberryArticle">
    <img
      class="blueberryImg"
      src="assets/icons/blueberry.svg"
      alt="An animated image of a blueberry"
      width="89"
      height="109"
    />
    <h5 class="blueberryHeader">Blueberry dream</h5>
    <figure class="blueberryImgContainer">
      <img
        class="blueberryIcecreamImg"
        src="assets/images/ice-creams/blueberry_small.webp"
        alt="blueberry flavour ice cream"
        width="250"
        height="330"
      />
    </figure>
    <p class="blueberryArticleTxt">
      Luscious essence of berries hugged by velvety dairy goodness!
    </p>
  </article>
  `;
}
function htmlVersionTwo() {
  const homeSection = document.getElementById("homeSection");
  const aboutSection = document.getElementById("aboutSection");
  const flavourSection = document.getElementById("flavourSection");

  homeSection.innerHTML = `
    <article class="homeHeadline">
      <h3>
        Join us on a journey of indulgence and happiness, one scoop at a time!
      </h3>
      <img
          class="chewingGum1"
          src="assets/icons/chewing-gum.svg"
          alt="chewing gum bubble"
      />
      <img
          class="chewingGum2"
          src="assets/icons/chewing-gum.svg"
          alt="chewing gum bubble"
      />
      <img
          class="chewingGum3"
          src="assets/icons/chewing-gum.svg"
          alt="chewing gum bubble"
      />
      <img
          class="chewingGum4"
          src="assets/icons/chewing-gum.svg"
          alt="chewing gum bubble"
      />
      <img
          class="chewingGum5"
          src="assets/icons/chewing-gum.svg"
          alt="chewing gum bubble"
      />
      <img
          class="chewingGum6"
          src="assets/icons/chewing-gum.svg"
          alt="chewing gum bubble"
      />
      <img
          class="chewingGum7"
          src="assets/icons/chewing-gum.svg"
          alt="chewing gum bubble"
      />
    </article>

    <article class="newIcecreamArticle">
      <div class="newHeaderWrapper">
        <h3 class="newIcecreamArticleHeader">New!</h3>
        <h4 class="homeHeader">Bubblegum bliss</h4>
      </div>
      <button class="newIcecreamBtn">View this flavour</button>
      <img 
          class="homeStarBg" 
          src="assets/icons/bubblegum-star.svg" 
          alt="yellow star for highlight" 
      />
      <img
          class="chewingGum8"
          src="assets/icons/chewing-gum.svg"
          alt="chewing gum bubble"
      />
      <img
          class="chewingGum9"
          src="assets/icons/chewing-gum.svg"
          alt="chewing gum bubble"
      />
      <img
          class="chewingGum10"
          src="assets/icons/chewing-gum.svg"
          alt="chewing gum bubble"
      />
      <img
          class="chewingGum11"
          src="assets/icons/chewing-gum.svg"
          alt="chewing gum bubble"
      />
      <img
          class="chewingGum12"
          src="assets/icons/chewing-gum.svg"
          alt="chewing gum bubble"
      />
    </article>
  `;

  aboutSection.innerHTML = `
    <div class="aboutImgContainer">
      <img src="assets/images/ice-creams/pink.webp" alt="pink softserve icecream" />
    </div>
    <div class="aboutSplats">
      <article>
        <h3>About</h3>
        <p>
          Welcome to Scoops & Smiles, where every lick is a dance of delight and
          every scoop a celebration of sweetness! At our whimsical ice cream
          emporium, we craft frozen fantasies that tickle your taste buds and warm
          your heart. From classic cones to avant-garde sundaes, we blend premium
          ingredients with a sprinkle of magic to create flavors that ignite joy in
          every bite.
        </p>
      </article>
      <svg class="aboutImg1"
        width="633"
        height="453"
        viewBox="0 0 633 453"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="bottomSplat1"
      >
        <path
          d="M256.06 42.5541C276.804 -13.5789 356.196 -13.5789 376.94 42.554L379.356 49.0918C390.488 79.2168 424.119 94.406 454.08 82.841L533.984 51.9986C574.821 36.2357 607.61 88.1105 576.158 118.556C552.226 141.721 565.39 182.37 598.384 186.926C644.365 193.275 644.365 259.725 598.384 266.074C565.39 270.63 552.226 311.279 576.158 334.444C607.61 364.89 574.821 416.764 533.984 401.001L454.08 370.159C424.119 358.594 390.488 373.783 379.356 403.908L376.94 410.446C356.196 466.579 276.804 466.579 256.06 410.446L253.644 403.908C242.512 373.783 208.881 358.594 178.92 370.159L99.0159 401.001C58.1785 416.764 25.3897 364.89 56.8419 334.444C80.7739 311.279 67.6097 270.63 34.6155 266.074C-11.365 259.725 -11.365 193.275 34.6155 186.926C67.6097 182.37 80.7739 141.721 56.8419 118.556C25.3897 88.1105 58.1785 36.2357 99.0159 51.9986L178.92 82.841C208.881 94.406 242.512 79.2168 253.644 49.0918L256.06 42.5541Z"
          fill="#EB5B98"
        />
      </svg>
      <svg class="aboutImg2"
        width="98"
        height="38"
        viewBox="0 0 98 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="bottomSplat2"
      >
        <path
          d="M49 38C76.062 38 98 29.4934 98 19C98 8.50659 76.062 0 49 0C21.938 0 0 8.50659 0 19C0 29.4934 21.938 38 49 38Z"
          fill="#EB5B98"
        />
      </svg>
      <svg class="aboutImg3"
        width="65"
        height="45"
        viewBox="0 0 65 45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="bottomSplat3"
      >
        <path
          d="M32.5 45C50.4493 45 65 34.9264 65 22.5C65 10.0736 50.4493 0 32.5 0C14.5507 0 0 10.0736 0 22.5C0 34.9264 14.5507 45 32.5 45Z"
          fill="#EB5B98"
        />
      </svg>
    </div>
  `;

  flavourSection.innerHTML = `
    <h5 class="flavourHeading">Some flavours you might like!</h5>

    <article class="newIcecreamArticle">
      <h3 class="newIcecreamArticleHeader">New!</h3>
      <img
        class="chewingGum13"
        src="assets/icons/chewing-gum.svg"
        alt="chewing gum bubble"
      />
      <img
        class="chewingGum14"
        src="assets/icons/chewing-gum.svg"
        alt="chewing gum bubble"
      />
      <img
        class="chewingGum15"
        src="assets/icons/chewing-gum.svg"
        alt="chewing gum bubble"
      />

      <h5 class="pistachioHeader">Pistachio gelatio</h5>
      <figure class="newIcecreamImgContainer">
        <img
          class="newIcecreamImg"
          src="/assets/images/ice-creams/bubblegum_mobile.webp"
          alt="pink bubblegum flavour ice cream"
          width="200"
          height="220"
        />
      </figure>
      <p class="newIcecreamArticleTxt">
        Dive into a swirl of joy with Amorella's newest delight: Bubblegum Bliss!
      </p>
    </article>

    <article class="pistachioArticle">
      <img
        class="pistachioImg"
        src="assets/icons/pistachio2.svg"
        alt="An animated image of a pistachio"
        width="75"
        height="91"
      />
      <h5 class="pistachioHeader">Pistachio gelatio</h5>
      <figure class="pistachioImgContainer">
        <img
          class="pistachioIcecreamImg"
          src="assets/images/ice-creams/pistage_small.webp"
          alt="green pistachio flavour ice cream"
          width="250"
          height="330"
        />
      </figure>
      <p class="pistachioArticleTxt">
        Each scoop whispers tales of creamy bliss and nutty perfection!
      </p>
    </article>

    <article class="blueberryArticle">
      <img
        class="blueberryImg"
        src="assets/icons/blueberry.svg"
        alt="An animated image of a blueberry"
        width="89"
        height="109"
      />
      <h5 class="blueberryHeader">Blueberry dream</h5>
      <figure class="blueberryImgContainer">
        <img
          class="blueberryIcecreamImg"
          src="assets/images/ice-creams/blueberry_small.webp"
          alt="blueberry flavour ice cream"
          width="250"
          height="330"
        />
      </figure>
      <p class="blueberryArticleTxt">
        Luscious essence of berries hugged by velvety dairy goodness!
      </p>
    </article>
  `;
}

function htmlVersionThree() {
  const homeSection = document.getElementById("homeSection");
  const aboutSection = document.getElementById("aboutSection");
  const flavourSection = document.getElementById("flavourSection");

  homeSection.innerHTML = `
    <article class="homeHeadline">
      <h3>
        Join us on a journey of indulgence and happiness, one scoop at a time!
      </h3>
      <img
          class="chewingGum1"
          src="assets/icons/chewing-gum.svg"
          alt="chewing gum bubble"
      />
      <img
          class="chewingGum2"
          src="assets/icons/chewing-gum.svg"
          alt="chewing gum bubble"
      />
      <img
          class="chewingGum3"
          src="assets/icons/chewing-gum.svg"
          alt="chewing gum bubble"
      />
      <img
          class="chewingGum4"
          src="assets/icons/chewing-gum.svg"
          alt="chewing gum bubble"
      />
      <img
          class="chewingGum5"
          src="assets/icons/chewing-gum.svg"
          alt="chewing gum bubble"
      />
      <img
          class="chewingGum6"
          src="assets/icons/chewing-gum.svg"
          alt="chewing gum bubble"
      />
      <img
          class="chewingGum7"
          src="assets/icons/chewing-gum.svg"
          alt="chewing gum bubble"
      />
      <img
          class="chewingGum16"
          src="assets/icons/chewing-gum.svg"
          alt="chewing gum bubble"
      />
      <img
          class="chewingGum17"
          src="assets/icons/chewing-gum.svg"
          alt="chewing gum bubble"
      />
      <img
          class="chewingGum18"
          src="assets/icons/chewing-gum.svg"
          alt="chewing gum bubble"
      />
      <img
          class="chewingGum19"
          src="assets/icons/chewing-gum.svg"
          alt="chewing gum bubble"
      />
    </article>

    <article class="newIcecreamArticle">
      <div class="newHeaderWrapper">
        <h3 class="newIcecreamArticleHeader">New!</h3>
        <h4 class="homeHeader">Bubblegum bliss</h4>
      </div>
      <button class="newIcecreamBtn">View this flavour</button>
      <img 
          class="homeStarBg" 
          src="assets/icons/bubblegum-star.svg" 
          alt="yellow star for highlight" 
      />
      <img
          class="chewingGum8"
          src="assets/icons/chewing-gum.svg"
          alt="chewing gum bubble"
      />
      <img
          class="chewingGum9"
          src="assets/icons/chewing-gum.svg"
          alt="chewing gum bubble"
      />
      <img
          class="chewingGum10"
          src="assets/icons/chewing-gum.svg"
          alt="chewing gum bubble"
      />
      <img
          class="chewingGum11"
          src="assets/icons/chewing-gum.svg"
          alt="chewing gum bubble"
      />
      <img
          class="chewingGum12"
          src="assets/icons/chewing-gum.svg"
          alt="chewing gum bubble"
      />
    </article>
  `;

  aboutSection.innerHTML = `
    <div class="aboutImgContainer">
      <img src="assets/images/ice-creams/pink.webp" alt="pink softserve icecream" />
    </div>
    <div class="aboutSplats">
      <article>
        <h3>About</h3>
        <p>
          Welcome to Scoops & Smiles, where every lick is a dance of delight and
          every scoop a celebration of sweetness! At our whimsical ice cream
          emporium, we craft frozen fantasies that tickle your taste buds and warm
          your heart. From classic cones to avant-garde sundaes, we blend premium
          ingredients with a sprinkle of magic to create flavors that ignite joy in
          every bite.
        </p>
      </article>
      <svg class="aboutImg1"
        width="633"
        height="453"
        viewBox="0 0 633 453"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="bottomSplat1"
      >
        <path
          d="M256.06 42.5541C276.804 -13.5789 356.196 -13.5789 376.94 42.554L379.356 49.0918C390.488 79.2168 424.119 94.406 454.08 82.841L533.984 51.9986C574.821 36.2357 607.61 88.1105 576.158 118.556C552.226 141.721 565.39 182.37 598.384 186.926C644.365 193.275 644.365 259.725 598.384 266.074C565.39 270.63 552.226 311.279 576.158 334.444C607.61 364.89 574.821 416.764 533.984 401.001L454.08 370.159C424.119 358.594 390.488 373.783 379.356 403.908L376.94 410.446C356.196 466.579 276.804 466.579 256.06 410.446L253.644 403.908C242.512 373.783 208.881 358.594 178.92 370.159L99.0159 401.001C58.1785 416.764 25.3897 364.89 56.8419 334.444C80.7739 311.279 67.6097 270.63 34.6155 266.074C-11.365 259.725 -11.365 193.275 34.6155 186.926C67.6097 182.37 80.7739 141.721 56.8419 118.556C25.3897 88.1105 58.1785 36.2357 99.0159 51.9986L178.92 82.841C208.881 94.406 242.512 79.2168 253.644 49.0918L256.06 42.5541Z"
          fill="#EB5B98"
        />
      </svg>
      <svg class="aboutImg2"
        width="98"
        height="38"
        viewBox="0 0 98 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="bottomSplat2"
      >
        <path
          d="M49 38C76.062 38 98 29.4934 98 19C98 8.50659 76.062 0 49 0C21.938 0 0 8.50659 0 19C0 29.4934 21.938 38 49 38Z"
          fill="#EB5B98"
        />
      </svg>
      <svg class="aboutImg3"
        width="65"
        height="45"
        viewBox="0 0 65 45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="bottomSplat3"
      >
        <path
          d="M32.5 45C50.4493 45 65 34.9264 65 22.5C65 10.0736 50.4493 0 32.5 0C14.5507 0 0 10.0736 0 22.5C0 34.9264 14.5507 45 32.5 45Z"
          fill="#EB5B98"
        />
      </svg>
    </div>
  `;

  flavourSection.innerHTML = `
    <h5 class="flavourHeading">Some flavours you might like!</h5>

    <article class="newIcecreamArticle">
      <h3 class="newIcecreamArticleHeader">New!</h3>
      <img
        class="chewingGum13"
        src="assets/icons/chewing-gum.svg"
        alt="chewing gum bubble"
      />
      <img
        class="chewingGum14"
        src="assets/icons/chewing-gum.svg"
        alt="chewing gum bubble"
      />
      <img
        class="chewingGum15"
        src="assets/icons/chewing-gum.svg"
        alt="chewing gum bubble"
      />

      <h5 class="pistachioHeader">Pistachio gelatio</h5>
      <figure class="newIcecreamImgContainer">
        <img
          class="newIcecreamImg"
          src="/assets/images/ice-creams/bubblegum_mobile.webp"
          alt="pink bubblegum flavour ice cream"
          width="200"
          height="220"
        />
      </figure>
      <p class="newIcecreamArticleTxt">
        Dive into a swirl of joy with Amorella's newest delight: Bubblegum Bliss!
      </p>
    </article>

    <article class="pistachioArticle">
      <img
        class="pistachioImg"
        src="assets/icons/pistachio2.svg"
        alt="An animated image of a pistachio"
        width="75"
        height="91"
      />
      <h5 class="pistachioHeader">Pistachio gelatio</h5>
      <figure class="pistachioImgContainer">
        <img
          class="pistachioIcecreamImg"
          src="assets/images/ice-creams/pistage_small.webp"
          alt="green pistachio flavour ice cream"
          width="250"
          height="330"
        />
      </figure>
      <p class="pistachioArticleTxt">
        Each scoop whispers tales of creamy bliss and nutty perfection!
      </p>
    </article>

    <article class="blueberryArticle">
      <img
        class="blueberryImg"
        src="assets/icons/blueberry.svg"
        alt="An animated image of a blueberry"
        width="89"
        height="109"
      />
      <h5 class="blueberryHeader">Blueberry dream</h5>
      <figure class="blueberryImgContainer">
        <img
          class="blueberryIcecreamImg"
          src="assets/images/ice-creams/blueberry_small.webp"
          alt="blueberry flavour ice cream"
          width="250"
          height="330"
        />
      </figure>
      <p class="blueberryArticleTxt">
        Luscious essence of berries hugged by velvety dairy goodness!
      </p>
    </article>
  `;
}
