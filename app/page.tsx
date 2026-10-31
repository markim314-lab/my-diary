'use client';
import { useState } from 'react';

export default function DiaryPage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // API Route로 POST 요청을 보냅니다.
    const res = await fetch('/api/diary', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, content }),
    });

    if (res.ok) {
      setMessage('✅ 저장 완료되었습니다!');
      setTitle('');
      setContent('');
    } else {
      setMessage('❌ 저장에 실패했습니다.');
    }
  };

  return (
    <div style={{ padding: '50px', maxWidth: '500px', margin: '0 auto' }}>
      <h1>웹 다이어리 작성</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <div>
          <label>Title:</label>
          <input 
            type="text" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            style={{ width: '100%', padding: '8px', marginTop: '5px', color: 'black' }} 
            required 
          />
        </div>
        <div>
          <label>Content:</label>
          <textarea 
            value={content} 
            onChange={(e) => setContent(e.target.value)} 
            style={{ width: '100%', padding: '8px', marginTop: '5px', height: '100px', color: 'black' }} 
            required 
          />
        </div>
        <button type="submit" style={{ padding: '10px', backgroundColor: '#0070f3', color: 'white', border: 'none', cursor: 'pointer' }}>
          Submit
        </button>
      </form>
      {message && <p style={{ marginTop: '20px', fontWeight: 'bold', color: 'green' }}>{message}</p>}
    </div>
  );
}