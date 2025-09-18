// pages/index.js - Front-end React simples com uma questão e checagem via API

import { useState } from 'react';

export default function Home() {
const [answer, setAnswer] = useState('');
const [result, setResult] = useState(null);

async function checkAnswer() {
const res = await fetch('/api/checkAnswer', {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({ answer }),
});
const data = await res.json();
setResult(data.correct ? 'Resposta correta!' : 'Resposta incorreta!');
}

return (
<div style={{ padding: 20, fontFamily: 'Arial' }}>
<h1>Simulado Security+</h1>
<p>Questão: Qual é o principal protocolo para segurança em redes Wi-Fi?</p>
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
