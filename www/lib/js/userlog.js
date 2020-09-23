$(document).ready(function(){
    let path = window.location.pathname;
    let page = path.split("/").pop();
    let userId = localStorage.getItem("userID"),
        IP = localStorage.getItem("ip"),
        operation = page,
        platform = localStorage.getItem("os");
    let logdata = {
        userId : userId,
        IP : IP,
        operation : operation,
        platform : platform
    };

    console.log(logdata);

    /*$.ajax({
        url: "http://193.109.135.83/profesyoneller/serverJson.php?function=setUserLog",
        type: "POST",
        async: true, // set to false if you don't mind the page pausing while waiting for response
        cache: false,
        dataType: "json",
        data: logdata,
        // contentType: "application/json; charset=utf-8",
        success: function(data) {
            let dataParsed = data;
            console.log(dataParsed);
        },
        error: function(xhr, ajaxOptions, thrownError) {
            // handle your fail response here
            console.error(thrownError);
        }
    });*/
});