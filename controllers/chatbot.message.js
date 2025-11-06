import ChatResponse from "../models/chatResponse.js";

export const getAnswer = async (req, res) => {
  try {
    const userQuestion = req.body.question?.toLowerCase();
    if (!userQuestion) return res.status(400).json({ answer: "Please ask a question." });

    const allData = await ChatResponse.find();

    // simple similarity check
    const match = allData.find(
      (item) =>
        userQuestion.includes(item.question.toLowerCase()) ||
        item.question.toLowerCase().includes(userQuestion)
    );

    if (match) {
      res.json({ answer: match.answer });
    } else {
      res.json({ answer: "Sorry, I don’t know about that yet 🤖" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
