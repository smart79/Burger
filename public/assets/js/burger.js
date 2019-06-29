$(function () {

    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
        var burgerName = $("#addBurger").val().trim();
        if (burgerName != "") {

            var newBurger = {
                name: burgerName

            };

            // Send the POST request.
            $.ajax("/api/burgers", {
                type: "POST",
                data: newBurger
            }).then(
                function () {
                    console.log("created new burger");
                    // Reload the page to get the updated list
                    location.reload();
                }
            );
        }
        else {
            alert("Please Enter the Burger Name!");
        }
    });

    $(".devourB").on("click", function (event) {


        var id = $(this).data("id");
        console.log("id for updating" + id);
        // Send the POST request.
        $.ajax({
            type: "PUT",
            url: "/api/devourBurger/" + id
        }).then(
            function () {
                console.log("updated");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".deleteB").on("click", function (event) {
        var id = $(this).data("id");

        // Send the DELETE request.
        $.ajax("/api/delBurger/" + id, {
            type: "DELETE"
        }).then(
            function () {
                console.log("deleted Burger", id);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

});