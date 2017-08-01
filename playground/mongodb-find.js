//const MongoClient =require('mongodb').MongoClient;
//console.log(require('mongodb'));
const {MongoClient}=require('mongodb');
const {ObjectID}=require('mongodb');
/*var user={

	name:'shubham'
	age:23
};
var{name}=user;*/
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>
	{
			if(err){
				return console.log("unable to connect to mongodb server");
			}
			console.log("connected to mongodb server");

//			db.collection('Todoc').find({designation:'software developet'}).toArray().then((docs)=>{
				/*db.collection('Todoc').find({
					_id:new ObjectID("597f6f78357a1422e8f91103")
				}).toArray().then((docs)=>{
				console.log('Todoc');
				console.log(JSON.stringify(docs,undefined,2));	
			},(err)=>{
				 console.log("unable to fetch",err);
			})*/
		

		db.collection('Todoc').find().count().then((count)=>{
				//console.log('Todoc');
				console.log('total count is'+count);	
			},(err)=>{
				 console.log("unable to fetch",err);
			})

		db.close();
	});