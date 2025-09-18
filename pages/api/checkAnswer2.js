export default function handler(req, res) {
  if (req.method === 'POST') {
    const { answer } = req.body;
    const correct = answer.trim().toLowerCase() === 'tls';
    res.status(200).json({ correct });
  } else {
    res.status(405).json({ message: 'Only POST method allowed' });
  }
}
