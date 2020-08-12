$(function() {
    $(".devour").on("click", event => {
        const id = $(this).data("id");
        const devoured = {
            devoured: true
        };
    $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: devoured
    }).then(() => {
        location.reload();
      });
    });
    $(".burgerbtn").on("submit", event => {
      event.preventDefault();
      const newBurger = {
        burger_name: $("#newBurger").val().trim(),
        devoured: false
      };
      $.ajax("/api/burgers", {
        type: "POST", 
        data: newBurger
      }).then(() => {
          location.reload();
      });
    });
  });