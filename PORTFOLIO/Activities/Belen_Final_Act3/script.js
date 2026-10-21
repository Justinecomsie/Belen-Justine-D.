
$(document).ready(function(){

    $("p").css("color","brown")

    $(".btn2").click(function(){
        $(this).css("background", "cyan")

        $(".pr").text("MABUHAY PDMIAN'S")

    })

    $("[href]").css("color", "red")

    $("ul li:first-child").css("color", "blue")

    $("tr:even").css("background", "lightblue")

    $("tr:odd").css("background", "lightyellow")

    $("th").css("background", "lightgreen")

    $(".btn1").click(function(){
        $("#message").text("You clicked the button!")
    })

    $(".btn1").mouseenter(function(){
        $("#message").text("Your mouse reached the button!")
    })

    $(".btn1").mouseleave(function(){
        $("#message").text("Your mouse leaves the button!")
    })

    $(".btn1").mousedown(function(){
        $(this).css("background", "red")
    })

    $(".btn1").mouseup(function(){
        $(this).css("background", "brown")
    })

    $("#name").focus(function(){
        $("#message").text("You select the box!")
        $(this).css("background", "cyan")
    })

    $("#name").blur(function(){
        $("#message").text("You leave the text input!")
        $(this).css("background", "white")
    })

    $("#course").change(function(){
        $("#message").text($(this).val)
    })

    $(".btn2").click(function(){
        $("#table").hide("slow")
    })

    $(".btn2").dblclick(function(){
        $("#table").show(2000)
    })


})