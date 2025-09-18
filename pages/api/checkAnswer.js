export default function handler(req, res) {
  if (req.method === 'POST') {
    const { answer, questionId } = req.body;
    
    // Respostas corretas para cada questão
    const correctAnswers = {
      1: "wpa2",
      2: "tls", 
      3: "man-in-the-middle"
    };
    
    const correct = answer.trim().toLowerCase() === correctAnswers[questionId];
    res.status(200).json({ correct });
  } else {
    res.status(405).json({ message: 'Only POST method allowed' });
  }
}
