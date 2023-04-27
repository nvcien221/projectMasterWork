//Chuyển icon Dark or Light
document.getElementById("moon").addEventListener("click", function () {
    document.getElementById("moon").classList.remove("showDarkandLight");
    document.getElementById("moon").classList.add("closeDarkandLight");
    document.getElementById("sun").classList.remove("closeDarkandLight");
    document.getElementById("sun").classList.add("showDarkandLight");
})

document.getElementById("sun").addEventListener("click", function () {
    document.getElementById("sun").classList.remove("showDarkandLight");
    document.getElementById("sun").classList.add("closeDarkandLight");
    document.getElementById("moon").classList.remove("closeDarkandLight");
    document.getElementById("moon").classList.add("showDarkandLight");
})
/**
 * chuyển đổi theme cho trang web
 * @localStorage.lastname {string}: biến lưu giá trị cho biết hiện tại trang web đang hiển thị dark mode hay light mode. y là dark mode, không phải y là light mode
 */
var isDark = true;
document.getElementById('moon').onclick = function () {
    switchDarkTheme();
}
document.getElementById('sun').onclick = function () {
    switchDarkTheme();
}
function switchDarkTheme() {
    if (localStorage.dark != 'y') {
        localStorage.setItem("dark", "y");
        document.documentElement.setAttribute('data-theme', 'dark');
        return;
    }
    localStorage.setItem("dark", "n");
    document.documentElement.setAttribute('data-theme', 'light');
}



//Lists navbar icon
document.getElementById("showListNavbar").addEventListener("click", function () {
    document.getElementById("closeListNavbar").classList.add("show");
    document.getElementById("showListNavbar").classList.remove("show");
    document.getElementById("showListNavbar").classList.add("close");
    document.getElementById("closeListNavbar").classList.remove("close");

})

document.getElementById("closeListNavbar").addEventListener("click", function () {
    document.getElementById("showListNavbar").classList.add("show");
    document.getElementById("closeListNavbar").classList.remove("show");
    document.getElementById("closeListNavbar").classList.add("close");
    document.getElementById("showListNavbar").classList.remove("close");

})


// Overlay search
document.getElementById("showOverlay").addEventListener("click", function () {
    document.getElementById("search").classList.add("show");
})
document.getElementById("closeOverlay").addEventListener("click", function () {
    document.getElementById("search").classList.remove("show");
})




/**
 * Công Nhựt
 */
var checkedRadio;
var allRadios = document.getElementsByName('projects');
/**
* Adds event click cho các radio button của phần featured nếu min-width là 0 và max-width 768px
* nếu radio đó đang được check mà bị click thì unchecked
* @param checkedRadio lưu lại radio buton đang được checked
*/
function addEventClickForFeatured() {
    var x = 0;
    for (x = 0; x < allRadios.length; x++) {
        allRadios[x].onclick = function () {
            if (checkedRadio == this) {
                this.checked = false;
                checkedRadio = null;
            } else {
                checkedRadio = this;
            }
        };
    }
}
/**
* remove event click cho các radio button của phần featured nếu min-width: 769px
* nếu radio đó đang được check mà bị click thì unchecked
* @param checkedRadio lưu lại radio buton đang được checked
*/
function removeEventClickForFeatured() {
    var x = 0;
    for (x = 0; x < allRadios.length; x++) {
        allRadios[x].onclick = function () { };
    }
    if (checkedRadio != undefined) {
        checkedRadio.checked = true;
    } else {
        allRadios[0].checked = true;
    }
}
function toggleFunction(x) {
    if (x.matches) {
        addEventClickForFeatured();
    } else {
        removeEventClickForFeatured()
    }
}
var x = window.matchMedia("(max-width: 768px)")
toggleFunction(x) // Call listener function at run time
x.addListener(toggleFunction)
/**
 * owl carousel
 */
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    responsive: {
        0: {
            items: 1
        },
        1000: {
            items: 2
        }
    }
})

