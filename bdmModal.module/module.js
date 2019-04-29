// js
let clicky = $(".clickerName").text()
$(clicky).click(function() {
  event.preventDefault();
  $(".modal-outer").addClass("visible");
});
$("#close").click(function() {
  event.preventDefault();
  $(".modal-outer").removeClass("visible");
});
$(document).mouseup(function(e) {
  var container = $(".modal");
  if (!container.is(e.target) && container.has(e.target).length === 0) {
    $(".modal-outer").removeClass("visible");
  }
});