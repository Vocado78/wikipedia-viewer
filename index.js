$(document).ready(function() {
  // View a random article
  $("#random-btn").on("click", function() {
 window.open("https://en.wikipedia.org/wiki/Special:Random");
  });

  // Search function
  $("#submit").on("click", function(event) {
    event.preventDefault();
    var searchWord = $("#search-word").val();
    var searchLink =
      "https://en.wikipedia.org/w/api.php?action=opensearch&search=" +
      searchWord +
      "&limit=7&format=json&origin=*";
    $.getJSON(searchLink, function(data) {
      $(".search-results").html("");
      var results = "";
      for (i = 0; i < data[1].length; i++) {
        results +=
          "<div class='resultsDisplay'><a href=" +
          data[3][i] +
          "><h4>" +
          data[1][i] +
          "</h4></a><span>" +
          data[2][i] +
          "</span></div>";
      }
      $(".search-results").html(results);
    });
    // Eraser function
    $("#clear").on("click", function() {
      $(".search-results").html("");
      $("#search-word").val("");
    });
  });
});