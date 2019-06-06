const express = require('express')
const api = express()
const port = 80
const STATUS_CODE = {
    'OK': 200,
    'NOT_FOUND': 404,
    'INTERNAL_SERVER_ERROR': 500
}

api.get('/:patientId', (req, res) => getPatientById(res.params.patientId))

function getPatientById(patientId) {
    statusCode = STATUS_CODE['OK']
    patientData = {
        id: '361653C6-E94E-4D63-B24F-E228F0E8BEB5',
        name: 'John Appleseed',
        birthYear: 1986,
        birthMonth: 10,
        birthDay: 31,
        extensions: {

        }
    }

    respondWith({statusCode: statusCode, body: patientData})
}

function respondWith(responseData) {
    let { statusCode = 500, body = '' } = responseData

    res.status(statusCode)
       .send(body)
}