import { mongoose } from "./../config/mongoose.js";

const donorSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
    purpose: {
    type: String,
    required: true,
  },
  reference: {
    type: String,
    required: true,
  },
});

const Donor = mongoose.model("Donor", donorSchema);

export { Donor };
