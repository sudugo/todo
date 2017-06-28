const {MongoClient , ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(error,db)=>{
  if(error)
  {
    return console.log("Unable to connect to MongoDB server");
  }
  console.log('Connected to MongoDB server');

  //delete many
  // db.collection('Todos').deleteMany({text : 'Eat lunch'}).then((result)=>{
  //   console.log(result);
  // });
  //delete one
  // db.collection('Todos').deleteOne({text : 'Eat lunch'}).then((result)=>{
  //   console.log(result);
  // });
  //find one and update
    db.collection('Todos').findOneAndUpdate({_id : new ObjectID('59534b62385b27a367dcdfeb')},{$set:{completed:true}},{returnOriginal:false}).
    then((result)=>{
      console.log(result);
    });
  db.close();
});
