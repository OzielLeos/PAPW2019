
$(function () {
    $("#nav-placeholder").load("./navigation.html");
    // $("#Collapse-placeholder").load("./Collapse.html");
    $("#carousel-placeholder").load("./carousel.html");
    $("#footer-placeholder").load("./footer.html");
     $("#slick-placeholder").load("./slicker.html");
    for (let item = 0; item < 4; item++) {
        $.get("./item.html", function(data){
             $("#producto-placeholder").append(data);
            $("#producto-placeholder4").append(data);
            $("#producto-placeholder3").append(data);
            $("#producto-placeholder2").append(data);
            $("#producto-placeholder5").append(data);
        });
        
    }

    $.get("./item.html", function(data){
        // $("#producto-placeholder").append(data);
        console.log(data);
    });
});

