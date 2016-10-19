$(document).ready(function(){
  $("#blank-form form").submit(function(event){
    var firstnameInput = $("input#first-name").val();
    var lastnameInput = $("input#last-name").val();
    var streetaddInput = $("input#street-add").val();
    var zipInput = $("input#zip-code").val();
    var stateInput= $("#state").val();
  })
})
