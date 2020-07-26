$("h1").addClass("title margin-10-40");
$("h1").text("Bye");
//text and html
$("button").html("<em>don't click me</em>");
$("a").attr("href", "https://www.yahoo.com");
$("h1").click(function () {
  $("h1").css("color", "purple");
});
//just vanilla JS
// for (var i = 0; i < 5; i++) {
//   document.querySelectorAll("button")[i].addEventListener("click", function () {
//     document.querySelector("h1").style.color = "red";
//   });
// }
//using jQuery

$("button").click(function () {
  $("h1").text("h1", getInput());
});
//mini-challenge
// $(document).keypress(function (event) {
//   $("h1").html(event.key);
// });

$("button").on("click", function () {
  $("h1").animate({ margin: "20%" });
});
