window.addEventListener("DOMContentLoaded", (event) => {
  window.setTimeout(() => {
    if (localStorage.hasOwnProperty("thirdPageIntro")) {
      window.location.href = "home.html";
    } else if (localStorage.hasOwnProperty("secondPageIntro")) {
      window.location.href = "pages/intro/thirdPage.html";
    } else if (localStorage.hasOwnProperty("firstPageIntro")) {
      window.location.href = "pages/intro/secondPage.html";
    } else if (localStorage.hasOwnProperty("welcome")) {
      window.location.href = "pages/intro/firstPage.html";
    } else {
      window.location.href = "welcome.html";
    }
  }, 2500);
});
