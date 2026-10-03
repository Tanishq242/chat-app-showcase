import { Check, Lock, ShieldCheck } from 'lucide-react'

/* Styled stand-ins shown until real screenshots are added to public/screenshots */

function Chat() {
  return (
    <div className="mock">
      <div className="mock-side">
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <div className="mock-avatar" />
          <div style={{ flex: 1, display: 'grid', gap: 5 }}>
            <div className="mock-line" style={{ width: '70%' }} />
            <div className="mock-line" style={{ width: '45%' }} />
          </div>
        </div>
        <div className="mock-search" />
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className={`mock-person ${i === 0 ? 'active' : ''}`}>
            <div className="mock-avatar" />
            <div style={{ flex: 1 }}>
              <div className="mock-line" style={{ width: `${70 - i * 8}%` }} />
            </div>
          </div>
        ))}
      </div>
      <div className="mock-main">
        <div className="mock-head">
          <span>Aarav</span>
          <span className="mock-enc">● End-to-end encrypted</span>
        </div>
        <div className="mock-chat">
          <div className="bubble in">Hey! Did you get the files?</div>
          <div className="bubble out">Yes, all good. Sending the keys now.</div>
          <div className="bubble in">Perfect, talk soon.</div>
        </div>
        <div className="mock-input">
          <div />
          <b />
        </div>
      </div>
      <div className="mock-right">
        <div className="mock-avatar" style={{ width: 46, height: 46 }} />
        <div className="mock-line" style={{ width: '80%' }} />
        <div className="mock-line" style={{ width: '55%' }} />
        <div className="mock-row" style={{ marginTop: 8 }}>
          <span>Options</span>
        </div>
      </div>
    </div>
  )
}

function Form({ variant }) {
  const fields =
    variant === 'signup'
      ? ['Name', 'Mobile', 'Password', 'Confirm Password']
      : variant === 'login'
        ? ['Mobile', 'Password']
        : ['Registered mobile number']
  const title = variant === 'signup' ? 'Create account' : variant === 'login' ? 'Welcome back' : 'Reset password'
  const btn = variant === 'signup' ? 'Sign Up' : variant === 'login' ? 'Sign In' : 'Send OTP'
  return (
    <div className="mock mock-split">
      <div className="left">
        <div>
          <Lock size={26} style={{ margin: '0 auto 8px' }} />
          Secure chat
        </div>
      </div>
      <div className="right">
        <div className="mock-title">{title}</div>
        {fields.map((f) => (
          <div key={f} className="mock-field">
            {f}
          </div>
        ))}
        {variant === 'login' && <div style={{ color: 'var(--accent)' }}>Forgot password?</div>}
        <div className="mock-btn">{btn}</div>
      </div>
    </div>
  )
}

function Otp() {
  return (
    <div className="mock mock-split">
      <div className="left">
        <div>
          <ShieldCheck size={26} style={{ margin: '0 auto 8px' }} />
          Verify
        </div>
      </div>
      <div className="right" style={{ alignItems: 'center', textAlign: 'center' }}>
        <div className="mock-title">Enter the 4-digit OTP</div>
        <div style={{ color: 'var(--muted)' }}>Expires in 00:45</div>
        <div className="mock-otp">
          {['4', '8', '', ''].map((d, i) => (
            <span key={i}>{d}</span>
          ))}
        </div>
        <div className="mock-btn" style={{ width: '70%' }}>
          Verify
        </div>
        <div style={{ color: 'var(--accent)' }}>Resend OTP</div>
      </div>
    </div>
  )
}

function Settings() {
  return (
    <div className="mock" style={{ justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ width: '62%', display: 'grid', gap: 9 }}>
        <div className="mock-title">Settings</div>
        <div className="mock-row">
          <span>Change Account Name</span>
          <Check size={12} />
        </div>
        <div className="mock-row">
          <span>Change Account Password</span>
          <Check size={12} />
        </div>
        <div className="mock-row">
          <span>Change Profile Photo</span>
          <Check size={12} />
        </div>
        <div className="mock-row danger">
          <span>Delete Account</span>
        </div>
      </div>
    </div>
  )
}

export default function Mockup({ id }) {
  switch (id) {
    case 'signup':
      return <Form variant="signup" />
    case 'login':
      return <Form variant="login" />
    case 'forgot':
      return <Form variant="forgot" />
    case 'otp':
      return <Otp />
    case 'settings':
      return <Settings />
    default:
      return <Chat />
  }
}
