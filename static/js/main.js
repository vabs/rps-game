// ROCK = 1
// PAPER = 2
// SCISSOR = 3


$(function(){
    var user_val = 0;
    $(".selectMe").click(function(){
        $(".selectMe").each(function(){
            $(this).prop('checked', false);

        });
        $(this).prop('checked', true);
        var parent_li = $(this).parent('li').attr('id');
        if ( parent_li == 'r'){
            user_val = 1;
        }
        else if ( parent_li == 'p'){
            user_val = 2;
        }
        else {
            user_val = 3;
        }

    });

    $("div#selectVal").click(function(){

        if( $(this).html() != "Try Again"){
            var comp = Math.random();
            var select = (comp * 10 ) % 10;
            var comp_val;
            if(select >1 && select < 2){
                comp_val = 1;
            }
            else if (select >2 && select <3){
                comp_val = 2;
            }
            else {
                comp_val = 3;
            }
            console.log(comp_val, user_val);
            if ( user_val == comp_val ) {
                $("div#status").html('YOU TIE! ~~TRY HARDER~~').css('font-size','20px').css('color','orange');
            }
            else if ( user_val == 1 ) { // ROCK
                if (comp_val == 2 ) { // PAPER
                    $("div#status").html('YOU LOST! ~~HAHAHA~~').css('font-size','20px').css('color','red');
                }
                if (comp_val == 3) { // SCISSOR
                    $("div#status").html('YOU WON! ~~YOU ROCK JHONNY~~').css('font-size','20px').css('color','green');
                }
            }
            else if ( user_val == 2 ) { // PAPER
                if (comp_val == 1 ) { // ROCK
                    $("div#status").html('YOU WON! ~~YOU ROCK JHONNY~~').css('font-size','20px').css('color','green');
                }
                if (comp_val == 3) { // SCISSOR
                    $("div#status").html('YOU LOST! ~~HAHAHA~~').css('font-size','20px').css('color','red');
                }
            }
            else{
                // SCISSOR
                if (comp_val == 1 ) { // ROCK
                    $("div#status").html('YOU WON! ~~YOU ROCK JHONNY~~').css('font-size','20px').css('color','green');
                }
                if (comp_val == 2) { // PAPER
                    $("div#status").html('YOU LOST! ~~HAHAHA~~').css('font-size','20px').css('color','red');
                }
            }

            $("div#selectVal").html("Try Again");
            $(".selectMe").each(function(){
                $(this).prop('disabled', true);
            });
        }
        else {
            $("div#selectVal").html("Play!");
            $(".selectMe").each(function(){
                $(this).prop('checked', false);
                $(this).prop('disabled', false);
            });
            $("div#status").html('');
        }

    });
});