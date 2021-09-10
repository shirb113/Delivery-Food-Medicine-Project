const mongo = require("mongoose");


module.exports = db => {
    let schema = new mongo.Schema({
        from: { type: String, required: true },
        to: { type: String, required: true },
        msg: { type: String, required: true },
        date: { type: Date, required: true },
        uId: { type: String, required: true },
    }, { autoIndex: true });


    schema.statics.CREATE = async function (chatMsg) {
        console.log("create \n");
        return this.create({
            from: chatMsg[0],
            to: chatMsg[1],
            msg: chatMsg[2],
            date: chatMsg[3],
            uId: chatMsg[4],
        });
    }

    schema.statics.REQUEST_BY_USER = async function (user) {
        console.log("in REQUEST_BY_USER");
        return this.find({ $or: [{ 'to': user }, { 'to': '*' }, { 'from': user }] }).select('-__v -_id')
    }

    schema.statics.DELETE_MSG = async function (uId) {
        console.log(uId)
        return this.findOneAndDelete({ 'uId': uId }, function (err, data) {
            if (!err) {
                console.log("Deleted");
            }
        });

    }
    schema.statics.GET_MSG = async function ({ uId }) {
        return this.findOne({ 'uId': uId })
    }

    db.model('chatMsg', schema);
    console.log("chatMsg model created");
};