// eslint-disable-next-line no-unused-vars
var totalPages;
// eslint-disable-next-line no-unused-vars
var currentPage = 1;
// eslint-disable-next-line no-unused-vars
function setUpCarousel() {
    document.getElementById("carousel-" + currentPage).style.display = "block";

    totalPages = document.getElementsByClassName("carousel-page").length;
}
// eslint-disable-next-line no-unused-vars
function carouselLeft() {
    var page = currentPage;
    if (page === 1) page = totalPages;
    else page--;

    carouselPage(page);
}
// eslint-disable-next-line no-unused-vars
function carouselRight() {
    var page = currentPage;
    if (page === totalPages) page = 1;
    else page++;

    carouselPage(page);
}
// eslint-disable-next-line no-unused-vars
function carouselPage(page) {
    if (page === currentPage) return;
    else {
        document.getElementById("carousel-" + currentPage).style.display = "none";
        document.getElementById("carousel-index-" + currentPage).classList.remove("selected");
        document.getElementById("carousel-" + page).style.display = "block";
        document.getElementById("carousel-index-" + page).classList.add("selected");
        currentPage = page;
    }
}
// eslint-disable-next-line no-unused-vars
function displaySlide(element) {
    var source = element.getAttribute("src");

    var opaqueDiv = document.createElement("div");
    opaqueDiv.id = "opaque";
    opaqueDiv.setAttribute("onclick", "this.remove();");

    var image = document.createElement("img");
    image.src = source;
    image.id = "zoomImg";

    opaqueDiv.appendChild(image);

    var opaqueX = document.createElement("span");
    opaqueX.id = "imageZoomClose";
    opaqueX.setAttribute("onclick", "document.getElementById('opaque').remove();");

    opaqueDiv.appendChild(opaqueX);

    if (document.getElementById("opaque") != undefined) document.getElementById("opaque").remove();
    else document.body.appendChild(opaqueDiv);
}
