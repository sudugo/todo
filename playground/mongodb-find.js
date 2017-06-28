const {MongoClient , ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(error,db)=>{
  if(error)
  {
    return console.log("Unable to connect to MongoDB server");
  }
  console.log('Connected to MongoDB server');

  db.collection('Todos').find().count().then((count)=>{
    console.log(`Todos Count: ${count}`);
  },(error)=>{
    console.log('Unable to fetch Todos',error);
  });

  db.close();
});
