import mongoose from "mongoose";

const chatResponseSchema = new mongoose.Schema({
  question: { type: String, required: true },
  answer: { type: String, required: true },
});

export default mongoose.model("ChatResponse", chatResponseSchema);
