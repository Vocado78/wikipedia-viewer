function showRandomArticle() {
  window.open("https://en.wikipedia.org/wiki/Special:Random");
}
// Mouse events
function mOver(obj) {
  obj.style.color = "purple";
}
function mOut(obj) {
  obj.style.color = "white";
}

$(document).ready(function() {
// Search function 
  $("#submit").on("click", function(event) {
    event.preventDefault(); // prevents search button to submit and reload the page when getting search results
    var searchWord = $("#search-word").val();
    var searchLink = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+searchWord+"&limit=7&format=json&origin=*";
    $.getJSON(searchLink,function(data) {
      $(".search-results").text(""); // prevents the new search results to be added to same longer list
      var results = "";
      for (i = 0; i < 7; i++) {
        results +=
          "<div class='resultsDisplay'><a href=" +
          data[3][i] +
          "><h4>" +
          data[1][i] +
          "</h4></a><span>" +
          data[2][i] +
          "</span></div>";
        };
        $(".search-results").html(results);
      });
// Eraser function    
    $("#clear").on("click", function() {
      $(".search-results").html("");
      $("#search-word").val("");
    });
    
  });
});
