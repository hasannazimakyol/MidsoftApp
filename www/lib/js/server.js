localStorage.setItem('serverAdress',"http://localhost/MidsoftAppService/Service.php");
// localStorage.setItem('serverAdress',"");


var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};

function urlencode(text) {
    return (encodeURIComponent(text).replace(/ /g,'%20').replace(/%/g,'%25').replace(/&/g,'%26'));
}

function urldecode(text) {
    return (decodeURIComponent(text));
}