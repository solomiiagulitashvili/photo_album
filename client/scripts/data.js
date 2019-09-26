(function() {
  window.data = {
    load: function(onLoad, onError) {
      var URL = "/api/photos";
      var xhr = new XMLHttpRequest();
      xhr.responseType = "json";

      xhr.addEventListener("load", function() {
        if (xhr.status === 200) {
          onLoad(xhr.response);
          console.log("done", xhr.response);
        } else {
          onError(xhr.status + " " + xhr.statusText);
          console.log("error");
        }
      });
      xhr.addEventListener("error", function(errorMessage) {
        onError(errorMessage);
      });
      xhr.open("GET", URL);
      xhr.send();
    }
  };
})();
