function getJSON(type) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', fhir.url + type, true);//"?_count=100"
    xhr.setRequestHeader("Content-type", 'application/json');
    xhr.onreadystatechange = function () {
        if (this.readyState == 4) // && this.status == 201) 
        {
            if (type == 'ServiceRequest') {
                SServiceRequest = JSON.parse(this.responseText);
                setTableServiceRequest();
            }

        }
    }
    xhr.send();
}
function setTableServiceRequest() {
    deleterowTable("myTable");
    var SSRcategory = document.getElementById("SSRcategory").value;
    var table = document.getElementById("myTable");
    var row = 0;
    for (var i = 0; i < SServiceRequest.entry.length; i++) {
        if (SServiceRequest.entry[i].resource.category != null && SServiceRequest.entry[i].resource.category[0].text == SSRcategory) {
            var btn = document.createElement('input');
            btn.type = "button";
            btn.id = "servicerequest";
            btn.value = "new Encounter";
            var lenrow = table.rows.length;
            btn.onclick = function () { newEncounter(lenrow, this) };

            table.appendChild(tr = document.createElement("tr"));
            tr.appendChild(td = document.createElement("td"));
            tr.id = i;
            //tr.onclick = function () { setTableSeries(this, table) };
            td.innerHTML = row + 1;
            tr.appendChild(td = document.createElement("td"));
            td.innerHTML = SServiceRequest.entry[i].resource.id;
            tr.appendChild(td = document.createElement("td"));
            td.innerHTML = SServiceRequest.entry[i].resource.subject.reference;
            tr.appendChild(td = document.createElement("td"));
            td.innerHTML = SServiceRequest.entry[i].resource.encounter.reference;
            tr.appendChild(td = document.createElement("td"));
            td.innerHTML = SServiceRequest.entry[i].resource.occurrenceDateTime;
            tr.appendChild(td = document.createElement("td"));
            td.appendChild(btn);
            row++;
        }
    }
}
function deleterowTable(Tablename) {
    var myTable = document.getElementById(Tablename);
    var rowCount = myTable.rows.length;
    for (var x = rowCount - 1; x > 0; x--) {
        myTable.deleteRow(x);
    }
}
function newEncounter(lenrow, btn) {
    document.cookie = "row=" + lenrow + ";";
    openframe(btn);
}
