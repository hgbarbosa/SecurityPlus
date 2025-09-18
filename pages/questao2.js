import { useState } from 'react';

export default function Questao2() {
  const [answer, setAnswer] = useState('');
  const [result, setResult] = useState(null);

  async function checkAnswer() {
    const res = await fetch('/api/checkAnswer2', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ answer }),
    });
    const data = await res.json();
    setResult(data.correct ? 'Resposta correta!' : 'Resposta incorreta!');
  }

  return (
    <div style={{ padding: 20, fontFamily: 'Arial' }}>
      <h1>Simulado Security+ - Questão 2</h1>
      <p>Qual protocolo protege dados em trânsito na internet?</p>
      <input
        type="text"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder="Digite sua resposta"
        style={{ padding: 8, fontSize: 16 }}
      />
      <button onClick={checkAnswer} style={{ marginLeft: 10, padding: '8px 16px' }}>
        Verificar
      </button>
      {result && <p style={{ marginTop: 20, fontWeight: 'bold' }}>{result}</p>}
    </div>
  );
}
