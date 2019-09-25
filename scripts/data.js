(function() {
  var getLikesAmount = function(max) {
    return Math.floor(Math.random() * Math.floor(max));
  };

  var PhotoArr = [
    {
      src: "https://loremflickr.com/200/300",
      likes: getLikesAmount(100)
    },
    {
      src: "https://loremflickr.com/200/300",
      likes: getLikesAmount(100)
    },
    {
      src: "https://loremflickr.com/200/300",
      likes: getLikesAmount(100)
    },
    {
      src: "https://loremflickr.com/200/300",
      likes: getLikesAmount(100)
    },
    {
      src: "https://loremflickr.com/200/300",
      likes: getLikesAmount(100)
    },
    {
      src: "https://loremflickr.com/200/300",
      likes: getLikesAmount(100)
    },
    {
      src: "https://loremflickr.com/200/300",
      likes: getLikesAmount(100)
    },
    {
      src: "https://loremflickr.com/200/300",
      likes: getLikesAmount(100)
    }
  ];
  window.rendering(PhotoArr);
})();
