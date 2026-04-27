'use client';
import { useState } from 'react';

const ENDPOINT = 'https://formspree.io/f/mvzdnzed';

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [form, setForm] = useState({
    name: '',
    email: '',
    type: '질문 · Question',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', type: '질문 · Question', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="wrap--narrow" style={{ paddingTop: 48, paddingBottom: 60 }}>

      <h1 className="sec__title">문의하기 · Contact</h1>
      <p className="sec__sub" style={{ marginBottom: 32 }}>
        박숭현 선교사 (Simon Park) · QuestionsOnly.Life
      </p>

      {/* Introduction */}
      <div style={{
        background: 'var(--green-pale)',
        border: '1px solid var(--green-mid)',
        borderRadius: 'var(--r)',
        padding: '20px 24px',
        marginBottom: 36,
      }}>
        <p style={{ fontSize: 14, color: 'var(--green-dark)', lineHeight: 1.85, marginBottom: 10 }}>
          이야기를 읽고 질문이 생기셨나요? 소그룹 나눔이나 줌 세션을 요청하고 싶으신가요?
          아래 양식을 통해 연락해 주세요. 가능한 한 빨리 답변 드리겠습니다.
        </p>
        <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.85 }}>
          Have a question after reading a story? Would you like to request a small group
          session or a Zoom conversation? Fill out the form below and I will respond
          as soon as I am able.
        </p>
        <p style={{ fontSize: 13, color: 'var(--muted)', marginTop: 10, fontStyle: 'italic' }}>
          — 박숭현 (Simon Park)
        </p>
      </div>

      {/* Success message */}
      {status === 'success' && (
        <div style={{
          background: '#eaf5ee',
          border: '1px solid #6ab187',
          borderRadius: 'var(--r)',
          padding: '20px 24px',
          marginBottom: 28,
          textAlign: 'center' as const,
        }}>
          <p style={{ fontSize: 16, fontWeight: 700, color: '#2a5c35', marginBottom: 6 }}>
            메시지가 전송되었습니다 · Message Sent
          </p>
          <p style={{ fontSize: 13, color: '#3a7a4a' }}>
            감사합니다. 가능한 한 빨리 답변 드리겠습니다.
            Thank you — I will be in touch as soon as possible.
          </p>
        </div>
      )}

      {/* Error message */}
      {status === 'error' && (
        <div style={{
          background: '#fff0f0',
          border: '1px solid #e08080',
          borderRadius: 'var(--r)',
          padding: '16px 20px',
          marginBottom: 28,
        }}>
          <p style={{ fontSize: 13, color: '#8b1a1a' }}>
            전송 중 오류가 발생했습니다. 다시 시도해 주세요. ·
            Something went wrong. Please try again.
          </p>
        </div>
      )}

      {/* Form */}
      <div style={{
        background: '#fff',
        border: '1px solid var(--rule)',
        borderRadius: 'var(--r)',
        padding: '28px 32px',
      }}>
        <form onSubmit={handleSubmit}>

          {/* Name */}
          <div style={{ marginBottom: 20 }}>
            <label style={{
              display: 'block', fontSize: 12, fontWeight: 700,
              color: 'var(--muted)', marginBottom: 6, letterSpacing: '.04em',
            }}>
              이름 · Name <span style={{ color: '#c00' }}>*</span>
            </label>
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Your name · 성함을 입력해 주세요"
              style={{
                width: '100%', padding: '10px 14px', fontSize: 14,
                border: '1px solid var(--rule)', borderRadius: 'var(--r)',
                fontFamily: 'var(--body)', color: 'var(--ink)',
                outline: 'none', background: 'var(--cream)',
              }}
            />
          </div>

          {/* Email */}
          <div style={{ marginBottom: 20 }}>
            <label style={{
              display: 'block', fontSize: 12, fontWeight: 700,
              color: 'var(--muted)', marginBottom: 6, letterSpacing: '.04em',
            }}>
              이메일 · Email <span style={{ color: '#c00' }}>*</span>
            </label>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="your@email.com"
              style={{
                width: '100%', padding: '10px 14px', fontSize: 14,
                border: '1px solid var(--rule)', borderRadius: 'var(--r)',
                fontFamily: 'var(--body)', color: 'var(--ink)',
                outline: 'none', background: 'var(--cream)',
              }}
            />
          </div>

          {/* Message type */}
          <div style={{ marginBottom: 20 }}>
            <label style={{
              display: 'block', fontSize: 12, fontWeight: 700,
              color: 'var(--muted)', marginBottom: 6, letterSpacing: '.04em',
            }}>
              문의 유형 · Message Type <span style={{ color: '#c00' }}>*</span>
            </label>
            <select
              name="type"
              value={form.type}
              onChange={handleChange}
              style={{
                width: '100%', padding: '10px 14px', fontSize: 14,
                border: '1px solid var(--rule)', borderRadius: 'var(--r)',
                fontFamily: 'var(--body)', color: 'var(--ink)',
                outline: 'none', background: 'var(--cream)',
                cursor: 'pointer',
              }}
            >
              <option>질문 · Question</option>
              <option>구글 밑 세션 요청 · Google Meet Session Request</option>
              <option>소그룹 나눔 문의 · Small Group Inquiry</option>
              <option>기타 · Other</option>
            </select>
          </div>

          {/* Message */}
          <div style={{ marginBottom: 28 }}>
            <label style={{
              display: 'block', fontSize: 12, fontWeight: 700,
              color: 'var(--muted)', marginBottom: 6, letterSpacing: '.04em',
            }}>
              메시지 · Message <span style={{ color: '#c00' }}>*</span>
            </label>
            <textarea
              name="message"
              required
              value={form.message}
              onChange={handleChange}
              rows={6}
              placeholder="이야기나 질문을 자유롭게 나눠주세요 · Share your thoughts or questions freely..."
              style={{
                width: '100%', padding: '10px 14px', fontSize: 14,
                border: '1px solid var(--rule)', borderRadius: 'var(--r)',
                fontFamily: 'var(--body)', color: 'var(--ink)',
                outline: 'none', background: 'var(--cream)',
                resize: 'vertical' as const, lineHeight: 1.7,
              }}
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={status === 'sending'}
            style={{
              width: '100%', padding: '12px 24px',
              background: status === 'sending' ? 'var(--faint)' : 'var(--green)',
              color: '#fff', border: 'none', borderRadius: 'var(--r)',
              fontSize: 15, fontWeight: 700, cursor: status === 'sending' ? 'not-allowed' : 'pointer',
              fontFamily: 'var(--body)', transition: 'background .15s',
            }}
          >
            {status === 'sending'
              ? '전송 중... · Sending...'
              : '보내기 · Send Message'}
          </button>

          <p style={{ fontSize: 11, color: 'var(--faint)', marginTop: 12, textAlign: 'center' as const }}>
            * 모든 필드는 필수입니다 · All fields are required
          </p>

        </form>
      </div>

    </div>
  );
}