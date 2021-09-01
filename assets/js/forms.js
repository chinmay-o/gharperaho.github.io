
$("#contact-form").submit((e) => {
  e.preventDefault()
  $.ajax({
    url: "https://script.google.com/macros/s/AKfycbwKs0-fKl1SAfhOdxWQrg-61D9Ruo6OT9HPlB62NzPVHa1_SSCjg_X0_a3X3xlZLCNi/exec",
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
    url: "https://script.google.com/macros/s/AKfycbwyad_F4sC3Bgjeax6DJjTMk5kzaM0bEodep_EvOafxm03-S1VN3QkDIaYvIWXbsHXi/exec",
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
    url: "https://script.google.com/macros/s/AKfycbzROSGYo7SnvgXHa1d915EHFvVd3Ppa8IHXGCFIwgwE4WetlyyYel8JR4YGWULuuxU/exec",
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
    url: "https://script.google.com/macros/s/AKfycbzAplIeDwPyFDFWFBKzsUmYJIYqtgh_VogCZzsDxQ7KycOQgoMX0fRnA5QJndqQcLdK/exec",
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
    url: "https://script.google.com/macros/s/AKfycbzAplIeDwPyFDFWFBKzsUmYJIYqtgh_VogCZzsDxQ7KycOQgoMX0fRnA5QJndqQcLdK/exec",
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
    url: "https://script.google.com/macros/s/AKfycbyYzRB4CKqDBRXUwd5wCiaXlgVzAYRBtuRaXuIK6hJ4eoTehFucnvfOM55P4xGy8rwzUw/exec",
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
    url: "https://script.google.com/macros/s/AKfycbzbV90dF4VzTaB5aschY2akzizMwH9NSzKWeeNf8H3y5o-le0ZhNlwgQ_qt2UTdY4NR/exec",
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
    url: "https://script.google.com/macros/s/AKfycbyAy-5hMS5ILd2Ae8ySTl0OhXBIJdhyARS6gu35yH87z6SzL5zkFcUm2a8uyY26y7Ct/exec",
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
