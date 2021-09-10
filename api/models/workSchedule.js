const mongo = require("mongoose");


module.exports = db => {
    let schema = new mongo.Schema({
        date: { type: String, required: true },
        id: { type: String, required: true },
        packages: { type: Array, required: false }


    }, { autoIndex: true });

    schema.statics.CREATE = async function (package) {
        //console.log("create \n");
        return this.create({
            date: package[0],
            id: package[1],
            packages: package[2]
        });

    };

    schema.statics.REQUEST = async function () {

        const args = Array.from(arguments); // [...arguments]
        if (args.length === 0) {
            return this.find({}, (err, res) => { }).select('-__v -_id').exec();

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

    schema.statics.REQUESTBYDATE = async function (date) {
        console.log("in REQUESTBYDATE");
        return this.find({'date': date })

    }

    schema.statics.UPDATEPACKAGE = async function (package) {
        console.log("in update");
        let package_list=[package.date, package.id,package.packages];
        await this.findOneAndRemove({ id: package.id , date: package.date});
        this.CREATE(package_list)
        //return this.({ id: package.id }, updateDocument);

    }


    db.model('workSchedule', schema);

};