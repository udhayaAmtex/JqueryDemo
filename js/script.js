$(function() {
    // $("h1").addClass("header");
//    $("div").addClass("option");
    $("#red").css("background-color" , "red");
    $("#blue").css("background-color" , "blue");
    $("#green").css("background-color" , "green");
    $(".std").after("<div><button>Submit</button></div>");
    $("button").replaceWith("<div><button class='submit'>Success</button></div>");

    $.get({
        url: "http://localhost:8080",
        headers: {
            'Access-Control-Allow-Origin': 'http://localhost:8080',
            'Access-Control-Allow-Methods': 'POST'
        },
        success: function(data, textStatus, jqXHR) {
            var array = $.map(data, function(value, index) {
                $("table").append(
                    `<tr>
                        <td>${value.name}</td>
                        <td>${value.age}</td>
                        <td>${value.std}</td>
                    </tr>`
                );
                return [value];
            });
            console.log(array);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.error(errorThrown);
        }
    });

    $(".submit").click(function (e) { 
        e.preventDefault();

        let currentStudent = {
            name : $("#name").val(),
            age : $("#age").val(),
            std : $("#std").val()
        }

        console.log(currentStudent);
        $.post({
            url: "http://localhost:8080",
            headers: {
                'Access-Control-Allow-Origin': 'http://localhost:8080',
                'Access-Control-Allow-Methods': 'POST'
            },
            data : JSON.stringify(currentStudent),
            contentType: "application/json", 
            success: function(data, textStatus, jqXHR) {
                console.log("data : {" + "name :" + data.name + " age : "+ data.age + " std : " + data.std + "}");
                console.log("status" + textStatus);
                console.log("XHR" + jqXHR);
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.error(errorThrown);
            }
        });
    });
});