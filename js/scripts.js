function Ticket(title, time, age, quantity) {
  this.title = title,
  this.time = time,
  this.age = age,
  this.quantity = quantity
};

Ticket.prototype.ticketPrice = function() {
  var price = 0;

  if (newTicket.movie === "first-run"){
    price += 15;
  } else {
    price += 10;
  }

  if (newTicket.time === "matinee"){
    price += 2
  } else {
    price += 5
  }

  if (newTicket.age === "adult"){
    price += 5
  }

  return price
}

$(document).ready(function() {
  $("form#ticket").submit(function(event) {
    event.preventDefault();
    var showTitle = $("#movie-title").val();
    var showTime = $("#movie-time").val();
    var userAge = $("#age").val();
    var ticketQuantity = $("#quantity").val();

    var newTicket = new Ticket(showTitle, showTime, userAge, ticketQuantity);
    console.log(newTicket);
    console.log(newTicket.ticketPrice());

    $("#results").text("The price for your ticket is: $" + newTicket.ticketPrice().toFixed(2));
  });
});
