 $(function(){
            //deleteAllCookies();
            //alert(document.cookie.length);
            //document.cookie.clear();
            if(sessionStorage.jarvis != "1")
            {
                jarvis_intro();
                sessionStorage.clear();
                sessionStorage.setItem("jarvis","1");
            }
            else
            {
                $("#cover").remove();
            }
            
            $("#incomplete").animate({
                'left':'5%',
                'top':'5%'
            });
            
            $("#complete").animate({
                'right':'5%',
                'top':'5%'
            });
            
            $("#taskAdder").animate({
                'top':'40%'
            });
            
 
            for(i=1;i<=document.cookie.length;i++)
            {
              $("#todoTable").append('<tr><td>' + getCookie("task"+i) + '</td></tr>');
            }
            
       }); 
       
       function jarvis_intro()
       {
        audio = new Audio();
        audio.src = "Robotic_Countdown.mp3";
        audio.play();
        
        intro = new Audio();
        intro.src = "I_am_jarvis.mp3";
        
        assist = new Audio();
        assist.src = "jarvis_assist.mp3";
        
        $("#cover").animate({
            backgroundColor:"#000000"
        });
        
        
        
        setTimeout(function()
        {
            $('#counter').fadeIn();
            var c = 5;
            $("#cv").html(c);
            
            setInterval(function()
            {
                if(c > 1)
                {
                    $('#cv').html(--c);
                }
                else
                {
                    clearInterval();
                }
            },1000);
            
        },4000)
        
       setTimeout(function(){
        $('#cover').html('<h1>ENTER THE PASSWORD</h1><div id="pword"><input type="password" id="pass" class="input" /><button id="btn" class="addBtn" style="border: none;">Enter</button></div>');
        $("#btn").click(function()
        {
            if($("#pass").val() == "1234")
            {
                intro.play();
                $("#cover").html('<span style="font-size: 500%;" id="jar">I AM JARVIS.<br/> <br/>I AM HERE TO ASSIST YOU.</span>');
                setTimeout(function(){
                    assist.play();
                    $("#cover>span").append("<br/><br/>WITH VARITIES OF TASKS.");
                    setTimeout(function()
                    {
                        $("#cover>span").append("<br/>24 HRS A DAY 7 DAYS A WEEK.");
                        
                    },3500);
                },4000);
                setTimeout(function()
                {
                   $("#cover").remove(); 
                },10000);
            }
        });
       },8500);
        
       }
                
        function setCookie(cname, cvalue, exdays) {
            var d = new Date();
            d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
            var expires = "expires="+d.toUTCString();
            document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
        }
        
        function getCookie(cname) {
            var name = cname + "=";
            var ca = document.cookie.split(';');
            for(var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length);
                }
            }
            return "";
        }
 
                


// This function creates a new list item when `add button` is clicked
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  
      if(/\S/.test(inputValue))                 // Checking if the task field is empty.
       {
        c = (document.cookie.length + 1);
        setCookie("task"+c,inputValue,1);
        $("#todoTable").append('<tr><td>' + inputValue + '</td></tr>');
        
       } 
      else
      {
          alert("Please Enter Some Task.");
      }
}

