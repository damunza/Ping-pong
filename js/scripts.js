$(document).ready(function(){
  $('form#number').submit(function(event){
    event.preventDefault();
    $('#result').empty();
    var input=parseInt($('input#numeral').val());
    var output=pingpong(input);
    //$('id of list').empty();-refreshes the  page every time a new number is entered comes after event.
    // alert(input);
    // console.log(input);

  })
})

var pingpong=function(input){
  for(var x=1; x<=input ; x++){//limits for which x is to be considered
    if (x % 3 ===0 && x % 5 === 0) {//if x is evenly divisible by 15
      //console.log("pingpong");
      var li='<li>' +'pingpong'+ '</li>';
    }else if (x % 3 ===0) {//if x is evenly divisible by 3
      //console.log("ping");
      var li='<li>' +'ping'+ '</li>';
    }else if (x % 5 ===0) {//if x is evenly divisible by 5
      //console.log("pong");
      var li='<li>' +'pong'+ '</li>';
    }else {
      //console.log(x);
      var li='<li>' +x+ '</li>';
    }

    $('#result').append(li);
  }
  }
