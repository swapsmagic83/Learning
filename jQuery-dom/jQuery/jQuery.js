
    $('.submit').on('click',function(e){
        e.preventDefault()
        let title=$('.title-input').val()
        let rating=$('.rating-input').val()
        
       
        $('.lists').append('<li>'+ title+' '+ rating +' '+'<button class="input" > Remove </button>'+'</li>')
        
    })
    $('.lists').on('click','button',function(){
        $(this).parents('li').remove()
    })
    $('input').focus(function(){
        $(this).val(' ')
    })
   

