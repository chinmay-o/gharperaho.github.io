
$("#home-explore").click(function() {

    $('html, body').animate({
        scrollTop: $("#services-section").offset().top - 120
      }, 1000);
});

$("#home-get-a-call").click(function() {

    $('html, body').animate({
        scrollTop: $("#home-contact").offset().top - 120
      }, 1000);
});

$("#list-a-property").click(function() {

    $(".list-a-property-popup").css("display", "flex");
    $(".max-popup-section").removeClass("close");
    $(".max-popup-dialog").removeClass("fadeOutUp");
});

$("#list-a-property-mobile").click(function() {

    $('.mobile-menu-close .toggle').click();
    $(".list-a-property-popup").css("display", "flex");
    $(".max-popup-section").removeClass("close");
    $(".max-popup-dialog").removeClass("fadeOutUp");
});


// Property Management
$("#prop-manag-know-more").click(function() {

    $('html, body').animate({
        scrollTop: $("#prop-manag-why-gpr").offset().top - 140
      }, 1000);
});

$("#prop-manage-contact").click(function() {

    $(".prop-management-popup").css("display", "flex");
    $(".max-popup-section").removeClass("close");
    $(".max-popup-dialog").removeClass("fadeOutUp");
});

$("#prop-man-start-now").click(function() {

    $(".prop-management-popup").css("display", "flex");
    $(".max-popup-section").removeClass("close");
    $(".max-popup-dialog").removeClass("fadeOutUp");
});

$("#prop-man-reach-us").click(function() {

    $(".prop-management-popup").css("display", "flex");
    $(".max-popup-section").removeClass("close");
    $(".max-popup-dialog").removeClass("fadeOutUp");
});

$("#prop-manage-mobile").click(function() {

    $('.mobile-menu-close .toggle').click();
    $(".prop-management-popup").css("display", "flex");
    $(".max-popup-section").removeClass("close");
    $(".max-popup-dialog").removeClass("fadeOutUp");
});


// interior
$(".interior-begin").click(function() {

    $('html, body').animate({
        scrollTop: $("#interior-services").offset().top - 20
      }, 1000);
});

$("#interior-book-now").click(function() {

    $(".interior-popup").css("display", "flex");
    $(".max-popup-section").removeClass("close");
    $(".max-popup-dialog").removeClass("fadeOutUp");
});

$("#interior-mobile").click(function() {

    $('.mobile-menu-close .toggle').click();
    $(".interior-popup").css("display", "flex");
    $(".max-popup-section").removeClass("close");
    $(".max-popup-dialog").removeClass("fadeOutUp");
});



// home services
$("#join-us-service").click(function() {

    $(".join-us-service-popup").css("display", "flex");
    $(".join-us-service-popup .max-popup-section").removeClass("close");
    $(".join-us-service-popup .max-popup-dialog").removeClass("fadeOutUp");
});

$("#join-us-service-mobile").click(function() {

    $('.mobile-menu-close .toggle').click();
    $(".join-us-service-popup").css("display", "flex");
    $(".join-us-service-popup .max-popup-section").removeClass("close");
    $(".join-us-service-popup .max-popup-dialog").removeClass("fadeOutUp");
});

$("#services-book-now").click(function() {

    $(".book-now-service-popup").css("display", "flex");
    $(".book-now-service-popup .max-popup-section").removeClass("close");
    $(".book-now-service-popup .max-popup-dialog").removeClass("fadeOutUp");
});


// packer and movers
$("#packer-contact-us-one").click(function() {

    $('html, body').animate({
        scrollTop: $(".packer-contact").offset().top - 160
      }, 1000);
});

$("#packer-contact-us-two").click(function() {

    $('html, body').animate({
        scrollTop: $(".packer-contact").offset().top - 140
      }, 1000);
});

$("#packers-book-now").click(function() {

    $(".packer-mover-service-popup").css("display", "flex");
    $(".packer-mover-service-popup .max-popup-section").removeClass("close");
    $(".packer-mover-service-popup .max-popup-dialog").removeClass("fadeOutUp");
});

$("#packers-book-now-button").click(function() {

    $(".packer-mover-service-popup").css("display", "flex");
    $(".packer-mover-service-popup .max-popup-section").removeClass("close");
    $(".packer-mover-service-popup .max-popup-dialog").removeClass("fadeOutUp");
});

$("#packers-book-now-mobile").click(function() {

    $('.mobile-menu-close .toggle').click();
    $(".packer-mover-service-popup").css("display", "flex");
    $(".packer-mover-service-popup .max-popup-section").removeClass("close");
    $(".packer-mover-service-popup .max-popup-dialog").removeClass("fadeOutUp");
});
