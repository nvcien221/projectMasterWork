/**
* Adds event click cho các radio button của phần featured
* nếu radio đó đang được check mà bị click thì unchecked
* @param checkedRadio lưu lại radio buton đang được checked
*/
var allRadios = document.getElementsByName('projects');
var checkedRadio;
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