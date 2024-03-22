$(document).ready(function(){
    let obj = document.getElementById("happy");
    let cat=document.getElementById("popcat");
    let cata=document.getElementById("popcata");
    let jumps = 3;
    $("#happy").click(function(){

        if (jumps > 0) {
            // 生成随机的左边距和上边距
            let w =Math.floor(Math.random() *100);
            let h =Math.floor(Math.random() *100);
    
            // 将随机位置应用到物件上
            obj.style.left = h + "%";
            obj.style.top = w + "%";

    
            // 减少剩余的跳跃次数
            jumps--;

        }

        else{
            $("#happy").hide();

            let w =Math.floor(Math.random() *100);
            let h =Math.floor(Math.random() *100);
    
            cat.style.left = h + "%";
            cat.style.top = w + "%";
            cata.style.left = h + "%";
            cata.style.top = w + "%";
    
            $("#popcat").show();
        }

        

    });
    $("#popcat").mousedown(function(){

        $("#popcat").hide();
        $("#popcata").show();
    });
    $("#popcata").mouseup(function(){
        $("#popcata").hide();
        $("#happycat").show();
        $("#happycat")[0].currentTime=0;
        $("#happycat")[0].play();
    });


})