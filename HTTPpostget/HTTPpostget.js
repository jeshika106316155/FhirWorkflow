var fhir = {
    "url": " http://203.64.84.213:8080/hapi-fhir-jpaserver/fhir/"//"http://hapi.fhir.org/baseR4/"
}
function postData(jsonString, type, formID) {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", fhir.url + type, true);
    xhttp.setRequestHeader("Content-type", 'application/json');
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4) // && this.status == 201) 
        {
            //var ret = JSON.parse(this.responseText);
            alert(this.responseText);
        }
    };
    var data = JSON.stringify(jsonString);
    xhttp.send(data);
}

function check(p) {
    if (p.id == "patient") {
        if ((document.getElementById("PnameFamily").value != "") && (document.getElementById("PnameGiven").value != "") && (document.getElementById("PgenderMale").checked == true || document.getElementById("PgenderFemale").checked == true)) {
            Patient.name[0].family = document.getElementById("PnameFamily").value;
            Patient.name[0].given = document.getElementById("PnameGiven").value;
            if (document.getElementById("PgenderMale").checked == true) { Patient.gender = "male"; }
            else { Patient.gender = "female"; }
            postData(Patient, "Patient", p.id);
        }
        else { alert(p.id + "未勾選完畢"); }
    }
    else if (p.id == "encounter") {
        if ((document.getElementById("EpatientId").value != "") && (document.getElementById("EPstart").value != "")) {
            Encounter.subject.reference = "Patient/" + document.getElementById("EpatientId").value;
            Encounter.period.start = new Date(document.getElementById("EPstart").value)
            postData(Encounter, "Encounter", p.id);
        }
        else { alert(p.id + "未勾選完畢"); }
    }
    else if (p.id == "ImagingStudy") {
        if ((document.getElementById("ISpatientId").value != "") && (document.getElementById("ISuid").value != "")) {
            ImagingStudy.subject.reference = "Patient/" + document.getElementById("ISpatientId").value;
            ImagingStudy.identifier[0].value = document.getElementById("ISuid").value;
            postData(ImagingStudy, "ImagingStudy", p.id);
        }
        else { alert(p.id + "未勾選完畢"); }
    }
    else if (p.id == "servicerequest") {
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + ' ' + time;
        if ((document.getElementById("SRpatientId").value != "") && (document.getElementById("SRencounterId").value != "") && (document.getElementById("SRcategory").value != "")) {
            ServiceRequest.subject.reference = "Patient/" + document.getElementById("SRpatientId").value;
            ServiceRequest.occurrenceDateTime = new Date(dateTime);
            ServiceRequest.category = document.getElementById("SRcategory").value;
            postData(ServiceRequest, "ServiceRequest", p.id);
        }
        else { alert(p.id + "未勾選完畢"); }
    }
}