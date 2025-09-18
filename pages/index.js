import { useState } from 'react';

export default function Home() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answer, setAnswer] = useState('');
  const [result, setResult] = useState(null);

  // Array com suas questões
  const questions = [
    {
      id: 1,
      question: "Qual é o principal protocolo para segurança em redes Wi-Fi?",
      correctAnswer: "wpa2"
    },
    {
      id: 2, 
      question: "Qual protocolo protege dados em trânsito na internet?",
      correctAnswer: "tls"
    },
    {
      id: 3,
      question: "Qual tipo de ataque intercepta comunicações entre duas partes?",
      correctAnswer: "man-in-the-middle"
    }
  ];

  async function checkAnswer() {
    const res = await fetch('/api/checkAnswer', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        answer, 
        questionId: questions[currentQuestion].id 
      }),
    });
    const data = await res.json();
    setResult(data.correct ? 'Resposta correta!' : 'Resposta incorreta!');
  }

  function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setAnswer('');
      setResult(null);
    }
  }

  function prevQuestion() {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setAnswer('');
      setResult(null);
    }
  }

  return (
    <div style={{ padding: 20, fontFamily: 'Arial' }}>
      <h1>Simulado Security+</h1>
      <p><strong>Questão {currentQuestion + 1}/{questions.length}:</strong></p>
      <p>{questions[currentQuestion].question}</p>
      <input
        type="text"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder="Digite sua resposta"
        style={{ padding: 8, fontSize: 16, width: 300 }}
      />
      <button onClick={checkAnswer} style={{ marginLeft: 10, padding: '8px 16px' }}>
        Verificar
      </button>
      
      {result && <p style={{ marginTop: 20, fontWeight: 'bold' }}>{result}</p>}
      
      <div style={{ marginTop: 20 }}>
        <button onClick={prevQuestion} disabled={currentQuestion === 0}>
          Anterior
        </button>
        <button onClick={nextQuestion} disabled={currentQuestion === questions.length - 1} style={{ marginLeft: 10 }}>
          Próxima
        </button>
      </div>
    </div>
  );
}
