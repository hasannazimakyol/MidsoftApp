$(document).ready(function(){
    let sendData = '';
    //
    // alertify.defaults.transition = "slide";
    // alertify.defaults.theme.ok = "evoButtona evoButton5a";
    // alertify.defaults.theme.cancel = "evoButtona evoButton3a";
    // alertify.defaults.theme.input = "evoTextBox evoTextBox3";

    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady(){
        // StatusBar.hide();

        document.addEventListener("backbutton", function(e){

            alertify.confirm('Uyarı', 'Uygulamadan çıkmak istediğinize emin misiniz ?'
                , function(){ navigator.app.exitApp(); }
                , function(){ alertify.error('İptal Ettiniz')});

        }, false);
    }

    localStorage.setItem('loader','<div id="loader"><i class="fa fa-refresh fa-spin" aria-hidden="true"></i></div>');


    // $("#password").change(function(){
    //     localStorage.setItem('password',$("#password").val());
    // }).val(localStorage.getItem('password'));

    alertify.defaults.transition = "slide";
    alertify.defaults.theme.ok = "evoButtona evoButton5a";
    alertify.defaults.theme.cancel = "evoButtona evoButton3a";
    alertify.defaults.theme.input = "form-control";

});

function mainpage() {
    window.location.replace('index.html');
}

/*function loginGoster(){
    $("#email").prop('disabled', false);
    $("#password").prop('disabled', false);
    $("#loginButton").show("slow");
    $("#loadingBar").hide("slow");
}

function callServiceLogin(){

    $("#email").prop('disabled', true);
    $("#password").prop('disabled', true);
    $("#loginButton").hide("slow");
    $("#loadingBar").show("slow");

    var urlData = localStorage.getItem('serverAdress')+'?function=login';

    let email = $("#email").val();
    let password = $("#password").val();
    sendData = {
        email : email,
        password : password
    };

    $.ajax({
        url: urlData,
        type: "POST",
        // async: true, // set to false if you don't mind the page pausing while waiting for response
        cache: false,
        // dataType: "json",
        // contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        data: sendData,
        // contentType: "application/json; charset=utf-8",
        success: function(data) {
            let dataParsed = data;
            // let dataParsed = JSON.parse(data);
            console.log(dataParsed);
            console.log(data.status);
            if (dataParsed.status == '4') {
                localStorage.setItem('email',$("#email").val());
                localStorage.setItem('password',$("#password").val());
                localStorage.setItem("userId",dataParsed.data[0]);
                localStorage.setItem("level",dataParsed.data[7]);
                if (dataParsed.data[7]!='admin') {
                    alertify.alert("Uyarı","Giriş Yapmaya Yetkiniz Yok.").set('label', 'Tamam');
                }
                else {
                    alertify.success('Giriş Başarılı!');
                    setTimeout(function () {
                        window.location.replace('main.html');

                    },1000);
                }


            }
            else{
                alertify.alert("Uyarı","Kullanıcı Adı Veya Şifre Yanlış").set('label', 'Tamam');

            }
            loginGoster();

            //console.log('checkBox:',$("#loginCheckbox"));
            // localStorage.setItem('usercode', data.userCode);

        },
        // error: function(xhr, ajaxOptions, thrownError) {
        //     // handle your fail response here
        //     console.error(thrownError);
        // }
        error   :   function (jqXHR, exception) {
            let msg = '';
            if (jqXHR.status === 0) {
                msg = 'Not connect.\n Verify Network. ' + jqXHR.responseText;
            } else if (jqXHR.status == 404) {
                msg = 'Requested page not found. [404]';
            } else if (jqXHR.status == 500) {
                msg = 'Internal Server Error [500].';
            } else if (exception === 'parsererror') {
                msg = 'Requested JSON parse failed.';
            } else if (exception === 'timeout') {
                msg = 'Time out error.';
            } else if (exception === 'abort') {
                msg = 'Ajax request aborted.';
            } else {
                msg = 'Uncaught Error.\n' + jqXHR.responseText;
            }
            console.log(msg);
        }
    });
/!*    $.getJSON(urlData).done(function(data){
        console.log(data.status);
        if (data.status === 'true'){
            localStorage.setItem('email',$("#email").val());
            localStorage.setItem('password',$("#password").val());
            alertify.success('Giriş Başarılı!');

            //console.log('checkBox:',$("#loginCheckbox"));
            window.location.replace('login.html');
            localStorage.setItem('usercode', data.userCode);
        }else{
            alertify.alert("Uyarı","Kullanıcı Adı Veya Şifre Yanlış").set('label', 'Tamam');

        }
        loginGoster();

    }).fail(function( jqXHR, textStatus ){
        alert('işlem Tamamlanamadı Hata! C[12]');
        loginGoster();
    });*!/

    }*/





