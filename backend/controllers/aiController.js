// backend/controllers/aiController.js
const { getChatbotResponse } = require("../../ai/chatbot/chatbot.js");

exports.getAIResponse = async (req, res) => {
  const userMessage = req.query.message || "";
  const aiReply = await getChatbotResponse(userMessage);
  res.status(200).json({
    success: true,
    reply: aiReply,
    timestamp: new Date().toISOString(),
  });
};
