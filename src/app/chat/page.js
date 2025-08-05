'use client';

import { useState, useEffect } from 'react';

export default function ChatPage() {
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const login = async () => {
    const res = await fetch('/api/auth', {
      method: 'POST',
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      setAuthenticated(true);
      fetchMessages();
      setInterval(fetchMessages, 3000);
    } else {
      alert('Wrong password!');
    }
  };

  const fetchMessages = async () => {
    const res = await fetch('/api/messages');
    const data = await res.json();
    setMessages(data);
  };

  const sendMessage = async () => {
    if (!input) return;

    await fetch('/api/messages', {
      method: 'POST',
      body: JSON.stringify({ message: input }),
    });

    setInput('');
    fetchMessages();
  };

  return (
    <div style={{ padding: 20 }}>
      {!authenticated ? (
        <div>
          <h2>Enter Password</h2>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button onClick={login}>Login</button>
        </div>
      ) : (
        <div>
          <h2>Private Chat</h2>
          <div style={{ border: '1px solid #ccc', height: 200, overflowY: 'scroll', padding: 10 }}>
            {messages.map((m, i) => (
              <div key={i}>
                [{m.time}] {m.message}
              </div>
            ))}
          </div>
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Write message"
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      )}
    </div>
  );
}
