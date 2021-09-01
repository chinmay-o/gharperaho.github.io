
$("#contact-form").submit((e) => {
  e.preventDefault()
  $.ajax({
    url: "https://script.google.com/macros/s/AKfycbyTZHDZu6_z22suURht7pgKKqokvNxp53hYLfua/exec",
    data: $("#contact-form").serialize(),
    type: "POST",
    success: function(response) {

      $("#contact-form .success-alert").css("display", "block");
      $('#contact-form')[0].reset();
      fadeOut("#contact-form .success-alert");
    },
    error: function(err) {

      $("#contact-form .error-alert").css("display", "block");
      fadeOut("#contact-form .error-alert");
    }
  })
})

$("#property-list-form").submit((e) => {
  e.preventDefault()
  $.ajax({
    url: "https://script.google.com/macros/s/AKfycbxe9VV0Pps1Lz8o1UyCGEmO9ODpleTHLyXsBpLws3BMHCMO7lk/exec",
    data: $("#property-list-form").serialize(),
    type: "POST",
    success: function(response) {

      $("#property-list-form .success-alert").css("display", "block");
      $('#property-list-form')[0].reset();
      fadeOut("#property-list-form .success-alert");
    },
    error: function(err) {

      $("#property-list-form .error-alert").css("display", "block");
      fadeOut("#property-list-form .error-alert");
    }
  })
})

$("#property-management-form").submit((e) => {
  e.preventDefault()
  $.ajax({
    url: "https://script.google.com/macros/s/AKfycby8BU8RGnOa8DzvgR7K76tYzkixnZQnagGotzEk/exec",
    data: $("#property-management-form").serialize(),
    type: "POST",
    success: function(response) {

      $("#property-management-form .success-alert").css("display", "block");
      $('#property-management-form')[0].reset();
      fadeOut("#property-management-form .success-alert");
    },
    error: function(err) {

      $("#property-management-form .error-alert").css("display", "block");
      fadeOut("#property-management-form .error-alert");
    }
  })
})

$("#interior-enquiry-form-one").submit((e) => {
  e.preventDefault()
  $.ajax({
    url: "https://script.google.com/macros/s/AKfycbzivzT9Rz8yEc-DuXRNElKS2M6sXniorIxD21I1/exec",
    data: $("#interior-enquiry-form-one").serialize(),
    type: "POST",
    success: function(response) {

      $("#interior-enquiry-form-one .success-alert").css("display", "block");
      $('#interior-enquiry-form-one')[0].reset();
      fadeOut("#interior-enquiry-form-one .success-alert");
    },
    error: function(err) {

      $("#interior-enquiry-form-one .error-alert").css("display", "block");
      fadeOut("#interior-enquiry-form-one .error-alert");
    }
  })
})

$("#interior-enquiry-form-two").submit((e) => {
  e.preventDefault()
  $.ajax({
    url: "https://script.google.com/macros/s/AKfycbzivzT9Rz8yEc-DuXRNElKS2M6sXniorIxD21I1/exec",
    data: $("#interior-enquiry-form-two").serialize(),
    type: "POST",
    success: function(response) {

      $("#interior-enquiry-form-two .success-alert").css("display", "block");
      $('#interior-enquiry-form-two')[0].reset();
      fadeOut("#interior-enquiry-form-two .success-alert");
    },
    error: function(err) {

      $("#interior-enquiry-form-two .error-alert").css("display", "block");
      fadeOut("#interior-enquiry-form-two .error-alert");
    }
  })
})

$("#join-us-services").submit((e) => {
  e.preventDefault()
  $.ajax({
    url: "https://script.google.com/macros/s/AKfycbypre-DQwgGV3g-KlCk3Yh3VwgPsLhMcozXZZbLTA/exec",
    data: $("#join-us-services").serialize(),
    type: "POST",
    success: function(response) {

      $("#join-us-services .success-alert").css("display", "block");
      $('#join-us-services')[0].reset();
      fadeOut("#join-us-services .success-alert");
    },
    error: function(err) {

      $("#join-us-services .error-alert").css("display", "block");
      fadeOut("#join-us-services .error-alert");
    }
  })
})

$("#book-service-enquiry").submit((e) => {
  e.preventDefault()
  $.ajax({
    url: "https://script.google.com/macros/s/AKfycby1urYXqccZJm8MJBbMcU6b4yQKYVlhgJb-zPe9/exec",
    data: $("#book-service-enquiry").serialize(),
    type: "POST",
    success: function(response) {

      $("#book-service-enquiry .success-alert").css("display", "block");
      $('#book-service-enquiry')[0].reset();
      fadeOut("#book-service-enquiry .success-alert");
    },
    error: function(err) {

      $("#book-service-enquiry .error-alert").css("display", "block");
      fadeOut("#book-service-enquiry .error-alert");
    }
  })
})

$("#packers-movers-enquiry").submit((e) => {
  e.preventDefault()
  $.ajax({
    url: "https://script.google.com/macros/s/AKfycbz3aCcnHJfLtlDZd99kvcZJyW43KQIOiwHY0RaN/exec",
    data: $("#packers-movers-enquiry").serialize(),
    type: "POST",
    success: function(response) {

      $("#packers-movers-enquiry .success-alert").css("display", "block");
      $('#packers-movers-enquiry')[0].reset();
      fadeOut("#packers-movers-enquiry .success-alert");
    },
    error: function(err) {

      $("#packers-movers-enquiry .error-alert").css("display", "block");
      fadeOut("#packers-movers-enquiry .error-alert");
    }
  })
})

function fadeOut(className) {
  setTimeout(function(){
    $(className).css("display", "none");
  }, 6000);
}
