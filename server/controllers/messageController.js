const Message = require('../models/Message');
const User = require('../models/user');

module.exports={
    allMessages(req, res) {
        Message.find().then(Messages => {
            res.send(Messages);
        }).catch(error => res.send(error));

    },
    newMessage(req, res) {
        Message.create(req.body).then(newMessage => {
          res.send({success:"Thank You for your Message. A contractor will be contacting you soon to schedule an appointment.", Message:newMessage});    
        }).catch(error => res.send(error));

    },//can be used as a put since it is updating?
    deleteMessage(req, res) {
        const { id } = req.params;
        Message.findByIdAndDelete(id).then(deletedMessage => {
            res.send(deletedMessage);
        }).catch(error => res.send(error));
    },
    viewMessage(req, res) {
        const { id } = req.params;
        Message.findById(id).then(oneMessage =>{
            res.send(oneMessage);
        }).catch(error => res.send(error));
},
completeMessage(req, res){
    const { id } = req.params;
    Message.findByIdAndUpdate(id, {complete: true}).then(oneMessage =>{
        res.send({success:true});
    }).catch(error => res.send(error));
}
};