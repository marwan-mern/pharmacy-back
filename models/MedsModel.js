import mongoose from 'mongoose';

const medSchema = mongoose.Schema({
    Name: String,
    Quantity: Number,
    Price:Number,
    type:String,
    QuantityOverMonth:Number,
    UpdatedToday:Boolean
})

const medicines = mongoose.model('medicines', medSchema);

export default medicines;