//capture the form inputs//
$("#submit").on("click", (event) => {
    event.preventDefault();
    // create an object for the user's data//
    var userData = {
        name: $("#name").val(),
        photo: $("#phot").val(),
        scores: [
            $("#q1").val(),
            $("#q2").val(),
            $("#q3").val(),
            $("#q4").val(),
            $("#q5").val(),
            $("#q6").val(),
            $("#q7").val(),
            $("#q8").val(),
            $("#q9").val(),
            $("#q10").val(),
        ]
    };

    //reurn .map[math.abs[i] - b[i]]
    //Ajax post the data to the friends api.
    $.post("/api/friend"), userData, (data) => {
        //grab the data to the friend api .
        $("#match-name").text(data.name);
        $("#match")
    }
    
})