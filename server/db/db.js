// Setting up my database page
const mongoose = require('mongoose')
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/weaverFlooring',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}
);
mongoose.connection.once('open',function(){   
    console.log('You are connected to mongod.');
    
}).on('error',function(error){    
    console.log(error);
    
})