// check
document.getElementById("showOverlay").addEventListener("click", function () {
    document.getElementById("search").classList.add("show");
})
document.getElementById("close").addEventListener("click", function () {
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
