let recentDiv = document.getElementsByClassName("recents")[0];
let recentArr = Array.from(recentDiv.children);
let arrChild;
recentArr.forEach(element => {
    if (element.tagName == "DIV") {
        arrChild = Array.from(element.children);
        arrChild.forEach(ele => {
            console.log(ele.firstElementChild);
            ele.firstElementChild.addEventListener("mouseover", () => {
                ele.firstElementChild.classList.add("zoomIn");
                ele.firstElementChild.classList.remove("zoomOut");
            })
            ele.firstElementChild.addEventListener("mouseout", () => {
                ele.firstElementChild.classList.add("zoomOut");
                ele.firstElementChild.classList.remove("zoomIn");
            })
        });
    }
});

