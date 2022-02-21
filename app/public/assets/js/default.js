// eslint-disable-next-line no-unused-vars
var lang = getCookie("lang") != "undefined" ? getCookie("lang") : "en";
// eslint-disable-next-line no-unused-vars
function onLoad() {
    const form = document.getElementById("emailForm");
    if (form) form.addEventListener("submit", handleSubmit);

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
function handleSubmit(event) {
    event.preventDefault();

    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    const data = {
        email,
        subject,
        message
    };

    fetch("/email/send", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
        }
    }).then(body => body.json()).then(res => {
        if (res.status === "ok") {
            switch (getCookie("lang")) {
                case "fr":
                    alert("Email envoyé avec succès!");
                    break;
                default:
                    alert("Email successfully sent!");
                    break;
            }
            document.getElementById('email').value = "";
            document.getElementById('subject').value = "";
            document.getElementById('message').value = "";
        } else {
            var errorDiv = document.createElement("div");
            errorDiv.classList.add("center");
            errorDiv.style.margin = "auto 40% auto 40%";
            errorDiv.style.backgroundColor = "#ffcccc";
            errorDiv.style.border = "2px solid #ff3333";
            errorDiv.style.width = "50%;";
            errorDiv.id = "error";
            var errorSpan = document.createElement("span");
            errorSpan.classList.add("center");
            errorSpan.style.margin = "50% 10px 10px 10px;";
            errorSpan.innerHTML = res.error;
            errorDiv.appendChild(errorSpan);
            if (!document.getElementById("error")) document.getElementById("emailForm").appendChild(errorDiv);
        }
    });
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
            document.querySelector(".selected-box").style.marginTop = "calc(var(--headerHeight) / 20 - 1.25vh + 1vw)";
            document.querySelectorAll(".section").forEach(el => el.style.paddingTop = "130px");
        }
    } else {
        if (window.innerWidth > 900) {
            document.querySelector(":root").style.setProperty("--headerHeight", "calc(4vw + 5vh)");
            document.querySelector(".selected-box").style.marginTop = "calc(var(--headerHeight) / 4 - 1.25vh + 0.5vw)";
        }
    }
}
// eslint-disable-next-line no-unused-vars
function displayLangSelect() {
    switch (document.getElementById("icon-select-box-scroll").style.display) {
        case "none":
            document.getElementById("icon-select-box-scroll").style.display = "block";
            if (scrollY > 40 && document.querySelector(":root").style.getPropertyValue("--headerHeight") === "calc(3vw + 3vh)") {
                document.querySelector(":root").style.setProperty("--headerHeight", "calc(4vw + 5vh)");
            }
            document.querySelector(".selected-box").style.marginTop = "3px";
            document.getElementById("langArrow").style.transform = "rotate(90deg)";
            break;
        case "block":
            document.getElementById("icon-select-box-scroll").style.display = "none";
            if (scrollY > 40 && document.querySelector(":root").style.getPropertyValue("--headerHeight") === "calc(4vw + 5vh)") {
                document.querySelector(":root").style.setProperty("--headerHeight", "calc(3vw + 3vh)");
                document.querySelector(".selected-box").style.marginTop = "calc(var(--headerHeight) / 20 - 1.25vh + 1vw)";
            }
            if (scrollY < 40) {
                document.querySelector(".selected-box").style.marginTop = "calc(var(--headerHeight) / 4 - 1.25vh + 0.5vw)";
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
