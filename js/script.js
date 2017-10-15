$(document).ready(function(){
	$(".welcome").fadeIn();
    reset(); //for reset button
    function reset(){
    var i=0;

    //animation 
    $("#btn1").mouseover(function(){
    	$(this).animate({width: '50%',height: '20%'});
    });
    $("#btn1").mouseout(function(){
    	$(this).animate({width: '30%',height: '10%'});
    });
     $("#btn2").mouseover(function(){
    	$(this).animate({width: '50%',height: '20%'});
    });
    $("#btn2").mouseout(function(){
    	$(this).animate({width: '30%',height: '10%'});
    });

    //single player
    $("#btn1").on("click",function(){
        $("#c").html("<button type='button'>Reset All</button>").css({"background": "#641E16","font-family":"Comic sans MS","font-size":"2em","color":"#D0D3D4"});
    	var html="";
        
    	html+="CHOOSE: <hr>";
    	html+="<button type='button' class='btn' id='cross'>X</button>&nbsp;&nbsp;&nbsp;";
    	html+="<button type='button' class='btn' id='zero'>0</button>";
    	$("#work").html(html);
    	$("#cross").mouseover(function(){
    	$(this).animate({width: '50%'});
    	});
    	$("#cross").mouseout(function(){
    	$(this).animate({width: '30%'});
   		 });
    	$("#zero").mouseover(function(){
    	$(this).animate({width: '50%'});
    	});
    	$("#zero").mouseout(function(){
    	$(this).animate({width: '30%'});
   		 });

        // if player chooses zero
        $("#cross").on("click",function(){
            
            html="";
            html+="<div id='board'><table><tr id='row1'><td class='square' id='one'></td><td class='square v' id='two'></td><td class='square' id='three'></td></tr><tr id='row2'><td class='square h' id='four'></td><td class='square v h' id='five'></td><td class='square h' id='six'></td></tr><tr id='row3'><td class='square' id='seven'></td><td class='square v' id='eight'></td><td class='square' id='nine'></td></tr></table></div>"
            $("#work").html(html);
                var x=Math.floor(Math.random() * 9) + 1;
                setTimeout(first,500);
                var flag=0;
                $('td').on('click',function(event){
                    $(this).text("X").off('click');
                    setTimeout(comp,500);
                });

                //to change the text of td cells to 0
                function first()
                {
                if(x==1)
                {
                    $("#one").html("0").off('click');
                }
                if(x==2)
                {
                    $("#two").html("0").off('click');
                }
                if(x==3)
                {
                    $("#three").html("0").off('click');
                }
                if(x==4)
                {
                    $("#four").html("0").off('click');
                }
                if(x==5)
                {
                    $("#five").html("0").off('click');
                }
                if(x==6)
                {
                    $("#six").html("0").off('click');
                }
                if(x==7)
                {
                    $("#seven").html("0").off('click');
                }
                if(x==8)
                {
                    $("#eight").html("0").off('click');
                }
                if(x==9)
                {
                    $("#nine").html("0").off('click');
                }
            }
        
        // turn of computer
            function comp()
         {
           // alert("hii");
            if($("#one").html()=="0" && $("#two").html()=="0" && $("#three").html()=="")
            {   
               
                $("#three").html("0").off('click');
                setTimeout(winning,800);
                return;
            }
            if($("#two").html()=="0" && $("#three").html()=="0" && $("#one").html()=="" )
            {
                
                $("#one").html("0").off('click');
                setTimeout(winning,800);
                return;
            }
            if($("#one").html()=="0" && $("#three").html()=="0" && $("#two").html()=="")
            {
                
                $("#two").html("0").off('click');
                setTimeout(winning,800);
                return;
            }
            if($("#four").html()=="0" && $("#five").html()=="0" && $("#six").html()=="")
            {   
                
                $("#six").html("0").off('click');
                setTimeout(winning,800);
                return;
            }
            if($("#five").html()=="0" && $("#six").html()=="0" && $("#four").html()=="")
            {
                
                $("#four").html("0").off('click');
                setTimeout(winning,800);
                return;
            }
            if($("#four").html()=="0" && $("#six").html()=="0" && $("#five").html()=="")
            {
                
                $("#five").html("0").off('click');
                setTimeout(winning,800);
                return;
            }
            if($("#seven").html()=="0" && $("#eight").html()=="0" && $("#nine").html()=="")
            {   
                
                $("#nine").html("0").off('click');
                setTimeout(winning,800);
                return;
            }
            if($("#eight").html()=="0" && $("#nine").html()=="0" && $("#seven").html()=="")
            {
                
                $("#seven").html("0").off('click');
                setTimeout(winning,800);
                return;
            }
            if($("#seven").html()=="0" && $("#nine").html()=="0" && $("#eight").html()=="")
            {
             
                $("#eight").html("0").off('click');
                setTimeout(winning,800);
                return;
            }
            if($("#one").html()=="0" && $("#four").html()=="0" && $("#seven").html()=="")
            {   
                
                $("#seven").html("0").off('click');
                setTimeout(winning,800);
                return;
            }
            if($("#one").html()=="0" && $("#seven").html()=="0" && $("#four").html()=="")
            {
                
                $("#four").html("0").off('click');
                setTimeout(winning,800);
                return;
            }
            if($("#four").html()=="0" && $("#seven").html()=="0" && $("#one").html()=="")
            {
               
                $("#one").html("0").off('click');
                setTimeout(winning,800);
                return;
            }
            if($("#two").html()=="0" && $("#five").html()=="0" && $("#eight").html()=="")
            {   
                $("#eight").html("0").off('click');
                setTimeout(winning,800);
                return;
            }
            if($("#two").html()=="0" && $("#eight").html()=="0" && $("#five").html()=="")
            {

                $("#five").html("0").off('click');
                setTimeout(winning,800);
                return;
            }
            if($("#five").html()=="0" && $("#eight").html()=="0" && $("#two").html()=="")
            {
                $("#two").html("0").off('click');
                setTimeout(winning,800);
                return;
            }
            if($("#three").html()=="0" && $("#six").html()=="0" && $("#nine").html()=="")
            {   
                $("#nine").html("0").off('click');
                setTimeout(winning,800);
                return;
            }
            if($("#three").html()=="0" && $("#nine").html()=="0" && $("#six").html()=="")
            {
                
                $("#six").html("0").off('click');
                setTimeout(winning,800);
                return;
            }
            if($("#six").html()=="0" && $("#nine").html()=="0" && $("#three").html()=="")
            {
                
                $("#three").html("0").off('click');
                setTimeout(winning,800);
                return;
            }
            if($("#one").html()=="0" && $("#five").html()=="0" && $("#nine").html()=="")
            {   
                
                $("#nine").html("0").off('click');
                setTimeout(winning,800);
                return;
            }
            if($("#one").html()=="0" && $("#nine").html()=="0" && $("#five").html()=="")
            {
               
                $("#five").html("0").off('click');
                setTimeout(winning,800);
                return;
            }
            if($("#five").html()=="0" && $("#nine").html()=="0" && $("#one").html()=="")
            {
                $("#one").html("0").off('click');
                setTimeout(winning,800);
                return;
            }
            if($("#three").html()=="0" && $("#five").html()=="0" && $("#seven").html()=="")
            {   
       
                $("#seven").html("0").off('click');
                setTimeout(winning,800);
                return;
            }
            if($("#three").html()=="0" && $("#seven").html()=="0" && $("#five").html()=="")
            {
             
                $("#five").html("0").off('click');
                setTimeout(winning,800);
                return;
            }
            if($("#five").html()=="0" && $("#seven").html()=="0" && $("#three").html()=="")
            {

                $("#three").html("0").off('click');
                setTimeout(winning,800);
                return;
            }     
           
           
            if ($("#one").html() == "" && (($("#three").html() == "X" && $("#two").html() == "X") || ($("#nine").html() == "X" && $("#five").html() == "X") || ($("#seven").html() == "X" && $("#four").html() == "X"))) {
        $('#one').text("0");
        turn = 0;
    } else {
      if ($("#two").html() == "" && (($("#one").html() == "X" && $("#three").html() == "X") || ($("#eight").html() == "X" && $("#five").html() == "X"))) {
        $('#two').text("0");
       
        }
        else{
        if ($("#three").html() == "" && (($("#one").html() == "X" && $("#two").html() == "X") || ($("#seven").html() == "X" && $("#five").html() == "X") || ($("#nine").html() == "X" && $("#six").html() == "X"))) {
            $('#three').text("0");
            
        }
            else{
            if ($("#nine").html() == "" && (($("#seven").html() == "X" && $("#eight").html() == "X") || ($("#one").html() == "X" && $("#five").html() == "X") || ($("#three").html() == "X" && $("#six").html() == "X"))) {
                $('#nine').text("0");
               
        }
                else{
                if ($("#seven").html() == "" && (($("#nine").html() == "X" && $("#eight").html() == "X") || ($("#three").html() == "X" && $("#five").html() == "X") || ($("#one").html() == "X" && $("#four").html() == "X"))) {
                    $('#seven').text("0");
                   
        }
                    else{
                    if ($("#eight").html() == "" && (($("#nine").html() == "X" && $("#seven").html() == "X") || ($("#two").html() == "X" && $("#five").html() == "X"))) {
                        $('#eight').text("0");
                        
        }
                        else{
                        if ($("#four").html() == "" && (($("#six").html() == "X" && $("#five").html() == "X") || ($("#one").html() == "X" && $("#seven").html() == "X"))) {
                            $('#four').text("0");
                            
        }
                            else{
                            if ($("#six").html() == "" && (($("#three").html() == "X" && $("#nine").html() == "X") || ($("#five").html() == "X" && $("#four").html() == "X"))) {
                                $('#six').text("0");
                               
        }
                                else{
                                if ($("#five").html() == "" && (($("#three").html() == "X" && $("#seven").html() == "X") || ($("#nine").html() == "X" && $("#one").html() == "X") || ($("#six").html() == "X" && $("#four").html() == "X") || ($("#eight").html() == "X" && $("#two").html() == "X"))) {
                                    $('#five').text("0");
                                    
        }
                                   else{ // IF NO OPP TO BLOCK A WIN, THEN PLAY IN ONE OF THESE SQUARES
                                    if ($("#five").html() == "") {
                                        $('#five').text("0");
                                        
                                       
                                    }
                                        else{
                                        if ($("#one").html() == "") {
                                            $('#one').text("0");
                                            
                                    }
                                            else{
                                            if ($("#nine").html() == "") {
                                            $('#nine').text("0");
                                           
                                          
                                    } 
                                                else {
                                                if ($("#eight").html() == "") {
                                            $('#eight').text("0");
                                       
                                    }
                                                    else{
                                                    if ($("#four").html() == "") {
                                            $('#four').text("0");
                                           
                                          
                                    }
                                    else
                                    {
                                        $("#work").html("OOPS!!...It's a draw..").css("padding-top","140px");
                                    }
                                                    }
                                                }
                                            }
                                   
                                    
                                        }
                                   }
                                }
                            }
                        }
                    }
                }
            }
        }
        }
    }
    //winning condition of computer
            function winning()
            {
             if($("#one").html()=="0"&&$("#two").html()=="0"&&$("#three").html()=="0")
                    {

                        $("#work").html("");
                        $("#work").html("Computer wins .. !!").css("padding-top","140px");
                        return;

                    }
             if($("#four").html()=="0"&&$("#five").html()=="0"&&$("#six").html()=="0")
                    {
                         $("#work").html("");
                        $("#work").html("Computer wins .. !!").css("padding-top","140px");
                        return;

                    }
             if($("#seven").html()=="0"&&$("#eight").html()=="0"&&$("#nine").html()=="0")
                    {
                         $("#work").html("");
                        $("#work").html("Computer wins .. !!").css("padding-top","140px");
                        return;

                    }
            if($("#one").html()=="0"&&$("#four").html()=="0"&&$("#seven").html()=="0")
                    {
                        $("#work").html("");
                        $("#work").html("Computer wins .. !!").css("padding-top","140px");
                        return;

                    }
             if($("#two").html()=="0"&&$("#five").html()=="0"&&$("#eight").html()=="0")
                    {
                        $("#work").html("");
                        $("#work").html("Computer wins .. !!").css("padding-top","140px");
                        return;
                    }
             if($("#three").html()=="0"&&$("#six").html()=="0"&&$("#nine").html()=="0")
                    {
                        $("#work").html("");
                        $("#work").html("Computer wins .. !!").css("padding-top","140px");
                        return;
                    }
             if($("#one").html()=="0"&&$("#five").html()=="0"&&$("#nine").html()=="0")
                    {
                        $("#work").html("");
                        $("#work").html("Computer wins .. !!").css("padding-top","140px");
                        return;
                    }
             if($("#three").html()=="0"&&$("#five").html()=="0"&&$("#seven").html()=="0")
                    {
                        $("#work").html("");
                        $("#work").html("Computer wins .. !!").css("padding-top","140px");
                        return;
                    }
            }

        
            });
//if user chooses zero
$("#zero").on("click",function(){
            
            html="";
            html+="<div id='board'><table><tr id='row1'><td class='square' id='one'></td><td class='square v' id='two'></td><td class='square' id='three'></td></tr><tr id='row2'><td class='square h' id='four'></td><td class='square v h' id='five'></td><td class='square h' id='six'></td></tr><tr id='row3'><td class='square' id='seven'></td><td class='square v' id='eight'></td><td class='square' id='nine'></td></tr></table></div>"
            $("#work").html(html);
                $('td').on('click',function(event){
                    $(this).text("0").off('click');
                    setTimeout(comp,500);
                });
               
            function comp()
         {
           // alert("hii");
            if($("#one").html()=="X" && $("#two").html()=="X" && $("#three").html()=="")
            {   
               
                $("#three").html("X").off('click');
                setTimeout(winning,800);
                return;
            }
            if($("#two").html()=="X" && $("#three").html()=="X" && $("#one").html()=="" )
            {
                
                $("#one").html("X").off('click');
                setTimeout(winning,800);
                return;
            }
            if($("#one").html()=="X" && $("#three").html()=="X" && $("#two").html()=="")
            {
                
                $("#two").html("X").off('click');
                setTimeout(winning,800);
                return;
            }
            if($("#four").html()=="X" && $("#five").html()=="X" && $("#six").html()=="")
            {   
                
                $("#six").html("X").off('click');
                setTimeout(winning,800);
                return;
            }
            if($("#five").html()=="X" && $("#six").html()=="X" && $("#four").html()=="")
            {
                
                $("#four").html("X").off('click');
                setTimeout(winning,800);
                return;
            }
            if($("#four").html()=="X" && $("#six").html()=="X" && $("#five").html()=="")
            {
                
                $("#five").html("X").off('click');
                setTimeout(winning,800);
                return;
            }
            if($("#seven").html()=="X" && $("#eight").html()=="X" && $("#nine").html()=="")
            {   
                
                $("#nine").html("X").off('click');
                setTimeout(winning,800);
                return;
            }
            if($("#eight").html()=="X" && $("#nine").html()=="X" && $("#seven").html()=="")
            {
                
                $("#seven").html("X").off('click');
                setTimeout(winning,800);
                return;
            }
            if($("#seven").html()=="X" && $("#nine").html()=="X" && $("#eight").html()=="")
            {
             
                $("#eight").html("X").off('click');
                setTimeout(winning,800);
                return;
            }
            if($("#one").html()=="X" && $("#four").html()=="X" && $("#seven").html()=="")
            {   
                
                $("#seven").html("X").off('click');
                setTimeout(winning,800);
                return;
            }
            if($("#one").html()=="X" && $("#seven").html()=="X" && $("#four").html()=="")
            {
                
                $("#four").html("X").off('click');
                setTimeout(winning,800);
                return;
            }
            if($("#four").html()=="X" && $("#seven").html()=="X" && $("#one").html()=="")
            {
               
                $("#one").html("X").off('click');
                setTimeout(winning,800);
                return;
            }
            if($("#two").html()=="X" && $("#five").html()=="X" && $("#eight").html()=="")
            {   
                $("#eight").html("X").off('click');
                setTimeout(winning,800);
                return;
            }
            if($("#two").html()=="X" && $("#eight").html()=="X" && $("#five").html()=="")
            {

                $("#five").html("X").off('click');
                setTimeout(winning,800);
                return;
            }
            if($("#five").html()=="X" && $("#eight").html()=="X" && $("#two").html()=="")
            {
                $("#two").html("X").off('click');
                setTimeout(winning,800);
                return;
            }
            if($("#three").html()=="X" && $("#six").html()=="X" && $("#nine").html()=="")
            {   
                $("#nine").html("X").off('click');
                setTimeout(winning,800);
                return;
            }
            if($("#three").html()=="X" && $("#nine").html()=="X" && $("#six").html()=="")
            {
                
                $("#six").html("X").off('click');
                setTimeout(winning,800);
                return;
            }
            if($("#six").html()=="X" && $("#nine").html()=="X" && $("#three").html()=="")
            {
                
                $("#three").html("X").off('click');
                setTimeout(winning,800);
                return;
            }
            if($("#one").html()=="X" && $("#five").html()=="X" && $("#nine").html()=="")
            {   
                
                $("#nine").html("X").off('click');
                setTimeout(winning,800);
                return;
            }
            if($("#one").html()=="X" && $("#nine").html()=="X" && $("#five").html()=="")
            {
               
                $("#five").html("X").off('click');
                setTimeout(winning,800);
                return;
            }
            if($("#five").html()=="X" && $("#nine").html()=="X" && $("#one").html()=="")
            {
                $("#one").html("X").off('click');
                setTimeout(winning,800);
                return;
            }
            if($("#three").html()=="X" && $("#five").html()=="X" && $("#seven").html()=="")
            {   
       
                $("#seven").html("X").off('click');
                setTimeout(winning,800);
                return;
            }
            if($("#three").html()=="X" && $("#seven").html()=="X" && $("#five").html()=="")
            {
             
                $("#five").html("X").off('click');
                setTimeout(winning,800);
                return;
            }
            if($("#five").html()=="X" && $("#seven").html()=="X" && $("#three").html()=="")
            {

                $("#three").html("X").off('click');
                setTimeout(winning,800);
                return;
            }     
           
           
            if ($("#one").html() == "" && (($("#three").html() == "0" && $("#two").html() == "0") || ($("#nine").html() == "0" && $("#five").html() == "0") || ($("#seven").html() == "0" && $("#four").html() == "0"))) {
        $('#one').text("X");
        //turn = 0;
    } else {
      if ($("#two").html() == "" && (($("#one").html() == "0" && $("#three").html() == "0") || ($("#eight").html() == "0" && $("#five").html() == "0"))) {
        $('#two').text("X");
       
        }
        else{
        if ($("#three").html() == "" && (($("#one").html() == "0" && $("#two").html() == "0") || ($("#seven").html() == "0" && $("#five").html() == "0") || ($("#nine").html() == "0" && $("#six").html() == "0"))) {
            $('#three').text("X");
            
        }
            else{
            if ($("#nine").html() == "" && (($("#seven").html() == "0" && $("#eight").html() == "0") || ($("#one").html() == "0" && $("#five").html() == "0") || ($("#three").html() == "0" && $("#six").html() == "0"))) {
                $('#nine').text("X");
               
        }
                else{
                if ($("#seven").html() == "" && (($("#nine").html() == "0" && $("#eight").html() == "0") || ($("#three").html() == "0" && $("#five").html() == "0") || ($("#one").html() == "0" && $("#four").html() == "0"))) {
                    $('#seven').text("X");
                   
        }
                    else{
                    if ($("#eight").html() == "" && (($("#nine").html() == "0" && $("#seven").html() == "0") || ($("#two").html() == "0" && $("#five").html() == "0"))) {
                        $('#eight').text("X");
                        
        }
                        else{
                        if ($("#four").html() == "" && (($("#six").html() == "0" && $("#five").html() == "0") || ($("#one").html() == "0" && $("#seven").html() == "0"))) {
                            $('#four').text("X");
                            
        }
                            else{
                            if ($("#six").html() == "" && (($("#three").html() == "0" && $("#nine").html() == "0") || ($("#five").html() == "0" && $("#four").html() == "0"))) {
                                $('#six').text("X");
                               
        }
                                else{
                                if ($("#five").html() == "" && (($("#three").html() == "0" && $("#seven").html() == "0") || ($("#nine").html() == "0" && $("#one").html() == "0") || ($("#six").html() == "0" && $("#four").html() == "0") || ($("#eight").html() == "0" && $("#two").html() == "0"))) {
                                    $('#five').text("X");
                                    
        }
                                   else{ // IF NO OPP TO BLOCK A WIN, THEN PLAY IN ONE OF THESE SQUARES
                                    if ($("#five").html() == "") {
                                        $('#five').text("X");
                                        
                                       
                                    }
                                        else{
                                        if ($("#one").html() == "") {
                                            $('#one').text("X");
                                            
                                    }
                                            else{
                                            if ($("#nine").html() == "") {
                                            $('#nine').text("X");
                                           
                                          
                                    } 
                                                else {
                                                if ($("#eight").html() == "") {
                                            $('#eight').text("X");
                                       
                                    }
                                                    else{
                                                    if ($("#four").html() == "") {
                                            $('#four').text("X");
                                           
                                          
                                    }
                                    else
                                    {
                                        $("#work").html("OOPS!!...It's a draw..").css("padding-top","140px");
                                    }
                                                    }
                                                }
                                            }
                                   
                                    
                                        }
                                   }
                                }
                            }
                        }
                    }
                }
            }
        }
        }
    }
            function winning()
            {
             if($("#one").html()=="X"&&$("#two").html()=="X"&&$("#three").html()=="X")
                    {

                        $("#work").html("");
                        $("#work").html("Computer wins .. !!").css("padding-top","140px");
                        return;

                    }
             if($("#four").html()=="X"&&$("#five").html()=="X"&&$("#six").html()=="X")
                    {
                         $("#work").html("");
                        $("#work").html("Computer wins .. !!").css("padding-top","140px");
                        return;

                    }
             if($("#seven").html()=="X"&&$("#eight").html()=="X"&&$("#nine").html()=="X")
                    {
                         $("#work").html("");
                        $("#work").html("Computer wins .. !!").css("padding-top","140px");
                        return;

                    }
            if($("#one").html()=="X"&&$("#four").html()=="X"&&$("#seven").html()=="X")
                    {
                        $("#work").html("");
                        $("#work").html("Computer wins .. !!").css("padding-top","140px");
                        return;

                    }
             if($("#two").html()=="X"&&$("#five").html()=="X"&&$("#eight").html()=="X")
                    {
                        $("#work").html("");
                        $("#work").html("Computer wins .. !!").css("padding-top","140px");
                        return;
                    }
             if($("#three").html()=="X"&&$("#six").html()=="X"&&$("#nine").html()=="X")
                    {
                        $("#work").html("");
                        $("#work").html("Computer wins .. !!").css("padding-top","140px");
                        return;
                    }
             if($("#one").html()=="X"&&$("#five").html()=="X"&&$("#nine").html()=="X")
                    {
                        $("#work").html("");
                        $("#work").html("Computer wins .. !!").css("padding-top","140px");
                        return;
                    }
             if($("#three").html()=="X"&&$("#five").html()=="X"&&$("#seven").html()=="X")
                    {
                        $("#work").html("");
                        $("#work").html("Computer wins .. !!").css("padding-top","140px");
                        return;
                    }
            }

        
            });


    });
    $("#btn2").on("click",function(){
        $("#c").html("<button type='button'>Reset All</button>").css({"background": "#641E16","font-family":"Comic sans MS","font-size":"2em","color":"#D0D3D4"});
    	var html="";
    	html+="CHOOSE (PLAYER 1) : <hr>";
    	html+="<button type='button' class='btn' id='cross'>X</button>&nbsp;&nbsp;";
    	html+="<button type='button' class='btn' id='zero'>0</button>";
    	$("#work").html(html);
    	$("#cross").mouseover(function(){
    	$(this).animate({width: '50%'});
    	});
    	$("#cross").mouseout(function(){
    	$(this).animate({width: '30%'});
   		 });
    	$("#zero").mouseover(function(){
    	$(this).animate({width: '50%'});
    	});
    	$("#zero").mouseout(function(){
    	$(this).animate({width: '30%'});
   		 });
    	$("#cross").on("click",function(){
    		html="";
    		html+="<div id='board'><table><tr id='row1'><td class='square' id='one'></td><td class='square v' id='two'></td><td class='square' id='three'></td></tr><tr id='row2'><td class='square h' id='four'></td><td class='square v h' id='five'></td><td class='square h' id='six'></td></tr><tr id='row3'><td class='square' id='seven'></td><td class='square v' id='eight'></td><td class='square' id='nine'></td></tr></table></div>"
    		$("#work").html(html);
            var htm="";
            htm+="Go Player 1";
            ht="Go Player 2"

            $("#a").html(htm).css({"background-color":"#641E16","font-family":"Comic sans MS","font-size":"2em","color":"#D0D3D4","z-index":"-1"}).animate({'top': '+=-45px'}, 500);
                
                
                     $("#one").click(function(){
                        if(i%2==0)
                        {
                            console.log(i);
                            $("#one").html("X").off('click');
                           
                       
                            i++;
                            //alert(one);
                            $("#a").slideDown("slow");
                            $("#a").html("").css({"background-color":"rgb(23, 32, 42)"});

                            $("#b").html(ht).css({"background-color":"#641E16","font-family":"Comic sans MS","font-size":"2em","color":"#D0D3D4"});
                             if(i>=4)
                        {
                            setTimeout(win,1500);
                        }
                            return;
                            
                        }
                        if(i%2!=0)
                        {
                            console.log(i);
                            $("#one").html("0").off('click');
                            
                            i++;
                            $("#b").slideDown("slow");
                            $("#b").html("").css({"background-color":"rgb(23, 32, 42)"});

                            $("#a").html(htm).css({"background-color":"#641E16","font-family":"Comic sans MS","font-size":"2em","color":"#D0D3D4"});
                            if(i>4)
                        {
                            setTimeout(win,1500);
                        }
                            return;
                            
                        }
                        
                        
                    });
                     $("#two").click(function(){
                        if(i%2==0)
                        {
                            console.log(i);
                            $("#two").html("X").off('click');
                            
                            i++;
                            $("#a").slideDown("slow");
                            $("#a").html("").css({"background-color":"rgb(23, 32, 42)"});

                            $("#b").html(ht).css({"background-color":"#641E16","font-family":"Comic sans MS","font-size":"2em","color":"#D0D3D4"});
                             if(i>4)
                        {
                            setTimeout(win,1500);
                        }
                            return;
                        }
                        if(i%2!=0)
                        {
                            console.log(i);
                            $("#two").html("0").off('click');
                            
                            i++;
                            $("#b").slideDown("slow");
                            $("#b").html("").css({"background-color":"rgb(23, 32, 42)"});

                            $("#a").html(htm).css({"background-color":"#641E16","font-family":"Comic sans MS","font-size":"2em","color":"#D0D3D4"}); 
                            if(i>4)
                        {
                            setTimeout(win,1500);
                        }
                            return;
                        }
                        
                    });
                     $("#three").click(function(){
                        if(i%2==0)
                        {
                            console.log(i);
                            $("#three").html("X").off('click');
                            

                            i++;
                            $("#a").slideDown("slow");
                            $("#a").html("").css({"background-color":"rgb(23, 32, 42)"});

                            $("#b").html(ht).css({"background-color":"#641E16","font-family":"Comic sans MS","font-size":"2em","color":"#D0D3D4"});
                             if(i>=4)
                        {
                            setTimeout(win,1500);
                        }
                            return;
                        }
                        if(i%2!=0)
                        {
                            console.log(i);
                            $("#three").html("0").off('click');
                             
                      
                            i++;
                            $("#b").slideDown("slow");
                            $("#b").html("").css({"background-color":"rgb(23, 32, 42)"});

                            $("#a").html(htm).css({"background-color":"#641E16","font-family":"Comic sans MS","font-size":"2em","color":"#D0D3D4"});
                            if(i>=4)
                        {
                            setTimeout(win,1500);
                        }
                            return;
                        }
                        
                    });
                     $("#four").click(function(){
                        if(i%2==0)
                        {
                            console.log(i);
                            $("#four").html("X").off('click');
                             
                            i++;
                            $("#a").slideDown("slow");
                            $("#a").html("").css({"background-color":"rgb(23, 32, 42)"});

                            $("#b").html(ht).css({"background-color":"#641E16","font-family":"Comic sans MS","font-size":"2em","color":"#D0D3D4"});
                           if(i>4)
                        {
                            setTimeout(win,1500);
                        }
                            return;
                        }
                        if(i%2!=0)
                        {
                            console.log(i);
                            $("#four").html("0").off('click');
                            
                        
                            i++;
                            $("#b").slideDown("slow");
                            $("#b").html("").css({"background-color":"rgb(23, 32, 42)"});

                            $("#a").html(htm).css({"background-color":"#641E16","font-family":"Comic sans MS","font-size":"2em","color":"#D0D3D4"});
                            if(i>4)
                        {
                            setTimeout(win,1500);
                        }
                            return;
                        }
                         
                    });
                     $("#five").click(function(){
                        if(i%2==0)
                        {
                            console.log(i);
                            $("#five").html("X").off('click');
                             
                       
                            i++;
                            $("#a").slideDown("slow");
                            $("#a").html("").css({"background-color":"rgb(23, 32, 42)"});

                            $("#b").html(ht).css({"background-color":"#641E16","font-family":"Comic sans MS","font-size":"2em","color":"#D0D3D4"});
                           if(i>4)
                        {
                            setTimeout(win,1500);
                        }
                            return;
                        }
                        if(i%2!=0)
                        {
                            console.log(i);
                            $("#five").html("0").off('click');
                         
                        
                            i++;
                            $("#b").slideDown("slow");
                            $("#b").html("").css({"background-color":"rgb(23, 32, 42)"});

                            $("#a").html(htm).css({"background-color":"#641E16","font-family":"Comic sans MS","font-size":"2em","color":"#D0D3D4"});
                               if(i>4)
                        {
                            setTimeout(win,1500);
                        }
                            return;
                        }
                         
                    });
                     $("#six").click(function(){
                        if(i%2==0)
                        {
                            console.log(i);
                            $("#six").html("X").off('click');
                          
                         
                            i++;
                            $("#a").slideDown("slow");
                            $("#a").html("").css({"background-color":"rgb(23, 32, 42)"});

                            $("#b").html(ht).css({"background-color":"#641E16","font-family":"Comic sans MS","font-size":"2em","color":"#D0D3D4"});
                               if(i>4)
                        {
                            setTimeout(win,1500);
                        }
                            return;
                        }
                         if(i%2!=0)
                        {
                            console.log(i);
                            $("#six").html("0").off('click');
                           
                       
                            i++;
                            $("#b").slideDown("slow");
                            $("#b").html("").css({"background-color":"rgb(23, 32, 42)"});

                            $("#a").html(htm).css({"background-color":"#641E16","font-family":"Comic sans MS","font-size":"2em","color":"#D0D3D4"});
                              if(i>4)
                        {
                            setTimeout(win,1500);
                        }
                            return;
                        }
                        
                        
                    });
                     $("#seven").click(function(){
                        if(i%2==0)
                        {
                            console.log(i);
                            $("#seven").html("X").off('click');
                            
                        
                            i++;
                            $("#a").slideDown("slow");
                            $("#a").html("").css({"background-color":"rgb(23, 32, 42)"});

                            $("#b").html(ht).css({"background-color":"#641E16","font-family":"Comic sans MS","font-size":"2em","color":"#D0D3D4"});
                            if(i>4)
                        {
                            setTimeout(win,1500);
                        }
                            return;
                        }
                        if(i%2!=0)
                        {
                            console.log(i);
                            $("#seven").html("0").off('click');
                            
                            i++;
                            $("#b").slideDown("slow");
                            $("#b").html("").css({"background-color":"rgb(23, 32, 42)"});

                            $("#a").html(htm).css({"background-color":"#641E16","font-family":"Comic sans MS","font-size":"2em","color":"#D0D3D4"});
                            if(i>4)
                        {
                            setTimeout(win,1500);
                        }
                            return;
                        }
                         
                    });
                     $("#eight").click(function(){
                        if(i%2==0)
                        {
                            console.log(i);
                            $("#eight").html("X").off('click');
                             
                        
                            i++;
                            $("#a").slideDown("slow");
                            $("#a").html("").css({"background-color":"rgb(23, 32, 42)"});

                            $("#b").html(ht).css({"background-color":"#641E16","font-family":"Comic sans MS","font-size":"2em","color":"#D0D3D4"});
                            if(i>4)
                        {
                            setTimeout(win,1500);
                        }
                            return;
                        }
                        if(i%2!=0)
                        {
                            console.log(i);
                            $("#eight").html("0").off('click');
                            
                        
                            i++;
                            $("#b").slideDown("slow");
                            $("#b").html("").css({"background-color":"rgb(23, 32, 42)"});

                            $("#a").html(htm).css({"background-color":"#641E16","font-family":"Comic sans MS","font-size":"2em","color":"#D0D3D4"});
                             if(i>4)
                        {
                            setTimeout(win,1500);
                        }
                            return;
                        }
                        
                    });
                     $("#nine").click(function(){
                        if(i%2==0)
                        {
                            console.log(i);
                            $("#nine").html("X").off('click');
                            
                            i++;
                            $("#a").slideDown("slow");
                            $("#a").html("").css({"background-color":"rgb(23, 32, 42)"});

                            $("#b").html(ht).css({"background-color":"#641E16","font-family":"Comic sans MS","font-size":"2em","color":"#D0D3D4"});
                             if(i>4)
                        {
                            setTimeout(win,1500);
                        }
                            return;
                        }
                        if(i%2!=0)
                        {
                            console.log(i);
                            $("#nine").html("0").off('click');
                             
                        
                            i++;
                            $("#b").slideDown("slow");
                            $("#b").html("").css({"background-color":"rgb(23, 32, 42)"});

                            $("#a").html(htm).css({"background-color":"#641E16","font-family":"Comic sans MS","font-size":"2em","color":"#D0D3D4"});
                            if(i>4)
                        {
                            setTimeout(win,1500);
                        }
                            return;
                        }
                       
                    });

                function win()
            {
                        $("#a").html("");
                    $("#b").html("");


                    if($("#one").html()=="X"&&$("#two").html()=="X"&&$("#three").html()=="X")
                    {

                        $("#work").html("");
                        $("#work").html("Player 1 wins .. !!").css("padding-top","140px");
                        return;

                    }
                    else if($("#four").html()=="X"&&$("#five").html()=="X"&&$("#six").html()=="X")
                    {
                        $("#work").html("");
                        $("#work").html("Player 1 wins .. !!").css("padding-top","140px");
                        return;
                    }
                    else if($("#seven").html()=="X"&&$("#eight").html()=="X"&&$("#nine").html()=="X")
                    {
                        $("#work").html("");
                        $("#work").html("Player 1 wins .. !!").css("padding-top","140px");
                        return;
                    }
                    else if($("#one").html()=="X"&&$("#four").html()=="X"&&$("#seven").html()=="X")
                    {
                        $("#work").html("");
                        $("#work").html("Player 1 wins .. !!").css("padding-top","140px");
                        return;
                    }
                    else if($("#two").html()=="X"&&$("#five").html()=="X"&&$("#eight").html()=="X")
                    {
                        $("#work").html("");
                        $("#work").html("Player 1 wins .. !!").css("padding-top","140px");
                        return;
                    }
                    else if($("#three").html()=="X"&&$("#six").html()=="X"&&$("#nine").html()=="X")
                    {
                        $("#work").html("");
                        $("#work").html("Player 1 wins .. !!").css("padding-top","140px");
                        return;
                    }
                    else if($("#one").html()=="X"&&$("#five").html()=="X"&&$("#nine").html()=="X")
                    {
                        $("#work").html("");
                        $("#work").html("Player 1 wins .. !!").css("padding-top","140px");
                        return;
                    }
                    else if($("#three").html()=="X"&&$("#five").html()=="X"&&$("#seven").html()=="X")
                    {
                        $("#work").html("");
                        $("#work").html("Player 1 wins .. !!").css("padding-top","140px");
                        return;
                    }
                    else if($("#one").html()=="0"&&$("#two").html()=="0"&&$("#three").html()=="0")
                    {

                        $("#work").html("");
                        $("#work").html("Player 2 wins .. !!").css("padding-top","140px");
                        return;

                    }
                    else if($("#four").html()=="0"&&$("#five").html()=="0"&&$("#six").html()=="0")
                    {
                         $("#work").html("");
                        $("#work").html("Player 2 wins .. !!").css("padding-top","140px");
                        return;

                    }
                    else if($("#seven").html()=="0"&&$("#eight").html()=="0"&&$("#nine").html()=="0")
                    {
                         $("#work").html("");
                        $("#work").html("Player 2 wins .. !!").css("padding-top","140px");
                        return;

                    }
                    else if($("#one").html()=="0"&&$("#four").html()=="0"&&$("#seven").html()=="0")
                    {
                        $("#work").html("");
                        $("#work").html("Player 2 wins .. !!").css("padding-top","140px");
                        return;

                    }
                    else if($("#two").html()=="0"&&$("#five").html()=="0"&&$("#eight").html()=="0")
                    {
                        $("#work").html("");
                        $("#work").html("Player 2 wins .. !!").css("padding-top","140px");
                        return;
                    }
                    else if($("#three").html()=="0"&&$("#six").html()=="0"&&$("#nine").html()=="0")
                    {
                        $("#work").html("");
                        $("#work").html("Player 2 wins .. !!").css("padding-top","140px");
                        return;
                    }
                    else if($("#one").html()=="0"&&$("#five").html()=="0"&&$("#nine").html()=="0")
                    {
                        $("#work").html("");
                        $("#work").html("Player 2 wins .. !!").css("padding-top","140px");
                        return;
                    }
                    else if($("#three").html()=="0"&&$("#five").html()=="0"&&$("#seven").html()=="0")
                    {
                        $("#work").html("");
                        $("#work").html("Player 2 wins .. !!").css("padding-top","140px");
                        return;
                    }
                    else
                    {
                        if(i==9)
                        {
                            $("#work").html("");
                            $("#work").html("OOPS!!...Its a draw..").css("padding-top","140px");
                            return;
                        }
                        
                    }
             }

               
    	});
$("#zero").on("click",function(){
            html="";
            html+="<div id='board'><table><tr id='row1'><td class='square' id='one'></td><td class='square v' id='two'></td><td class='square' id='three'></td></tr><tr id='row2'><td class='square h' id='four'></td><td class='square v h' id='five'></td><td class='square h' id='six'></td></tr><tr id='row3'><td class='square' id='seven'></td><td class='square v' id='eight'></td><td class='square' id='nine'></td></tr></table></div>"
            $("#work").html(html);
            var htm="";
            htm+="Go Player 1";
            ht="Go Player 2"

            $("#a").html(htm).css({"background-color":"#641E16","font-family":"Comic sans MS","font-size":"2em","color":"#D0D3D4","z-index":"-1"}).animate({'top': '+=-45px'}, 500);
                
                
                     $("#one").click(function(){
                        if(i%2==0)
                        {
                            console.log(i);
                            $("#one").html("0").off('click');
                           
                       
                            i++;
                            //alert(one);
                            $("#a").slideDown("slow");
                            $("#a").html("").css({"background-color":"rgb(23, 32, 42)"});

                            $("#b").html(ht).css({"background-color":"#641E16","font-family":"Comic sans MS","font-size":"2em","color":"#D0D3D4"});
                             if(i>=4)
                        {
                            setTimeout(win,1500);
                        }
                            return;
                            
                        }
                        if(i%2!=0)
                        {
                            console.log(i);
                            $("#one").html("X").off('click');
                            
                            i++;
                            $("#b").slideDown("slow");
                            $("#b").html("").css({"background-color":"rgb(23, 32, 42)"});

                            $("#a").html(htm).css({"background-color":"#641E16","font-family":"Comic sans MS","font-size":"2em","color":"#D0D3D4"});
                            if(i>4)
                        {
                            setTimeout(win,1500);
                        }
                            return;
                            
                        }
                        
                        
                    });
                     $("#two").click(function(){
                        if(i%2==0)
                        {
                            console.log(i);
                            $("#two").html("0").off('click');
                            
                            i++;
                            $("#a").slideDown("slow");
                            $("#a").html("").css({"background-color":"rgb(23, 32, 42)"});

                            $("#b").html(ht).css({"background-color":"#641E16","font-family":"Comic sans MS","font-size":"2em","color":"#D0D3D4"});
                             if(i>4)
                        {
                            setTimeout(win,1500);
                        }
                            return;
                        }
                        if(i%2!=0)
                        {
                            console.log(i);
                            $("#two").html("X").off('click');
                            
                            i++;
                            $("#b").slideDown("slow");
                            $("#b").html("").css({"background-color":"rgb(23, 32, 42)"});

                            $("#a").html(htm).css({"background-color":"#641E16","font-family":"Comic sans MS","font-size":"2em","color":"#D0D3D4"}); 
                            if(i>4)
                        {
                            setTimeout(win,1500);
                        }
                            return;
                        }
                        
                    });
                     $("#three").click(function(){
                        if(i%2==0)
                        {
                            console.log(i);
                            $("#three").html("0").off('click');
                            

                            i++;
                            $("#a").slideDown("slow");
                            $("#a").html("").css({"background-color":"rgb(23, 32, 42)"});

                            $("#b").html(ht).css({"background-color":"#641E16","font-family":"Comic sans MS","font-size":"2em","color":"#D0D3D4"});
                             if(i>=4)
                        {
                            setTimeout(win,1500);
                        }
                            return;
                        }
                        if(i%2!=0)
                        {
                            console.log(i);
                            $("#three").html("X").off('click');
                             
                      
                            i++;
                            $("#b").slideDown("slow");
                            $("#b").html("").css({"background-color":"rgb(23, 32, 42)"});

                            $("#a").html(htm).css({"background-color":"#641E16","font-family":"Comic sans MS","font-size":"2em","color":"#D0D3D4"});
                            if(i>=4)
                        {
                            setTimeout(win,1500);
                        }
                            return;
                        }
                        
                    });
                     $("#four").click(function(){
                        if(i%2==0)
                        {
                            console.log(i);
                            $("#four").html("0").off('click');
                             
                            i++;
                            $("#a").slideDown("slow");
                            $("#a").html("").css({"background-color":"rgb(23, 32, 42)"});

                            $("#b").html(ht).css({"background-color":"#641E16","font-family":"Comic sans MS","font-size":"2em","color":"#D0D3D4"});
                           if(i>4)
                        {
                            setTimeout(win,1500);
                        }
                            return;
                        }
                        if(i%2!=0)
                        {
                            console.log(i);
                            $("#four").html("X").off('click');
                            
                        
                            i++;
                            $("#b").slideDown("slow");
                            $("#b").html("").css({"background-color":"rgb(23, 32, 42)"});

                            $("#a").html(htm).css({"background-color":"#641E16","font-family":"Comic sans MS","font-size":"2em","color":"#D0D3D4"});
                            if(i>4)
                        {
                            setTimeout(win,1500);
                        }
                            return;
                        }
                         
                    });
                     $("#five").click(function(){
                        if(i%2==0)
                        {
                            console.log(i);
                            $("#five").html("0").off('click');
                             
                       
                            i++;
                            $("#a").slideDown("slow");
                            $("#a").html("").css({"background-color":"rgb(23, 32, 42)"});

                            $("#b").html(ht).css({"background-color":"#641E16","font-family":"Comic sans MS","font-size":"2em","color":"#D0D3D4"});
                           if(i>4)
                        {
                            setTimeout(win,1500);
                        }
                            return;
                        }
                        if(i%2!=0)
                        {
                            console.log(i);
                            $("#five").html("X").off('click');
                         
                        
                            i++;
                            $("#b").slideDown("slow");
                            $("#b").html("").css({"background-color":"rgb(23, 32, 42)"});

                            $("#a").html(htm).css({"background-color":"#641E16","font-family":"Comic sans MS","font-size":"2em","color":"#D0D3D4"});
                               if(i>4)
                        {
                            setTimeout(win,1500);
                        }
                            return;
                        }
                         
                    });
                     $("#six").click(function(){
                        if(i%2==0)
                        {
                            console.log(i);
                            $("#six").html("0").off('click');
                          
                         
                            i++;
                            $("#a").slideDown("slow");
                            $("#a").html("").css({"background-color":"rgb(23, 32, 42)"});

                            $("#b").html(ht).css({"background-color":"#641E16","font-family":"Comic sans MS","font-size":"2em","color":"#D0D3D4"});
                               if(i>4)
                        {
                            setTimeout(win,1500);
                        }
                            return;
                        }
                         if(i%2!=0)
                        {
                            console.log(i);
                            $("#six").html("X").off('click');
                           
                       
                            i++;
                            $("#b").slideDown("slow");
                            $("#b").html("").css({"background-color":"rgb(23, 32, 42)"});

                            $("#a").html(htm).css({"background-color":"#641E16","font-family":"Comic sans MS","font-size":"2em","color":"#D0D3D4"});
                              if(i>4)
                        {
                            setTimeout(win,1500);
                        }
                            return;
                        }
                        
                        
                    });
                     $("#seven").click(function(){
                        if(i%2==0)
                        {
                            console.log(i);
                            $("#seven").html("0").off('click');
                            
                        
                            i++;
                            $("#a").slideDown("slow");
                            $("#a").html("").css({"background-color":"rgb(23, 32, 42)"});

                            $("#b").html(ht).css({"background-color":"#641E16","font-family":"Comic sans MS","font-size":"2em","color":"#D0D3D4"});
                            if(i>4)
                        {
                            setTimeout(win,1500);
                        }
                            return;
                        }
                        if(i%2!=0)
                        {
                            console.log(i);
                            $("#seven").html("X").off('click');
                            
                            i++;
                            $("#b").slideDown("slow");
                            $("#b").html("").css({"background-color":"rgb(23, 32, 42)"});

                            $("#a").html(htm).css({"background-color":"#641E16","font-family":"Comic sans MS","font-size":"2em","color":"#D0D3D4"});
                            if(i>4)
                        {
                            setTimeout(win,1500);
                        }
                            return;
                        }
                         
                    });
                     $("#eight").click(function(){
                        if(i%2==0)
                        {
                            console.log(i);
                            $("#eight").html("0").off('click');
                             
                        
                            i++;
                            $("#a").slideDown("slow");
                            $("#a").html("").css({"background-color":"rgb(23, 32, 42)"});

                            $("#b").html(ht).css({"background-color":"#641E16","font-family":"Comic sans MS","font-size":"2em","color":"#D0D3D4"});
                            if(i>4)
                        {
                            setTimeout(win,1500);
                        }
                            return;
                        }
                        if(i%2!=0)
                        {
                            console.log(i);
                            $("#eight").html("X").off('click');
                            
                        
                            i++;
                            $("#b").slideDown("slow");
                            $("#b").html("").css({"background-color":"rgb(23, 32, 42)"});

                            $("#a").html(htm).css({"background-color":"#641E16","font-family":"Comic sans MS","font-size":"2em","color":"#D0D3D4"});
                             if(i>4)
                        {
                            setTimeout(win,1500);
                        }
                            return;
                        }
                        
                    });
                     $("#nine").click(function(){
                        if(i%2==0)
                        {
                            console.log(i);
                            $("#nine").html("0").off('click');
                            
                            i++;
                            $("#a").slideDown("slow");
                            $("#a").html("").css({"background-color":"rgb(23, 32, 42)"});

                            $("#b").html(ht).css({"background-color":"#641E16","font-family":"Comic sans MS","font-size":"2em","color":"#D0D3D4"});
                             if(i>4)
                        {
                            setTimeout(win,1500);
                        }
                            return;
                        }
                        if(i%2!=0)
                        {
                            console.log(i);
                            $("#nine").html("X").off('click');
                             
                        
                            i++;
                            $("#b").slideDown("slow");
                            $("#b").html("").css({"background-color":"rgb(23, 32, 42)"});

                            $("#a").html(htm).css({"background-color":"#641E16","font-family":"Comic sans MS","font-size":"2em","color":"#D0D3D4"});
                            if(i>4)
                        {
                            setTimeout(win,1500);
                        }
                            return;
                        }
                       
                    });

                function win()
            {
                        $("#a").html("");
                    $("#b").html("");


                    if($("#one").html()=="0"&&$("#two").html()=="0"&&$("#three").html()=="0")
                    {

                        $("#work").html("");
                        $("#work").html("Player 1 wins .. !!").css("padding-top","140px");
                        return;

                    }
                    else if($("#four").html()=="0"&&$("#five").html()=="0"&&$("#six").html()=="0")
                    {
                        $("#work").html("");
                        $("#work").html("Player 1 wins .. !!").css("padding-top","140px");
                        return;
                    }
                    else if($("#seven").html()=="0"&&$("#eight").html()=="0"&&$("#nine").html()=="0")
                    {
                        $("#work").html("");
                        $("#work").html("Player 1 wins .. !!").css("padding-top","140px");
                        return;
                    }
                    else if($("#one").html()=="0"&&$("#four").html()=="0"&&$("#seven").html()=="0")
                    {
                        $("#work").html("");
                        $("#work").html("Player 1 wins .. !!").css("padding-top","140px");
                        return;
                    }
                    else if($("#two").html()=="0"&&$("#five").html()=="0"&&$("#eight").html()=="0")
                    {
                        $("#work").html("");
                        $("#work").html("Player 1 wins .. !!").css("padding-top","140px");
                        return;
                    }
                    else if($("#three").html()=="0"&&$("#six").html()=="0"&&$("#nine").html()=="0")
                    {
                        $("#work").html("");
                        $("#work").html("Player 1 wins .. !!").css("padding-top","140px");
                        return;
                    }
                    else if($("#one").html()=="0"&&$("#five").html()=="0"&&$("#nine").html()=="0")
                    {
                        $("#work").html("");
                        $("#work").html("Player 1 wins .. !!").css("padding-top","140px");
                        return;
                    }
                    else if($("#three").html()=="0"&&$("#five").html()=="0"&&$("#seven").html()=="0")
                    {
                        $("#work").html("");
                        $("#work").html("Player 1 wins .. !!").css("padding-top","140px");
                        return;
                    }
                    else if($("#one").html()=="X"&&$("#two").html()=="X"&&$("#three").html()=="X")
                    {

                        $("#work").html("");
                        $("#work").html("Player 2 wins .. !!").css("padding-top","140px");
                        return;

                    }
                    else if($("#four").html()=="X"&&$("#five").html()=="X"&&$("#six").html()=="X")
                    {
                         $("#work").html("");
                        $("#work").html("Player 2 wins .. !!").css("padding-top","140px");
                        return;

                    }
                    else if($("#seven").html()=="X"&&$("#eight").html()=="X"&&$("#nine").html()=="X")
                    {
                         $("#work").html("");
                        $("#work").html("Player 2 wins .. !!").css("padding-top","140px");
                        return;

                    }
                    else if($("#one").html()=="X"&&$("#four").html()=="X"&&$("#seven").html()=="X")
                    {
                        $("#work").html("");
                        $("#work").html("Player 2 wins .. !!").css("padding-top","140px");
                        return;

                    }
                    else if($("#two").html()=="X"&&$("#five").html()=="X"&&$("#eight").html()=="X")
                    {
                        $("#work").html("");
                        $("#work").html("Player 2 wins .. !!").css("padding-top","140px");
                        return;
                    }
                    else if($("#three").html()=="X"&&$("#six").html()=="X"&&$("#nine").html()=="X")
                    {
                        $("#work").html("");
                        $("#work").html("Player 2 wins .. !!").css("padding-top","140px");
                        return;
                    }
                    else if($("#one").html()=="X"&&$("#five").html()=="X"&&$("#nine").html()=="X")
                    {
                        $("#work").html("");
                        $("#work").html("Player 2 wins .. !!").css("padding-top","140px");
                        return;
                    }
                    else if($("#three").html()=="X"&&$("#five").html()=="X"&&$("#seven").html()=="X")
                    {
                        $("#work").html("");
                        $("#work").html("Player 2 wins .. !!").css("padding-top","140px");
                        return;
                    }
                    else
                    {
                        if(i==9)
                        {
                            $("#work").html("");
                            $("#work").html("OOPS!!...Its a draw..").css("padding-top","140px");
                            return;
                        }
                        
                    }
             }

               
        });




    });
}
$("#c").click(function(){
    html="";
    html+="Which mode would you like to play?<br><br><button type='button' class='btn btn-lg' id='btn1'>1 Player</button><br><br><button type='button' class='btn btn-lg' id='btn2'>2 Player</button>"
    $("#work").html(html).css({"background": "rgb(211,211,211)","height":"470px","font-size": "3.5em","text-align": "center","font-family": "lato","padding-top": "2%"});
    reset();
});
});