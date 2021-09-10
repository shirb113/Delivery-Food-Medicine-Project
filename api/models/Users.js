const mongo = require("mongoose");


module.exports = db => {
    // create a schema
    let schema = new mongo.Schema({
        Active: { type: Boolean, default: true, required: true },
        type: { type: String, enum: ["מנהל", "עובד"], required: true },
        id: { type: String, unique: true, required: true },
        fullName: { type: String, unique: true, required: true },
        userName: { type: String, unique: true, required: true },
        password: { type: String, unique: true, required: true },
        email: { type: String, unique: true },
        phone: { type: String, unique: true },
        address: { type: String, unique: true },
        image: { type: String },
        lat: { type: String},
        lon: { type:String}

    }, { autoIndex: true });


    schema.statics.CREATE = async function (user) {
        console.log("create \n");
        return this.create({
            Active: true,
            type: user[0],
            id: user[1],
            fullName: user[2],
            userName: user[3],
            password: user[4],
            email: user[5],
            phone: user[6],
            address: user[7],
            image: user[8],
            lat: user[9],
            lon: user[10]
        });

    };

    schema.statics.REQUEST = async function () {
        //console.log('I am in REQUEST function');
        // no arguments - bring all at once
        const args = Array.from(arguments); // [...arguments]
        if (args.length === 0) {
            //console.log("request: no arguments - bring all at once");
            return this.find({}, (err, res) => { }).select('-__v -_id').exec();
            // return this.find({}).select('-__v -_id -password');
            // return this.find({}, { "password": 0 }).exec();
        }

        // perhaps last argument is a callback for every single document
        let callback = arguments[arguments.length - 1];
        if (callback instanceof Function) {
            let asynch = callback.constructor.name === 'AsyncFunction';
            //console.log(`request: with ${asynch ? 'async' : 'sync'} callback`);
            args.pop();
            let cursor, user;
            try {
                cursor = await this.find(...args).select('-__v -_id').cursor();
            } catch (err) { throw err; }
            try {
                while (null !== (user = await cursor.next())) {
                    if (asynch) {
                        try {
                            await callback(user);
                        } catch (err) { throw err; }
                    }
                    else {
                        callback(user);
                    }
                }
            } catch (err) { throw err; }
            return;
        }

        // request by id as a hexadecimal string
        if (args.length === 1 && typeof args[0] === "string") {
            //console.log("request: by ID");
            return this.findById(args[0]).select('-__v -_id').exec();
        }

        // There is no callback - bring requested at once
        //console.log(`request: without callback: ${JSON.stringify(args)}`)
        //console.log(await this.find(...args).exec());
        let cursor = await this.find(...args).select('-__v -_id').cursor();
        let result = [];
        while (null !== (user = await cursor.next())) {
            result.push(user);
            console.log("user in REQUEST" + user);
        }
        return result;
    };
    schema.statics.DELETE = async function (userid) { 
        console.log("in delete")
       return this.findByIdAndRemove(id).select('-__v -_id').exec(); };

    schema.statics.UPDATEUSER = async function (user) {
        console.log("in update");
        return this.findOneAndUpdate({id: user.id}, user);
       
    }
    schema.statics.REQUESTBYID = async function (id) {
        //console.log("in REQUESTBTID");
        return this.findOne({'id': id});
       
    }
    schema.statics.REQUESTBYNAME = async function (name) {
        //console.log("in REQUESTBTID");
        return this.findOne({'userName': name});
       
    }

    // the schema is useless so far
    // we need to create a model using it
    // db.model('User', schema, 'User'); // (model, schema, collection)
    db.model('users', schema); // if model name === collection name
    //console.log("Users model created");

};