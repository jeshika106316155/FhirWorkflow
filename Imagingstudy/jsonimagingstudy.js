var ImagingStudy = {
    "resourceType": "ImagingStudy",
    "identifier": [{
        "use": "official",
        "system": "urn:dicom:uid",
        "value": ""
    }, {
        "use": "usual",
        "type": {
            "coding": [{
                "system": "42505395X31011412A2101",
                "code": "ACSN"
            }]
        },
        "system": "42505395X31011412A2101",
        "value": "CT00000266"
    }],
    "status": "available",
    "modality": [{
        "system": "42505395X31011412A2101",
        "code": "CT"
    }],
    "subject": {
        "reference": "Patient/1164391"
    },
    "started": "2019-11-08T10:33:52.000+08:00",
    "basedOn": [{
        "reference": "ServiceRequest/1164392"
    }],
    "referrer": {
        "reference": "Practitioner/1166854",
        "display": "内科医生"
    },
    "interpreter": [{
        "reference": "Practitioner/1164384",
        "display": "系统管理员"
    }],
    "numberOfSeries": 3,
    "numberOfInstances": 4,
    "procedureCode": [{
        "coding": [{
            "system": "42505395X31011412A2101",
            "code": "肱骨CT,尺桡骨CT",
            "display": "肱骨CT,尺桡骨CT"
        }],
        "text": "肱骨CT,尺桡骨CT"
    }],
    "description": "肱骨CT,尺桡骨CT",
    "series": [{
        "uid": "123132.12312.32131",
        "number": 1,
        "numberOfInstances": 2,
        "started": "2020-05-14T19:06:00.000+08:00",
        "instance": [{
            "uid": "123asda132",
            "sopClass": {
                "system": "urn:ietf:rfc:3986",
                "code": "urn:oid:1.2.840.10008.5.1.4.1.1.1"
            },
            "number": 1
        }, {
            "uid": "123asda1321111",
            "sopClass": {
                "system": "urn:ietf:rfc:3986",
                "code": "urn:oid:1.2.840.10008.5.1.4.1.1.1"
            },
            "number": 2
        }]
    }, {
        "uid": "12.313212312.32131",
        "number": 2,
        "numberOfInstances": 1,
        "started": "2020-05-14T19:06:00.000+08:00",
        "instance": [{
            "uid": "sfdsdf1213123dfdf",
            "sopClass": {
                "system": "urn:ietf:rfc:3986",
                "code": "urn:oid:1.2.840.10008.5.1.4.1.1.1"
            },
            "number": 3
        }]
    }, {
        "uid": "12313.2123123.2131",
        "number": 3,
        "numberOfInstances": 1,
        "started": "2020-05-14T19:06:00.000+08:00",
        "instance": [{
            "uid": "dfd23423",
            "sopClass": {
                "system": "urn:ietf:rfc:3986",
                "code": "urn:oid:1.2.840.10008.5.1.4.1.1.1"
            },
            "number": 4
        }]
    }]
}