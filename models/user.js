const mongoose = require("mongoose");
const { Schema } = mongoose;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
});

// userSchema.plugin(passportLocalMongoose, {
//     usernameField: 'email' // Use email as the username field
// });

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);