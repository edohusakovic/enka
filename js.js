$(document).ready(function() {
    var errorcounter = 0;
    var players;
    var finish;
    var score1 = 0;
    var score2 = 0;
    var score3 = 0;
    var score4 = 0;
    var score5 = 0;
    var score6 = 0;
    var score7 = 0;
    var score8 = 0;
    var loser;
    var endtrue = false;
    round = 0;
    var array = [score1, score2, score3, score4, score5, score6, score7, score8];
    var dealer = 1;
    var dealeradd = 1;
    $("#submit").click(function(){
        players = $("#quantity").val();
        if (players.length > 0){
            console.log(players);
            for (var i = 1; i <= players; i++){
                $("#namequestion").after("<input type='text' class='nameinput namequestion' id='name" + i + "'>");
                console.log(i);
            }
            $(".playerquestion").fadeOut();
            $(".namequestion").delay( 800 ).fadeIn();
        }

        else if (errorcounter == 1 && players.length == 0){
            
        }

        else {
            $("#question").after("<span>Error: Input a number</span><br>");
            errorcounter++;
        }
    });

    $("#namesubmit").click(function(){
        var width = Math.floor(100 / players);
        $(".finishline").css("width", width*players + "%");
        finish = players*100;
        $(".fa-poop").after(finish);
        console.log (width);



        for (var i = 1; i <= players; i++) {
            $( "#table" ).append("<div style='width:" + width + "%' class='slice'><div class='name' id='namedisplay" + i + "'><input type='number' min='0' class='nameinput' id='scoreinput" + i + "'><br>" + $("#name" + i).val() + "</div><div id='result" + i + "' class='results'></div></div>" );
            console.log("dab"); 
        }

        $(".playerscontainer").fadeOut();
        $(".table").delay( 800 ).fadeIn();
        $(".finishline").delay( 800 ).fadeIn();
        $(".endscore").delay( 800 ).fadeIn();
        $("#roundbutton").delay( 800 ).fadeIn();

        $("#namedisplay1").css("color", "#f00");
    });


    $("#roundbutton").click(function(){
        for (var i = 1; i <= players; i++) {
            var scoreinputvar;
            if ($("#scoreinput" + i).val() == "") {
                scoreinputvar = 0;
            }

            else {
                scoreinputvar = parseInt($("#scoreinput" + i).val(), 10);
            }

            $("#scoreinput" + i).val("");

            array[i] = array[i] + scoreinputvar;
            $('#result' + i).append("<span class='resultparts'>" + array[i] + "<br></span>");

            



            if (array[i] >= finish){
                if (loser == null) {
                    loser = $("#name" + i).val();
                }

                else if (loser != null){
                    loser = loser + ", " + $("#name" + i).val();
                }

                endtrue = true;

            }
        }

        round++;

        if (round % players == 0) {
            setTimeout(
                function() 
                {
                    $(".spinningone").css({transform: 'rotateY(0deg)'});
                    $(".perspective").css({bottom: '-380px'});
                }, 3500);
                
            $(".spinningone").css({transform: 'rotateY(1800deg)'});
            $(".perspective").css({bottom: '500px'});
        }
        
        console.log (round);

        if (endtrue == true) {
            $(".nameinput").css({display: "none"});
            $("#roundbutton").css({display: "none"});
            $(".loser").html("The loser is:<br>" + loser);
            for (var i = 1; i <= players; i++) {
                console.log(array[i].value);
            }
        }

        $("#namedisplay" + dealer).css({color: "gray"}); 
        
        dealer = dealer + dealeradd;
        if (dealer == players){
            dealeradd = -1;
        }

        if (dealer == 1){
            dealeradd = 1;
        }

        $("#namedisplay" + dealer).css({color: "red"}); 

        
    });



});