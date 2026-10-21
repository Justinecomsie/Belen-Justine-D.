$(document).ready(function(){
    $(".btn1").click(function(){
        $(".header").text("MABUHAY EVERYONE!")
    })

    $(".btn1").dblclick(function(){
        $(".header").text("HEHEEHEHEHE! :)")
    })

    $(".btn1").click(function(){
        $(".message").text("You clicked the button <3")
    })

    $(".btn1").dblclick(function(){
        $(".message").text("You double clicked the button <3<3")
    })

    $(".btn1").mousedown(function(){
        $(this).css("background", "blue")
        $(".message").text("Your mouse pressing the button! :0")
    })

    $(".btn1").mouseup(function(){
        $(this).css("background", "darkred")
    })

    $(".btn1").mouseover(function(){
        $(".message").text("Your mouse reached the button.")
    })

    $(".btn1").mouseout(function(){
        $(".message").text("Your mouse not reached the button.")
    })

    $(".btn2").click(function(){
        $(".info").hide("slow")
    })

    $(".btn3").click(function(){
        $(".info").show("slow")
    })

    $("#course").change(function(){
        $(".mess").text($(this).val())
    })

     $("#course").change(function(){
        $(".message1").text($(this).val())
    })




    $(".btneven").click(function(){
        $("tr:even").css("background", "navy")
        $("tr:even").css("color", "white")
    })

    $(".btneven").dblclick(function(){
        $("tr:even").css("background", "")
        $("tr:even").css("color", "black")
    })

    $(".btnodd").click(function(){
        $("tr:odd").css("background", "darkred")
        $("tr:odd").css("color", "white")
    })

    $(".btnodd").dblclick(function(){
        $("tr:odd").css("background", "")
        $("tr:odd").css("color", "black")
    })

    $(".btnhide").click(function(){
        $("#table").hide("slow")
    })

    $(".btnshow").click(function(){
        $("#table").show(1000)
    })

})