import { ShieldCheck } from 'lucide-react'
import SectionTitle, { Reveal } from './SectionTitle.jsx'
import { CRYPTO_FUNCS, DB_FUNCS } from '../data/content.js'

function FuncTable({ title, rows }) {
  return (
    <div className="table-wrap">
      <h3>{title}</h3>
      <table>
        <thead>
          <tr>
            <th>Function</th>
            <th>Input</th>
            <th>Output</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([fn, input, output]) => (
            <tr key={fn}>
              <td>
                <code>{fn}</code>
              </td>
              <td>{input}</td>
              <td>{output}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function Security() {
  return (
    <section className="section alt" id="security">
      <div className="container">
        <SectionTitle
          eyebrow="Encryption & Security"
          title="Only the receiver can read a message"
          text="Messages are encrypted with the receiver’s public key and decrypted with their private key."
        />
        <Reveal>
          <div className="callout">
            <ShieldCheck size={26} />
            <p>
              <b>True end-to-end encryption.</b> Each user owns a private key stored in a local JKS file. Only the
              Base64-encoded public key is saved in the database, so the server never sees a readable message.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <FuncTable title="Cryptography functions" rows={CRYPTO_FUNCS} />
        </Reveal>
        <Reveal delay={0.1}>
          <div style={{ marginTop: 20 }}>
            <FuncTable title="Database operations" rows={DB_FUNCS} />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
