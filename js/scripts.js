$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();

    let sentence = $("#inputSent").val();
    let sentArray = sentence.split(" ");

    let words = [];
    sentArray.forEach(function(element) {
      if (element.length >= 3) {
        words.push(element);
      }
    });
    let reverseArray = words.reverse();
    let output = reverseArray.join(" ");

    $("#output").text(output);
    $("#output").show();


  });
  
});