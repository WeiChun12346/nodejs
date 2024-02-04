import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
    id: String,
    name: String,
    email: String,
    password: String,
    dateOfBirth: Date,
    createdDate: {
        type: Date,
        default: new Date().toISOString(),
    },
    updatedDate: {
        type: Date,
        default: new Date().toISOString(),
    },
    dateOfBirth: Date,
    deletedAt: {
        type: Date,
        default: null,
    },
},
{
    collection: process.env.DB_COLLECTION_NAME,
    versionKey: false
}
);

const getUser = function (next) {
    this.select('-password');
    this.where({ deletedAt: null });
    next();
};

const updateUser = function (next) {
    this._update.updatedDate = new Date().toISOString();
    next();
};

userSchema.pre('find', getUser);
userSchema.pre('findOne', getUser);
userSchema.pre('findById', getUser);
userSchema.pre('updateOne', updateUser);
userSchema.pre('updateMany', updateUser);
userSchema.pre('findOneAndUpdate', updateUser);

const User = mongoose.model('user', userSchema);

export default User;