$(function () {
    "use strict";
    /** header moving **/
    $(window).on('load', function () {
        $(".main-back").css("width", "100%");
    });
    
    
    var myList = [$(".exp-customers"), $(".exp-project"), $(".exp-graphic"), $(".exp-video")];
    var waypoint = new Waypoint({
            element: document.getElementById('counter'),
            handler: function (down) {
                $.each(myList, function (k, val) {
                    var myValue = val.attr('data-nums');
                    var options = {};
                    options['toValue'] = myValue;
                    options['duration'] = 3000;
                    val.numerator(options);
                });
            },
            offset: "90% "
        });
    
    
    
});

//tabs...
    $("#my-tabs li").click(function () {
        var myID = $(this).attr("id");
        $(this).addClass("active").siblings().removeClass("active");
        $(".categories>div").hide();
        $("#" + myID + "-content").fadeIn(1000);
    });

/** Type Writer **/
var myText = "Boost Your Business !",
    i = 0;
window.onload = function () {
    "use strict";
    var typeWriter = setInterval(function () {
            document.getElementById("writer").textContent += myText[i];
            i += 1;
            if (i > myText.length - 1) {
                clearInterval(typeWriter);
            }
        }, 50);
};
