import mongoose, { Schema } from 'mongoose';

const simpleSchema = new Schema({
    name: String,
    id: String,
    deletedAt: Date,
},
{ 
    collection: process.env.DB_COLLECTION_NAME,
    versionKey: false
});

const Simple = mongoose.model('simple', simpleSchema);

export default Simple;