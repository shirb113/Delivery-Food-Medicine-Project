const mongo = require("mongoose");


module.exports = db => {
    // create a schema
    let schema = new mongo.Schema({
        Active: { type: Boolean, default: true, required: true },
        id: { type: String, unique: true, required: true },
        fullName: { type: String, unique: true },
        email: { type: String, unique: true },
        phone: { type: String, unique: true },
        address: { type: String, unique: true, required: true },
        packageArrived: { type: Boolean, default: false, required: true },

    }, { autoIndex: true });

    //db.model('packages', schema);



    schema.statics.CREATE = async function (package) {
        console.log("create \n");
        return this.create({
            Active: true,
            id: package[0],
            fullName: package[1],
            email: package[2],
            phone: package[3],
            address: package[4],
            packageArrived: false
        });

    };

    // on every save, add the date
    schema.pre('save', function (next) {
        //אם נרצה להוסיף שכלולים של בדיקות וכאלה אז כאן יהיה קריאה לפונקציות שעושות בדיקות אלה
        next();
    });

    schema.statics.REQUEST = async function () {
        console.log('I am in REQUEST function');
        // no arguments - bring all at once
        const args = Array.from(arguments); // [...arguments]
        if (args.length === 0) {
            console.log("request: no arguments - bring all at once");
            return this.find({}).exec();
        }

        // perhaps last argument is a callback for every single document
        let callback = arguments[arguments.length - 1];
        if (callback instanceof Function) {
            let asynch = callback.constructor.name === 'AsyncFunction';
            console.log(`request: with ${asynch ? 'async' : 'sync'} callback`);
            args.pop();
            let cursor, user;
            try {
                cursor = await this.find(...args).cursor();
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
            console.log("request: by ID");
            return this.findById(args[0]).exec();
        }

        // There is no callback - bring requested at once
        console.log(`request: without callback: ${JSON.stringify(args)}`)
        //console.log(await this.find(...args).exec());
        let cursor = await this.find(...args).cursor();
        let result = [];
        while (null !== (user = await cursor.next())) {
            result.push(user);
            console.log("user in REQUEST" + user);
        }
        return result;
    };
    schema.statics.DELETE = async function (id) { return this.findByIdAndRemove(id).exec(); };




    schema.statics.UPDATE = async function (package) { return this.findOneAndUpdate({ id: package.id }, package).exec(); };





    // the schema is useless so far
    // we need to create a model using it
    // db.model('User', schema, 'User'); // (model, schema, collection)
    db.model('packages', schema); // if model name === collection name
    console.log("packages model created");
};