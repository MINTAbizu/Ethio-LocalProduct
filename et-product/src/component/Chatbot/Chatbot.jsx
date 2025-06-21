import React, { useState, useRef } from 'react';

const OPENAI_API_KEY = 'YOUR_OPENAI_API_KEY'; // Replace with your key
const OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions';

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hi! How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const handleSend = async () => {
    if (!input.trim()) return;
    const newMessages = [...messages, { sender: 'user', text: input }];
    setMessages(newMessages);
    setInput('');
    setLoading(true);
    try {
      const response = await fetch(OPENAI_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            { role: 'system', content: 'You are a helpful customer support assistant.' },
            ...newMessages.map(m => ({ role: m.sender === 'user' ? 'user' : 'assistant', content: m.text }))
          ],
          max_tokens: 150,
        }),
      });
      const data = await response.json();
      const aiText = data.choices?.[0]?.message?.content || 'Sorry, I could not understand.';
      setMessages([...newMessages, { sender: 'bot', text: aiText }]);
    } catch (err) {
      setMessages([...newMessages, { sender: 'bot', text: 'Error connecting to AI.' }]);
    }
    setLoading(false);
  };

  React.useEffect(() => {
    if (open && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, open]);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          position: 'fixed',
          bottom: 30,
          right: 30,
          zIndex: 2000,
          borderRadius: '50%',
          width: 60,
          height: 60,
          background: '#007bff',
          color: '#fff',
          border: 'none',
          fontSize: 30,
          boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
          cursor: 'pointer',
        }}
        aria-label="Open chat"
      >
        💬
      </button>
      {/* Chat Window */}
      {open && (
        <div style={{
          position: 'fixed',
          bottom: 100,
          right: 30,
          width: 350,
          maxHeight: 500,
          background: '#fff',
          borderRadius: 10,
          boxShadow: '0 2px 16px rgba(0,0,0,0.25)',
          zIndex: 2001,
          display: 'flex',
          flexDirection: 'column',
        }}>
          <div style={{
            background: '#007bff',
            color: '#fff',
            padding: '12px 16px',
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            fontWeight: 'bold',
            fontSize: 18,
          }}>
            Customer Support
            <button onClick={() => setOpen(false)} style={{ float: 'right', background: 'none', border: 'none', color: '#fff', fontSize: 20, cursor: 'pointer' }}>&times;</button>
          </div>
          <div style={{ flex: 1, overflowY: 'auto', padding: 16, background: '#f7f7f7' }}>
            {messages.map((msg, idx) => (
              <div key={idx} style={{
                textAlign: msg.sender === 'user' ? 'right' : 'left',
                margin: '8px 0',
              }}>
                <span style={{
                  display: 'inline-block',
                  background: msg.sender === 'user' ? '#007bff' : '#e9ecef',
                  color: msg.sender === 'user' ? '#fff' : '#333',
                  borderRadius: 16,
                  padding: '8px 14px',
                  maxWidth: '80%',
                  wordBreak: 'break-word',
                }}>{msg.text}</span>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div style={{ display: 'flex', borderTop: '1px solid #eee', padding: 8, background: '#fff' }}>
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSend()}
              placeholder="Type your message..."
              style={{ flex: 1, border: 'none', outline: 'none', padding: 8, fontSize: 16 }}
              disabled={loading}
            />
            <button
              onClick={handleSend}
              disabled={loading || !input.trim()}
              style={{
                background: '#007bff',
                color: '#fff',
                border: 'none',
                borderRadius: 8,
                padding: '8px 16px',
                marginLeft: 8,
                fontWeight: 'bold',
                cursor: loading ? 'not-allowed' : 'pointer',
              }}
            >
              {loading ? '...' : 'Send'}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot; 