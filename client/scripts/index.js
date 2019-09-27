import "bootstrap/dist/css/bootstrap.min.css";
import "popper.js/dist/popper.min.js";
import "jquery/dist/jquery.slim.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "../scss/index.scss";

import "./rendering.js";
import "./data.js";
import "./button.js";
var onLoad = function(PhotoArr) {
  window.rendering(PhotoArr);
};
var onError = function(errorMessage) {
  alert(errorMessage);
};
window.data.load(onLoad, onError);

var onPostLoad = function(res) {
  console.log(res);
};
var onPostError = function(errorMessage) {
  alert(errorMessage);
};
var form = document.querySelector(".add-photo");
form.addEventListener("submit", function(evt) {
  evt.preventDefault();
  window.data.save(new FormData(form), onPostLoad, onPostError);
  console.log("submitted");
});
