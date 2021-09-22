
setTimeout(function(){

  $("#preloader").css("display", "none");
  $("#page").css("display", "block");
}, 3000);

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

// know more button assign value
var assignedValue = null;

// install more button assign value
var assignedInstall = null;

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


// service-know-more-painting
$("#services-more-painting").click(function() {

    $(".services-more-popup").css("display", "flex");
    $(".services-more-popup .max-popup-section").removeClass("close");
    $(".services-more-popup .max-popup-dialog").removeClass("fadeOutUp");
    assignedValue = 1;
    referenceMessage(assignedValue);
});

// service-know-more-carpenter
$("#services-more-carp").click(function() {

    $(".services-more-popup").css("display", "flex");
    $(".services-more-popup .max-popup-section").removeClass("close");
    $(".services-more-popup .max-popup-dialog").removeClass("fadeOutUp");
    assignedValue = 2;
    referenceMessage(assignedValue);
});

// service-know-more-pest-control
$("#services-more-pest").click(function() {

    $(".services-more-popup").css("display", "flex");
    $(".services-more-popup .max-popup-section").removeClass("close");
    $(".services-more-popup .max-popup-dialog").removeClass("fadeOutUp");
    assignedValue = 3;
    referenceMessage(assignedValue);
});

// service-know-more-elctrical-service
$("#services-more-electric").click(function() {

    $(".services-more-popup").css("display", "flex");
    $(".services-more-popup .max-popup-section").removeClass("close");
    $(".services-more-popup .max-popup-dialog").removeClass("fadeOutUp");
    assignedValue = 4;
    referenceMessage(assignedValue);
});

// service-know-more-cleaning-sevice
$("#services-more-clean").click(function() {

    $(".services-more-popup").css("display", "flex");
    $(".services-more-popup .max-popup-section").removeClass("close");
    $(".services-more-popup .max-popup-dialog").removeClass("fadeOutUp");
    assignedValue = 5;
    referenceMessage(assignedValue);
});

// service-know-more-plumbing
$("#services-more-plumb").click(function() {

    $(".services-more-popup").css("display", "flex");
    $(".services-more-popup .max-popup-section").removeClass("close");
    $(".services-more-popup .max-popup-dialog").removeClass("fadeOutUp");
    assignedValue = 6;
    referenceMessage(assignedValue);
});

// Installation
$("#install-purifier").click(function() {

    $(".install-popup").css("display", "flex");
    $(".install-popup .max-popup-section").removeClass("close");
    $(".install-popup .max-popup-dialog").removeClass("fadeOutUp");
    assignedInstall = 1;
    referenceContent(assignedInstall);
});

// Solar Panels
$("#install-solar-panel").click(function() {

    $(".install-popup").css("display", "flex");
    $(".install-popup .max-popup-section").removeClass("close");
    $(".install-popup .max-popup-dialog").removeClass("fadeOutUp");
    assignedInstall = 2;
    referenceContent(assignedInstall);
});

// CCTV
$("#install-cctv").click(function() {

    $(".install-popup").css("display", "flex");
    $(".install-popup .max-popup-section").removeClass("close");
    $(".install-popup .max-popup-dialog").removeClass("fadeOutUp");
    assignedInstall = 3;
    referenceContent(assignedInstall);
});

// Inverter
$("#install-ups").click(function() {

    $(".install-popup").css("display", "flex");
    $(".install-popup .max-popup-section").removeClass("close");
    $(".install-popup .max-popup-dialog").removeClass("fadeOutUp");
    assignedInstall = 4;
    referenceContent(assignedInstall);
});

// Security System
$("#install-security").click(function() {

    $(".install-popup").css("display", "flex");
    $(".install-popup .max-popup-section").removeClass("close");
    $(".install-popup .max-popup-dialog").removeClass("fadeOutUp");
    assignedInstall = 5;
    referenceContent(assignedInstall);
});

// Auto Water Control
$("#install-water-control").click(function() {

    $(".install-popup").css("display", "flex");
    $(".install-popup .max-popup-section").removeClass("close");
    $(".install-popup .max-popup-dialog").removeClass("fadeOutUp");
    assignedInstall = 6;
    referenceContent(assignedInstall);
});

// Function With Refernce Message For Services More Button
function referenceMessage(value) {

    if (value == 1) {

      $("#residential").attr("href", "https://api.whatsapp.com/send?phone=918095470818&text=Residential%20Painting");
      $("#commercial").attr("href", "https://api.whatsapp.com/send?phone=918095470818&text=Commercial%20Painting");
      $("#industrial").attr("href", "https://api.whatsapp.com/send?phone=918095470818&text=Industrial%20Painting");
    }

    if (value == 2) {

      $("#residential").attr("href", "https://api.whatsapp.com/send?phone=918095470818&text=Residential%20Carpentry%20Service");
      $("#commercial").attr("href", "https://api.whatsapp.com/send?phone=918095470818&text=Commercial%20Carpentry%20Service");
      $("#industrial").attr("href", "https://api.whatsapp.com/send?phone=918095470818&text=Industrial%20Carpentry%20Service");
    }

    if (value == 3) {

      $("#residential").attr("href", "https://api.whatsapp.com/send?phone=918095470818&text=Residential%20Pest%20Control");
      $("#commercial").attr("href", "https://api.whatsapp.com/send?phone=918095470818&text=Commercial%20Pest%20Control");
      $("#industrial").attr("href", "https://api.whatsapp.com/send?phone=918095470818&text=Industrial%20Pest%20Control");
    }

    if (value == 4) {

      $("#residential").attr("href", "https://api.whatsapp.com/send?phone=918095470818&text=Residential%20Electrical%20Service");
      $("#commercial").attr("href", "https://api.whatsapp.com/send?phone=918095470818&text=Commercial%20Electrical%20Service");
      $("#industrial").attr("href", "https://api.whatsapp.com/send?phone=918095470818&text=Industrial%20Electrical%20Service");
    }

    if (value == 5) {

      $("#residential").attr("href", "https://api.whatsapp.com/send?phone=918095470818&text=Residential%20Cleaning%20Service");
      $("#commercial").attr("href", "https://api.whatsapp.com/send?phone=918095470818&text=Commercial%20Cleaning%20Service");
      $("#industrial").attr("href", "https://api.whatsapp.com/send?phone=918095470818&text=Industrial%20Cleaning%20Service");
    }

    if (value == 6) {

      $("#residential").attr("href", "https://api.whatsapp.com/send?phone=918095470818&text=Residential%20Plumbing%20Service");
      $("#commercial").attr("href", "https://api.whatsapp.com/send?phone=918095470818&text=Commercial%20Plumbing%20Service");
      $("#industrial").attr("href", "https://api.whatsapp.com/send?phone=918095470818&text=Industrial%20Plumbing%20Service");
    }
}

// Function With Refernce HTML For Install Button
function referenceContent(contentValue) {

  if (contentValue == 1) {

    document.getElementById("install-content").innerHTML =
    '<div class="col-12 max-mb-20"><a href="https://api.whatsapp.com/send?phone=918095470818&text=Water%20Purifier%20Service%20for%20RO" class="btn btn-primary btn-hover-secondary w-100">RO</a></div>' +
    '<div class="col-12 max-mb-20"><a href="https://api.whatsapp.com/send?phone=918095470818&text=Water%20Purifier%20Service%20for%20UV" class="btn btn-primary btn-hover-secondary w-100">UV</a></div>' +
    '<div class="col-12 max-mb-20"><a href="https://api.whatsapp.com/send?phone=918095470818&text=Water%20Purifier%20Service%20for%20UF" class="btn btn-primary btn-hover-secondary w-100">UF</a></div>' +
    '<div class="col-12 max-mb-20"><a href="https://api.whatsapp.com/send?phone=918095470818&text=Water%20Purifier%20Service%20for%20Alkaline" class="btn btn-primary btn-hover-secondary w-100">Alkaline</a></div>';
  }

  if (contentValue == 2) {

    document.getElementById("install-content").innerHTML =
    '<div class="col-12 max-mb-20"><a href="https://api.whatsapp.com/send?phone=918095470818&text=Solar%20Energy%20Service%20for%20Panels%20and%20Modules" class="btn btn-primary btn-hover-secondary w-100">Solar Panel/Solar Module</a></div>' +
    '<div class="col-12 max-mb-20"><a href="https://api.whatsapp.com/send?phone=918095470818&text=Solar%20Energy%20Service%20for%20Water%20Heater" class="btn btn-primary btn-hover-secondary w-100">Solar Water Heater</a></div>' +
    '<div class="col-12 max-mb-20"><a href="https://api.whatsapp.com/send?phone=918095470818&text=Solar%20Energy%20Service%20for%20Lights" class="btn btn-primary btn-hover-secondary w-100">Solar Lightings and Lanterns</a></div>' +
    '<div class="col-12 max-mb-20"><a href="https://api.whatsapp.com/send?phone=918095470818&text=Solar%20Energy%20Service%20for%20Battery%20and%20UPS" class="btn btn-primary btn-hover-secondary w-100">Solar Inverter/Battery/UPS</a></div>';
  }

  if (contentValue == 3) {

    document.getElementById("install-content").innerHTML =
      '<div class="col-12 max-mb-20"><a href="https://api.whatsapp.com/send?phone=918095470818&text=Residential%20CCTV%20Service" class="btn btn-primary btn-hover-secondary w-100">Residential</a></div>' +
      '<div class="col-12 max-mb-20"><a href="https://api.whatsapp.com/send?phone=918095470818&text=Commercial%20CCTV%20Service" class="btn btn-primary btn-hover-secondary w-100">Commercial</a></div>' +
      '<div class="col-12 max-mb-20"><a href="https://api.whatsapp.com/send?phone=918095470818&text=Industrial%20CCTV%20Service" class="btn btn-primary btn-hover-secondary w-100">Industrial</a></div>';
  }

  if (contentValue == 4) {

    document.getElementById("install-content").innerHTML =
      '<div class="col-12 max-mb-20"><a href="https://api.whatsapp.com/send?phone=918095470818&text=Residential%20Inverter%20Service" class="btn btn-primary btn-hover-secondary w-100">Residential</a></div>' +
      '<div class="col-12 max-mb-20"><a href="https://api.whatsapp.com/send?phone=918095470818&text=Commercial%20Inverter%20Service" class="btn btn-primary btn-hover-secondary w-100">Commercial</a></div>' +
      '<div class="col-12 max-mb-20"><a href="https://api.whatsapp.com/send?phone=918095470818&text=Industrial%20Inverter%20Service" class="btn btn-primary btn-hover-secondary w-100">Industrial</a></div>';
  }

  if (contentValue == 5) {

    document.getElementById("install-content").innerHTML =
    '<div class="col-12 max-mb-20"><a href="https://api.whatsapp.com/send?phone=918095470818&text=Security%20Service%20for%20Theft%20Alarm" class="btn btn-primary btn-hover-secondary w-100">Burglar/Theft Alarm</a></div>' +
    '<div class="col-12 max-mb-20"><a href="https://api.whatsapp.com/send?phone=918095470818&text=Security%20Service%20for%20Safety%20Doors" class="btn btn-primary btn-hover-secondary w-100">Safety Door/Lockers</a></div>' +
    '<div class="col-12 max-mb-20"><a href="https://api.whatsapp.com/send?phone=918095470818&text=Security%20Service%20for%20Fire%20Alarm" class="btn btn-primary btn-hover-secondary w-100">Fire Alarm</a></div>' +
    '<div class="col-12 max-mb-20"><a href="https://api.whatsapp.com/send?phone=918095470818&text=Security%20Service%20for%20Fingerprint%20Scanner" class="btn btn-primary btn-hover-secondary w-100">Fingerprint Scanner</a></div>' +
    '<div class="col-12 max-mb-20"><a href="https://api.whatsapp.com/send?phone=918095470818&text=Security%20Service%20for%20Attendence%20System" class="btn btn-primary btn-hover-secondary w-100">Time Attendance System</a></div>' +
    '<div class="col-12 max-mb-20"><a href="https://api.whatsapp.com/send?phone=918095470818&text=Security%20Service%20for%20Visitor%20Management" class="btn btn-primary btn-hover-secondary w-100">Visitor Management System</a></div>';

  }

  if (contentValue == 6) {

    document.getElementById("install-content").innerHTML =
      '<div class="col-12 max-mb-20"><a href="https://api.whatsapp.com/send?phone=918095470818&text=Residential%20Automatic%20Water-Level%20Service" class="btn btn-primary btn-hover-secondary w-100">Residential</a></div>' +
      '<div class="col-12 max-mb-20"><a href="https://api.whatsapp.com/send?phone=918095470818&text=Commercial%20Automatic%20Water-Level%20Service" class="btn btn-primary btn-hover-secondary w-100">Commercial</a></div>' +
      '<div class="col-12 max-mb-20"><a href="https://api.whatsapp.com/send?phone=918095470818&text=Industrial%20Automatic%20Water-Level%20Service" class="btn btn-primary btn-hover-secondary w-100">Industrial</a></div>';
  }

}

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
