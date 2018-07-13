$(document).ready(function(){
  $('form#number').submit(function(event){
    event.preventDefault();
    var input=parseInt($('input#numeral').val());
    var output=pingpong(input);
    // alert(input);
    // console.log(input);
  })
})

var pingpong=function(input){
  for(var x=1; x<=input ; x++){
    if (x % 3 ===0 && x % 5 === 0) {
      console.log("pingpong");
    }else if (x % 3 ===0) {
      console.log("ping");
    }else if (x % 5 ===0) {
      console.log("pong");
    }else {
      console.log(x);
    }
  }

  }
