import mongoose from "mongoose";

const laundrySchema = mongoose.Schema({
  pickUpDate: String,
  topWearPrice: Number,
  bottomWearPrice: Number,
  woolenWearPrice: Number,
  totalPrice: Number,
  description: String,
  contactPerson: String,
  userName: String,
  statusLaundry: { type: Number, default: 0 },
  userId: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

var laundry = mongoose.model("laundry", laundrySchema);

export default laundry;
