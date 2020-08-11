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
    $(".create-burger-form").on("submit", event => {
      event.preventDefault();
      const newBurger = {
        burger_name: $("#createBurger").val().trim(),
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