$(document).ready(function(){
  $("#blankform form").submit(function(event){

    var firstnameInput = $("input#first-name").val();
    var lastnameInput = $("input#last-name").val();
    var streetaddInput = $("input#street-add").val();
    var cityInput = $("input#city").val();
    var zipInput = $("input#zip-code").val();
    var stateInput= $("#state").val();

    $(".first-name").text(firstnameInput);
    $(".last-name").text(lastnameInput);
    $(".street-add").text(streetaddInput);
    $(".city").text(cityInput);
    $(".state").text(stateInput);
    $(".zip-code").text(zipInput);
    $("#blankform").remove("div #blankform");
    $(".receipt").show();
    event.preventDefault();
  });

});
