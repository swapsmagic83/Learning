
$('.submit').on('click',function(e){
    e.preventDefault()
    let title=$('.title-input').val()
    let rating=$('.rating-input').val()
    if($('.form-container').valid()){
     $('.lists').append('<li>'+ title+' '+ rating +' '+'<button class="input" > Remove </button>'+'</li>')

    }
   else{
return false
   }
    //  $('.lists').append('<li>'+ title+' '+ rating +' '+'<button class="input" > Remove </button>'+'</li>')
    
})
$('.lists').on('click','button',function(){
    $(this).parents('li').remove()
})
$('input').focus(function(){
    $(this).val('')
})
// jQuery.validator.setDefaults({
//     debug: true,
//     success: "valid"
//   });
jQuery.validator.setDefaults({
    debug: true,
    success: "valid"
  });
  
  $( ".form-container" ).validate({
    rules: {
      title: {
        required: true,
        minlength: 2
      },
      rating: {
        required: true,
        range: [0,10]
        
      }
    
    }
  });
