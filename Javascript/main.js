$(document).ready(function() {
  console.log('Hello World!');

  function showNav() {
    $("#hidden-nav").show(500);
    $("#menu").text("close");
    $("#menu").off("click");
    $("#menu").click(closeNav);
    ''
  }
  function closeNav() {
    $("#hidden-nav").hide(500);
    $("#menu").text("menu");
    $("#menu").off("click");
    $("#menu").click(showNav);
  }
  $("#menu").click(showNav);
})