
    var httpRequest;
    var response;

    if (window.XMLHttpRequest) { // Mozilla, Safari, IE7+ ...
        httpRequest = new XMLHttpRequest();
    } else if (window.ActiveXObject) { // IE 6 and older
        httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
    }

    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState === 4) {
            if (httpRequest.status === 200) {
                response = JSON.parse(httpRequest.responseText);
            } else {
                alert('There was a problem with the request questions.');
            }
        }
    };
    httpRequest.open('GET', 'data/question-cap3.json');
    httpRequest.send();
