import mongoose, { models } from 'mongoose';
const { Schema, model } = mongoose;

const sessionSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: ['open', 'closed'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
    immutable: true,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  }
});

const Session = models && models.Session ? models.User : model('Session', sessionSchema);
export default Session;