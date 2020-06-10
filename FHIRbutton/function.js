function openframe(button) {
    var url = "";
    var cookie;
    if (button == "patient") {
        url = "/Patient/fhirpatientexample.html";
    }
    else if (button == "encounter") {
        //document.cookie ="PatientID:"+;
        //alert("sesion:" + Session["PatientID"]);
        deleteAllCookies();
        //document.cookie = "PatientID:; expires=Thu, 01 Jan 1970 00:00:00 GMT";
        //document.cookie = "AnnotationID=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
        document.cookie = "PatientID=" + PatID + ";SameSite=None;Secure";
        url = "/Encounter/fhirencounterexample.html";
    }
    else if (button == "imagingStudy") {
        url = "/Imagingstudy/fhirimagingstudyexample.html";
    }
    else if (button == "servicerequest") {
        url = "/ServiceRequest/fhirservicerequestexample.html";
    }
    else if (button == "searchservicerequest") {
        url = "/ServiceRequest/searchservicerequest.html";
    }

    window.open(url, '_blank', 'location=yes,height=900,width=900,scrollbars=yes,status=yes,top=0,left=500');

}


function deleteAllCookies() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT" + ";SameSite=None;Secure";
    }
}