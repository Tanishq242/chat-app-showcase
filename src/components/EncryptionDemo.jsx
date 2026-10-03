import { useCallback, useEffect, useState } from 'react'
import { ArrowRight, KeyRound, LockKeyhole, RefreshCw, Unlock } from 'lucide-react'
import SectionTitle, { Reveal } from './SectionTitle.jsx'

// Real RSA-OAEP (2048-bit, SHA-256) in the browser using the Web Crypto API.
// RSA-OAEP with SHA-256 on a 2048-bit key can encrypt at most 190 bytes.
const MAX_BYTES = 190

const toB64 = (buf) => {
  let s = ''
  new Uint8Array(buf).forEach((b) => (s += String.fromCharCode(b)))
  return btoa(s)
}
const fromB64 = (b64) => Uint8Array.from(atob(b64), (c) => c.charCodeAt(0))

export default function EncryptionDemo() {
  const [keys, setKeys] = useState(null)
  const [pubB64, setPubB64] = useState('')
  const [msg, setMsg] = useState('Hello! Meet at 6 PM?')
  const [cipher, setCipher] = useState('')
  const [plain, setPlain] = useState('')
  const [error, setError] = useState('')
  const [busy, setBusy] = useState(false)

  const makeKeys = useCallback(async () => {
    setCipher('')
    setPlain('')
    setError('')
    if (!window.crypto || !window.crypto.subtle) {
      setError('Web Crypto is not available here. Open the site over https or on localhost.')
      return
    }
    setBusy(true)
    try {
      const pair = await crypto.subtle.generateKey(
        { name: 'RSA-OAEP', modulusLength: 2048, publicExponent: new Uint8Array([1, 0, 1]), hash: 'SHA-256' },
        true,
        ['encrypt', 'decrypt']
      )
      const spki = await crypto.subtle.exportKey('spki', pair.publicKey)
      setKeys(pair)
      setPubB64(toB64(spki))
    } catch (e) {
      setError('Could not generate a key pair in this browser.')
    } finally {
      setBusy(false)
    }
  }, [])

  useEffect(() => {
    makeKeys()
  }, [makeKeys])

  const encrypt = async () => {
    setError('')
    setPlain('')
    if (!keys) return
    const bytes = new TextEncoder().encode(msg)
    if (bytes.length === 0) return setError('Type a message first.')
    if (bytes.length > MAX_BYTES) return setError(`Message too long for one RSA block (${bytes.length}/${MAX_BYTES} bytes).`)
    try {
      const enc = await crypto.subtle.encrypt({ name: 'RSA-OAEP' }, keys.publicKey, bytes)
      setCipher(toB64(enc))
    } catch (e) {
      setError('Encryption failed.')
    }
  }

  const decrypt = async () => {
    setError('')
    if (!keys || !cipher) return
    try {
      const dec = await crypto.subtle.decrypt({ name: 'RSA-OAEP' }, keys.privateKey, fromB64(cipher))
      setPlain(new TextDecoder().decode(dec))
    } catch (e) {
      setError('Decryption failed.')
    }
  }

  return (
    <section className="section" id="demo">
      <div className="container">
        <SectionTitle
          eyebrow="Live Demo"
          title="See the encryption in action"
          text="This runs real 2048-bit RSA in your browser: encrypt with the receiver’s public key, then decrypt with their private key."
        />
        <Reveal>
          <div className="demo">
            <label htmlFor="demo-msg">Message from sender</label>
            <input
              id="demo-msg"
              type="text"
              value={msg}
              maxLength={120}
              onChange={(e) => {
                setMsg(e.target.value)
                setCipher('')
                setPlain('')
              }}
              placeholder="Type a message…"
            />

            <div className="demo-actions">
              <button className="btn btn-primary" onClick={encrypt} disabled={!keys || busy}>
                <LockKeyhole size={17} /> Encrypt with public key
              </button>
              <button className="btn btn-ghost" onClick={decrypt} disabled={!cipher}>
                <Unlock size={17} /> Decrypt with private key
              </button>
              <button className="btn btn-ghost" onClick={makeKeys} disabled={busy}>
                <RefreshCw size={17} /> New key pair
              </button>
            </div>

            <div className="pipeline">
              <div className="pipe-box on">
                <h5>1 · Sender plaintext</h5>
                <div className="val">{msg || '—'}</div>
              </div>
              <div className="pipe-arrow">
                <ArrowRight size={22} />
              </div>
              <div className={`pipe-box ${cipher ? 'on' : ''}`}>
                <h5>2 · Sent over network</h5>
                <div className="val">{cipher || 'Encrypted message appears here'}</div>
              </div>
              <div className="pipe-arrow">
                <ArrowRight size={22} />
              </div>
              <div className={`pipe-box ${plain ? 'on' : ''}`}>
                <h5>3 · Receiver reads</h5>
                <div className="val">{plain || 'Decrypted message appears here'}</div>
              </div>
            </div>

            {error && <p className="demo-error">{error}</p>}

            <details className="keybox">
              <summary>
                <KeyRound size={14} style={{ verticalAlign: '-2px', marginRight: 6 }} />
                Receiver’s public key (Base64)
              </summary>
              <pre>{pubB64 || 'Generating…'}</pre>
            </details>

            <p className="demo-note">
              Demo only: keys live in this page’s memory and are never sent anywhere. The desktop app stores the
              private key in a password-protected JKS file.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
