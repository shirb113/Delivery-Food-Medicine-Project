const mongo = require("mongoose");


module.exports = db => {
    // create a schema
    let schema = new mongo.Schema({
        innerHtml: { type: String, required: true }
        // images: { type: Array }
    }, { autoIndex: true });


    schema.statics.CREATE = async function (post) {
        console.log("create \n");
        return this.create({
            innerHtml: post[0],
        });
    }

    schema.statics.REQUEST = async function () {
        console.log('I am in REQUEST function');
        const args = Array.from(arguments); // [...arguments]
        if (args.length === 0) {
            return this.find({}, (err, res) => { }).select('-__v -_id').exec();
        }

        // perhaps last argument is a callback for every single document
        let callback = arguments[arguments.length - 1];
        if (callback instanceof Function) {
            let asynch = callback.constructor.name === 'AsyncFunction';
            console.log(`request: with ${asynch ? 'async' : 'sync'} callback`);
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
            console.log("request: by ID");
            return this.findById(args[0]).select('-__v -_id').exec();
        }

        // There is no callback - bring requested at once
        console.log(`request: without callback: ${JSON.stringify(args)}`)
        let cursor = await this.find(...args).select('-__v -_id').cursor();
        let result = [];
        while (null !== (user = await cursor.next())) {
            result.push(user);
            console.log("user in REQUEST" + user);
        }
        return result;
    };

    db.model('leftPosts', schema);
    console.log("leftPosts model created");
};