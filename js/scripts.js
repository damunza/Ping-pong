$(document).ready(function(){
  $('form#number').submit(function(event){
    event.preventDefault();
    var input=parseInt($('input#numeral'));
  })
})
