const express = require('express')
const fileUpload = require('express-fileupload');

const app = express()

app.use(fileUpload())

app.post('/upload_video', function(req, res) {
    let sampleFile;
    let uploadPath;

    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No file was uploaded!')
    }
    sampleFile = req.files.fileToUpload;
    uploadPath = __dirname + '/uploads/' + sampleFile.name

    sampleFile.mv(uploadPath, function(err) {
        if (err) return res.status(500).send(err)

        res.send('File Uploaded!')
    })
})

app.listen(8080, function() {
    console.log('App is listening on port 8080!')
})