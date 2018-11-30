// $(document).ready(function() {
//     var startPos = $("#timeline").offset().top;
//     var scrollPos = $(document).scrollTop() - startPos;
//
//     var svgLen = $("#timeline").height();
//     $("#test-path").style.strokeDashoffset = svgLen - scrollPos + startPos;
// });













// codes experimented but not implemented

// drawsvg - not great for linear animation with one stroke
// var doc = $(document),
// win = $(window),
// svg = $("svg").drawsvg(),
// max = doc.height() - win.height();
//
// win.on("scroll", function() {
//    var p = win.scrollTop() / max;
//    svg.drawsvg("progress", p);
// });c