const express=require('express');
const bodyParser=require("body-parser");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extened:true}));
const MongoClient=require("mongodb").MongoClient;
const ObjectID=require('mongodb').ObjectID;
var db;
// response
//###################################language#######################
app.get('/ln',function(req,res){
    db.collection('lns').find().toArray(function(err,docs){
        if (err){
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(docs)
    })
})

app.post('/ln',function(req,res){
        var ln={ lan:req.body.lan,
            value:req.body.value
        };
    db.collection('lns').insert(ln,function(err,result){
        if(err){
            console.log(err);
            res.sendStatus(500);
        }
    res.send(ln);
    })
})
app.put('/ln/:lan',function(req,res){
    db.collection('lns').update(
        { lan: req.params.lan },
        { $inc: { "value": 1 } },
        function(err,result){
             if(err){
            console.log(err);
            res.sendStatus(500);
        }
             res.sendStatus(200);
             }
                                    );
   
})
//####################################text####################################

app.get('/text',function(req,res){
    db.collection('text').find().toArray(function(err,docs){
        if (err){
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(docs)
    })
})

app.post('/text',function(req,res){
        var txt={ text:req.body.text,     
        };
    db.collection('text').insert(txt,function(err,result){
        if(err){
            console.log(err);
            res.sendStatus(500);
        }
    res.send(txt);
    })
})

   
MongoClient.connect("mongodb://localhost:27017/api",function(err,database){
    if(err){
        return console.log(err);
    }
    db=database;
    app.listen(3000);
    
})
 