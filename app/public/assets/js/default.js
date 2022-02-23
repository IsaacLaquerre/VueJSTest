// eslint-disable-next-line no-unused-vars
var lang = getCookie("lang") != "undefined" ? getCookie("lang") : "en";
// eslint-disable-next-line no-unused-vars
function onLoad() {

    setUpCarousel();
    window.onscroll = function() {
        shrinkHeader();
        backToTop();
    }

    if (getCookie("acceptedCookies") != null) {
        if (getCookie("acceptedCookies") != "true") {
            askCookies();
        }
    } else {
        setCookie("acceptedCookies", "undefined", 31);
        askCookies();
    }

    var now = new Date();
    var experience = now.getFullYear() - 2014;
    var freelanceExperience = now.getFullYear() - 2018;
    var age = now.getFullYear() - 2002;
    if (now.getMonth() < 5) age--;
    else if (now.getMonth() === 5 && now.getDate() < 19) age--;

    document.getElementById("age").innerHTML = age;
    document.getElementById("experience").innerHTML = experience;
    document.getElementById("freelanceExperience").innerHTML = freelanceExperience;

    document.querySelector(":root").style.setProperty("--projectWidth", 90 / document.getElementsByClassName("project").length + "%");
}
// eslint-disable-next-line no-unused-vars
function askCookies() {
    var lang = getCookie("lang");
    var cookiesDiv = document.createElement("div");
    cookiesDiv.classList.add("cookiesInfo");

    var cookiesSpan = document.createElement("span");

    var cookieButtons = document.createElement("div");
    cookieButtons.classList.add("cookieButtons");

    var okButton = document.createElement("div");
    okButton.classList.add("cookiesOk");
    okButton.setAttribute("onclick", "setCookie('acceptedCookies', 'true', 31); this.parentNode.parentNode.remove();");
    var okSpan = document.createElement("span");
    okSpan.innerHTML = "Ok";

    if (lang === "fr") {
        cookiesSpan.innerHTML = "Nous utilisons des cookies pour améliorer votre expérience en navigant sur notre site, pour analyser notre traffic et pour savoir d'où viennent nos visiteurs.";
    } else {
        cookiesSpan.innerHTML = "We use cookies to improve your browsing experience on our website, to analyze our website traffic and to understand where our visitors are coming from.";
    }

    okButton.appendChild(okSpan);
    cookieButtons.appendChild(okButton);
    cookiesDiv.appendChild(cookiesSpan);
    cookiesDiv.appendChild(cookieButtons);

    document.body.appendChild(cookiesDiv);
}
// eslint-disable-next-line no-unused-vars
function displayNavbar2() {
    var dropdown = document.getElementsByClassName("dropdown-content")[0];

    switch (dropdown.style.display) {
        case "block":
            dropdown.style.display = "none";
            break;
        case "none":
            dropdown.style.display = "block";
            break;
        default:
            dropdown.style.display = "none";
            break;
    }
}
// eslint-disable-next-line no-unused-vars
function shrinkHeader() {
    if (scrollY > 40) {
        if (document.getElementById("icon-select-box-scroll").style.display === "block") displayLangSelect();
        if (window.innerWidth > 900) {
            document.querySelector(":root").style.setProperty("--headerHeight", "calc(3vw + 3vh)");
            document.querySelector(".selected-box").style.marginTop = "calc(var(--headerHeight) / 2)";
            document.querySelectorAll(".section").forEach(el => el.style.paddingTop = "130px");
        }
    } else {
        if (document.getElementById("icon-select-box-scroll").style.display === "block") displayLangSelect();
        if (window.innerWidth > 900) {
            document.querySelector(":root").style.setProperty("--headerHeight", "calc(4vw + 5vh)");
            document.querySelector(".selected-box").style.marginTop = "calc(var(--headerHeight) / 2)";
        }
    }
}
// eslint-disable-next-line no-unused-vars
function displayLangSelect() {
    switch (document.getElementById("icon-select-box-scroll").style.display) {
        case "none":
            document.getElementById("icon-select-box-scroll").style.display = "block";
            if (scrollY > 40 && document.querySelector(".selected-box").style.transform === "translateY(-50%)") {
                document.querySelector(":root").style.setProperty("--headerHeight", "calc(4vw + 5vh)");
            }
            document.querySelector(".selected-box").style.transform = "translateY(-85%)";
            document.querySelector("#lang-select").style.backgroundColor = "var(--main-selected-color)";
            document.getElementById("langArrow").style.transform = "rotate(90deg)";
            break;
        case "block":
            document.getElementById("icon-select-box-scroll").style.display = "none";
            if (scrollY > 40 && document.querySelector(".selected-box").style.transform === "translateY(-85%)") {
                document.querySelector(":root").style.setProperty("--headerHeight", "calc(3vw + 3vh)");
                document.querySelector("#lang-select").style.backgroundColor = "var(--secondary-color)";
                document.querySelector(".selected-box").style.transform = "translateY(-50%)";
            }
            if (scrollY < 40) {
                document.querySelector(".selected-box").style.transform = "translateY(-50%)";
                document.querySelector("#lang-select").style.backgroundColor = "var(--secondary-color)";
            }
            document.getElementById("langArrow").style.transform = "rotate(0deg)";
            break;
        default:
            break;
    }
}
// eslint-disable-next-line no-unused-vars
function backToTop() {
    var topDiv = document.createElement("div");
    topDiv.id = "scrollBackToTop";
    topDiv.title = "Back to top";
    topDiv.setAttribute("onclick", "window.scrollTo(0, 0);");

    if (scrollY > 40) {
        if (!document.getElementById("scrollBackToTop")) {
            document.getElementById("body").appendChild(topDiv);
        }
    } else {
        if (document.getElementById("scrollBackToTop") != undefined) {
            document.getElementById("scrollBackToTop").remove();
        }
    }
}
// eslint-disable-next-line no-unused-vars
function handleLang(lang) {
    setCookie("lang", lang, 31);
    window.location.href = "/" + lang + (window.location.href.indexOf("#") != -1 ? "#" + window.location.href.split("#")[1] : "");
}
// eslint-disable-next-line no-unused-vars
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}
// eslint-disable-next-line no-unused-vars
function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}