import mongoose from 'mongoose';
const { Schema } = mongoose;

const DoctorSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: {type: Boolean}
})

export const DoctorModel = mongoose.models?.doctor || mongoose.model('doctor', DoctorSchema)