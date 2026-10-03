import { APP, ME } from '../data/content.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>
          © {new Date().getFullYear()} {APP.name} · Designed and built by {ME.name} · {APP.license}
        </p>
      </div>
    </footer>
  )
}
