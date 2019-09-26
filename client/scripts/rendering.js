(function() {
  var randomPhoto = document.querySelector(".card-desk");
  var photoTemplate = document
    .querySelector("#photo")
    .content.querySelector(".cardOfPhoto");

  var rendering = function(PhotoArr) {
    if (PhotoArr.length === 0) {
      var message = document.createElement("P");
      message.textContent = "No photos received";
      randomPhoto.appendChild(message);
      return;
    }
    var fragment = document.createDocumentFragment();
    PhotoArr.forEach(function(photo) {
      var img = photoTemplate.cloneNode(true);
      img.querySelector(".set-up-src").src = photo.src;
      img.querySelector(".likes-amount").textContent = photo.likes;

      fragment.appendChild(img);
    });

    randomPhoto.appendChild(fragment);
  };
  window.rendering = rendering;
})();
