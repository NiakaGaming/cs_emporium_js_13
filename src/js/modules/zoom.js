let recentDiv = document.getElementsByClassName("recents")[0];
let recentArr = Array.from(recentDiv.children);
let arrChild;
recentArr.forEach(element => {
    if (element.tagName == "DIV") {
        arrChild = Array.from(element.children);
        arrChild.forEach(ele => {
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

let tabClass = ["carousel1", "carousel2", "carousel3", "carousel4"];
let hotDiv = document.getElementById("HotProducts");
let hotArr = Array.from(hotDiv.children);
let carouselArr;
let hotImg;
hotArr.forEach(element => {
    if (element.tagName == "DIV") {
        tabClass.forEach(ele => {
            if (element.id == ele) {
                carouselArr = Array.from(element.children);
                carouselArr.forEach(elem => {
                    hotImg = elem.firstElementChild.firstElementChild;
                    hotImg.addEventListener("mouseover", (e) => {
                        e.target.style.transition = "1s";
                        e.target.style.transform = "scale(1.5, 1.5)";
                    })
                    hotImg.addEventListener("mouseout", (e) => {
                        e.target.style.transition = "1s";
                        e.target.style.transform = "scale(1, 1)";
                    })
                });
            }
        });
    }
});
