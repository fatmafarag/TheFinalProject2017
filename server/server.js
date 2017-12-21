var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();

var tasks = [
    
    { "id": 1, "Thetask":"", "Thedeadline":"", "Hours":"", "Status":""},
    { "id": 2, "Thetask":"", "Thedeadline":"", "Hours":"", "Status":""},
    { "id": 3, "Thetask":"", "Thedeadline":"", "Hours":"", "Status":""},
];

var newId = 4;

app.use(bodyParser.json());
app.options('/api/tasks', cors());
app.options('/api/tasks/:id', cors());

app.get("/api/tasks", cors(), function(req, res) {
    res.end(JSON.stringify(tasks));
});

app.post("/api/tasks", cors(), function(req, res) {
    req.body.id = newId;
    tasks.push(req.body);
    newId++;

    let jsonResponse = JSON.stringify(req.body);
    res.end(jsonResponse);
});

app.put("/api/tasks/:id", cors(), function(req, res) {
    let taskId = req.params.id;
    var task = tasks.find(task => task.id == taskId);

    if(task) {
        task.Thetask = req.body.Thetask;
        task.Thedeadline = req.body.Thedeadline;
        task.Hours = req.body.Hours;
        task.Status= req.body.Status;

    }

    res.end();
});

app.delete("/api/tasks/:id", cors(), function(req, res) {
    let taskId = req.params.id;
    let taskIndex = tasks.findIndex(task => task.id == taskId);

    if(taskIndex >= 0) {
        tasks.splice(taskIndex, 1);
    }

    res.end();
})

// Listen to events on http://{hostname}:8081
var server = app.listen(8081, function() {
    var host = server.address().address;
    var port = server.address().port;

    if(!host || host === "::")
    {
        host = "localhost:";
    }
    
    console.log("Crud Server listening at http://%s%s", host, port);
});