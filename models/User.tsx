import mongoose from 'mongoose';
const { Schema, models, model } = mongoose;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  name: { 
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    immutable: true,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  dateOfBirth: {
    type: Date,
  },
  gender: {
    type: String,
  },
  otherInfo: {
    type: String,
  },
});

const User = models && models.User ? models.User : model('User', userSchema);
export default User;