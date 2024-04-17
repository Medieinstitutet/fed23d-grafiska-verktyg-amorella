/* header + menu + nav */
const hamMenu = document.querySelector(".hamMenu");

const offScreenMenu = document.querySelector(".offScreenMenu");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});

/* Footer - input */
const input = document.getElementById("footerSubscriptionInput")
const subscribeBtn = document.getElementById("footerSubscriptionBtn")

input.addEventListener("input", () => {
  if (!input.value || input.value == "Try again...") {
    return
  } else {
    subscribeBtn.removeAttribute("disabled")
  }
})

subscribeBtn.addEventListener("click", () => {
  if (!input.value || input.value == "Try again...") {
    subscribeBtn.setAttribute("disabled", "disabled")
    input.value = "Try again..."
  } else {
    input.value = "";
    subscribeBtn.setAttribute("disabled", "disabled")
  }
})

/* Cookie Pop-Up */
const body = document.querySelector("body")
const cookieDialog = document.createElement("dialog")
const cookieHeader = document.createElement("div")
const cookieBody = document.createElement("div")
const cookieFooter = document.createElement("div")
cookieDialog.classList.add("cookieDialog");
cookieHeader.classList.add("cookieHeader");
cookieBody.classList.add("cookieBody");
cookieFooter.classList.add("cookieFooter");

const cookieHeaderHeading = document.createElement("p")
cookieHeaderHeading.textContent = "amorella.com"
const cookieHeaderCloseBtn = document.createElement("button")
cookieHeaderCloseBtn.classList.add("cookieHeaderCloseBtn")
cookieHeaderCloseBtn.innerHTML = `<svg width="28" height="28" viewBox="0 0 58 55" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M40.0002 27.5L56.489 12.3265C58.5124 10.4645 58.5124 7.44555 56.489 5.58203L52.8245 2.2098C50.8011 0.347792 47.5205 0.347792 45.4954 2.2098L29.0066 17.3833L12.5178 2.2098C10.4944 0.347792 7.21375 0.347792 5.18869 2.2098L1.52415 5.58203C-0.49926 7.44403 -0.49926 10.463 1.52415 12.3265L18.013 27.5L1.52415 42.6735C-0.49926 44.5355 -0.49926 47.5545 1.52415 49.418L5.18869 52.7902C7.2121 54.6522 10.4944 54.6522 12.5178 52.7902L29.0066 37.6167L45.4954 52.7902C47.5188 54.6522 50.8011 54.6522 52.8245 52.7902L56.489 49.418C58.5124 47.556 58.5124 44.5371 56.489 42.6735L40.0002 27.5Z" fill="white"/>
  </svg>`

const cookieBodyHeading = document.createElement("p")
const cookieBodyContent = document.createElement("p")
cookieBodyHeading.textContent = "We believe your data is your property and support your right to privacy and transparency.";
cookieBodyContent.innerHTML = `Select a Data Access Level to choose how we use and share your data. <br><br> 
  Highest level of privacy. Data accessed for necessary basic operations only. <br>
  Data shared with 3rd parties to ensure the site is secure and works on your device.`
cookieBodyHeading.classList.add("textWeightBold");

const cookieBodyBtnContainer = document.createElement("div")
cookieBodyBtnContainer.classList.add("cookieBodyBtnContainer");
const cookieBodyRejectAllBtn = document.createElement("button")
const cookieBodyAcceptSomeBtn = document.createElement("button")
const cookieBodyAcceptAllBtn = document.createElement("button")
cookieBodyRejectAllBtn.textContent = "Reject All"
cookieBodyAcceptSomeBtn.textContent = "Accept Some"
cookieBodyAcceptAllBtn.textContent = "Accept All"
cookieBodyRejectAllBtn.classList.add("cookieBodyRejectAllBtn");

const cookieFooterCustomize = document.createElement("a")
const cookieFooterPrivacyPolicy = document.createElement("a")
cookieFooterCustomize.setAttribute("href", "https://www.youtube.com/watch?v=-WWTQi8q-zo&ab_channel=NayyarShaikh")
cookieFooterPrivacyPolicy.setAttribute("href", "https://www.youtube.com/watch?v=PMauhUveLZU&ab_channel=ElegantThemes")
cookieFooterCustomize.textContent = "Customize"
cookieFooterPrivacyPolicy.textContent = "Privacy Policy"

const allCookieBtns = [cookieHeaderCloseBtn, cookieBodyRejectAllBtn, cookieBodyAcceptSomeBtn, cookieBodyAcceptAllBtn]
allCookieBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    cookieDialog.remove()
  });
});

cookieHeader.append(cookieHeaderHeading, cookieHeaderCloseBtn);
cookieBodyBtnContainer.append(cookieBodyRejectAllBtn, cookieBodyAcceptSomeBtn, cookieBodyAcceptAllBtn)
cookieBody.append(cookieBodyHeading, cookieBodyContent, cookieBodyBtnContainer);
cookieFooter.append(cookieFooterCustomize, cookieFooterPrivacyPolicy)
cookieDialog.append(cookieHeader, cookieBody, cookieFooter)
body.append(cookieDialog)

