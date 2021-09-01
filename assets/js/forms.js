
$("#contact-form").submit((e) => {
  e.preventDefault()
  $.ajax({
    url: "https://script.google.com/macros/s/AKfycbyTZHDZu6_z22suURht7pgKKqokvNxp53hYLfua/exec",
    data: $("#contact-form").serialize(),
    type: "POST",
    success: function(response) {

      console.log("Success");
    },
    error: function(err) {

      console.log("Error");
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

      console.log("Success");
    },
    error: function(err) {

      console.log("Error");
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

      console.log("Success");
    },
    error: function(err) {

      console.log("Error");
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

      console.log("Success");
    },
    error: function(err) {

      console.log("Error");
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

      console.log("Success");
    },
    error: function(err) {

      console.log("Error");
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

      console.log("Success");
    },
    error: function(err) {

      console.log("Error");
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

      console.log("Success");
    },
    error: function(err) {

      console.log("Error");
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

      console.log("Success");
    },
    error: function(err) {

      console.log("Error");
    }
  })
})
