function openframe(button) {
    var url = "";
    if (button.id == "patient") {
        url = "/Patient/fhirpatientexample.html";
    }
    else if (button.id == "encounter") {
        url = "/Encounter/fhirencounterexample.html";
    }
    else if (button.id == "imagingStudy") {
        url = "/Imagingstudy/fhirimagingstudyexample.html";
    }
    else if (button.id == "servicerequest") {
        url = "/ServiceRequest/fhirservicerequestexample.html";
    }
    window.open(url, '_blank', 'location=yes,height=900,width=900,scrollbars=yes,status=yes,top=0,left=500');
}