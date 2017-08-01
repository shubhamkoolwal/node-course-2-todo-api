//const MongoClient =require('mongodb').MongoClient;

const {MongoClient}=require('mongodb');
var user={

	name:'shubham'
	age:23
};
var{name}=user;
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>
	{
			if(err){
				return console.log("unable to connect to mongodb server");
			}
			console.log("connected to mongodb server");

			db.collection('Todos').insertOne({
				_id:100,
				Name:'Shubham',
				age:23,
				designation:'software developet'
			}, (err,result) =>{

				if(err)
				{
					return console.log('unable to insert',err);
				}
				console.log(result.ops[0]._id);
				console.log(result.ops[0]._id.getTimesstamp());
			//	var stringify = require('json-stringify-safe');
				/*console.log(JSON.stringify(result.ops,(key,value)=>
					{
						//here result is an array 
							if(typeof value=='function')
					{
					return undefined;
					}
				return value;
					}));*/

			});
			db.close();
	});