const {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(error,db)=>{
  if(error)
  {
    return console.log("Unable to connect to MongoDB server");
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').insertOne({
  //   text: 'Something To Do',
  //   completed:  false
  // },(error,result)=>{
  //   if(error){
  //     return console.log('Unable To Insert In Todo Collection',error);
  //   }

  db.collection('users').insertOne({
    name: 'Some Name',
    location:  'Some Location',
    age: 25
  },(error,result)=>{
    if(error){
      return console.log('Unable To Insert In Users Collection',error);
    }

    console.log(JSON.stringify(result.ops,undefined,2));
  });

  db.close();
});
