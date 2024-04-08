const questionSchema = new mongoose.Schema({
    title: { type: String },
    questions: { type: String },
    options: [{ option: String, isCorrect: Boolean, id: Number }],
    correctAnswer: { type: String },
  });
  const QuestionModel = mongoose.model('Question', questionSchema);
export default QuestionModel;