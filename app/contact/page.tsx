'use client';
import { useState } from 'react';
import { useLang, t } from '@/lib/language-context';

const ENDPOINT = 'https://formspree.io/f/mvzdnzed';

export default function ContactPage() {
  const { lang } = useLang();
  const T = (key: string) => t[key][lang];

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [form, setForm] = useState({
    name: '', email: '', type: '', message: '',
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
        setForm({ name: '', email: '', type: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="wrap--narrow" style={{ paddingTop: 48, paddingBottom: 60 }}>

      <h1 className="sec__title">{T('contactHead')}</h1>
      <p className="sec__sub" style={{ marginBottom: 32 }}>
        박숭현 선교사 (Simon Park) · QuestionsOnly.Life
      </p>

      <div style={{
        background: 'var(--green-pale)',
        border: '1px solid var(--green-mid)',
        borderRadius: 'var(--r)',
        padding: '20px 24px',
        marginBottom: 36,
      }}>
        <p style={{ fontSize: 14, color: 'var(--green-dark)', lineHeight: 1.85, marginBottom: 10 }}>
          {lang === 'ko'
            ? '이야기를 읽고 질문이 생기셨나요? 소그룹 나눔이나 줌 세션을 요청하고 싶으신가요? 아래 양식을 통해 연락해 주세요.'
            : 'Have a question after reading a story? Would you like to request a small group session or a Zoom conversation? Fill out the form below.'}
        </p>
        <p style={{ fontSize: 13, color: 'var(--muted)', fontStyle: 'italic' }}>
          — 박숭현 (Simon Park)
        </p>
      </div>

      {status === 'success' && (
        <div style={{
          background: '#eaf5ee', border: '1px solid #6ab187',
          borderRadius: 'var(--r)', padding: '20px 24px',
          marginBottom: 28, textAlign: 'center',
        }}>
          <p style={{ fontSize: 16, fontWeight: 700, color: '#2a5c35', marginBottom: 6 }}>
            {T('successHead')}
          </p>
          <p style={{ fontSize: 13, color: '#3a7a4a' }}>{T('successDesc')}</p>
        </div>
      )}

      {status === 'error' && (
        <div style={{
          background: '#fff0f0', border: '1px solid #e08080',
          borderRadius: 'var(--r)', padding: '16px 20px', marginBottom: 28,
        }}>
          <p style={{ fontSize: 13, color: '#8b1a1a' }}>{T('errorDesc')}</p>
        </div>
      )}

      <div style={{ background: '#fff', border: '1px solid var(--rule)', borderRadius: 'var(--r)', padding: '28px 32px' }}>
        <form onSubmit={handleSubmit}>

          <div style={{ marginBottom: 20 }}>
            <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: 'var(--muted)', marginBottom: 6 }}>
              {T('nameLabel')} <span style={{ color: '#c00' }}>*</span>
            </label>
            <input type="text" name="name" required value={form.name}
              onChange={handleChange}
              placeholder={lang === 'ko' ? '성함을 입력해 주세요' : 'Your name'}
              style={{ width: '100%', padding: '10px 14px', fontSize: 14, border: '1px solid var(--rule)', borderRadius: 'var(--r)', fontFamily: 'var(--body)', color: 'var(--ink)', outline: 'none', background: 'var(--cream)' }}
            />
          </div>

          <div style={{ marginBottom: 20 }}>
            <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: 'var(--muted)', marginBottom: 6 }}>
              {T('emailLabel')} <span style={{ color: '#c00' }}>*</span>
            </label>
            <input type="email" name="email" required value={form.email}
              onChange={handleChange} placeholder="your@email.com"
              style={{ width: '100%', padding: '10px 14px', fontSize: 14, border: '1px solid var(--rule)', borderRadius: 'var(--r)', fontFamily: 'var(--body)', color: 'var(--ink)', outline: 'none', background: 'var(--cream)' }}
            />
          </div>

          <div style={{ marginBottom: 20 }}>
            <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: 'var(--muted)', marginBottom: 6 }}>
              {T('typeLabel')} <span style={{ color: '#c00' }}>*</span>
            </label>
            <select name="type" value={form.type} onChange={handleChange} required
              style={{ width: '100%', padding: '10px 14px', fontSize: 14, border: '1px solid var(--rule)', borderRadius: 'var(--r)', fontFamily: 'var(--body)', color: 'var(--ink)', outline: 'none', background: 'var(--cream)', cursor: 'pointer' }}
            >
              <option value="">{lang === 'ko' ? '선택해 주세요' : 'Please select'}</option>
              <option value="question">{T('typeQ')}</option>
              <option value="zoom">{T('typeZ')}</option>
              <option value="smallgroup">{T('typeSG')}</option>
              <option value="other">{T('typeO')}</option>
            </select>
          </div>

          <div style={{ marginBottom: 28 }}>
            <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: 'var(--muted)', marginBottom: 6 }}>
              {T('messageLabel')} <span style={{ color: '#c00' }}>*</span>
            </label>
            <textarea name="message" required value={form.message}
              onChange={handleChange} rows={6}
              placeholder={lang === 'ko' ? '이야기나 질문을 자유롭게 나눠주세요...' : 'Share your thoughts or questions freely...'}
              style={{ width: '100%', padding: '10px 14px', fontSize: 14, border: '1px solid var(--rule)', borderRadius: 'var(--r)', fontFamily: 'var(--body)', color: 'var(--ink)', outline: 'none', background: 'var(--cream)', resize: 'vertical', lineHeight: 1.7 }}
            />
          </div>

          <button type="submit" disabled={status === 'sending'}
            style={{ width: '100%', padding: '12px 24px', background: status === 'sending' ? 'var(--faint)' : 'var(--green)', color: '#fff', border: 'none', borderRadius: 'var(--r)', fontSize: 15, fontWeight: 700, cursor: status === 'sending' ? 'not-allowed' : 'pointer', fontFamily: 'var(--body)' }}
          >
            {status === 'sending' ? T('sendingBtn') : T('sendBtn')}
          </button>

          <p style={{ fontSize: 11, color: 'var(--faint)', marginTop: 12, textAlign: 'center' }}>
            {T('allRequired')}
          </p>

        </form>
      </div>

    </div>
  );
}