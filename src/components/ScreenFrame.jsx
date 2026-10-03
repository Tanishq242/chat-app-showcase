import { useState } from 'react'
import Mockup from './Mockups.jsx'

/** Shows a real screenshot if it exists in public/screenshots, otherwise a styled mockup. */
export default function ScreenFrame({ id, file, title = 'Chat App' }) {
  const [failed, setFailed] = useState(false)
  const src = `${import.meta.env.BASE_URL}screenshots/${file}`

  return (
    <div className="window">
      <div className="window-bar">
        <i />
        <i />
        <i />
        <span>{title}</span>
      </div>
      <div className="window-body">
        {failed ? (
          <>
            <Mockup id={id} />
            <span className="mock-note">Preview mockup</span>
          </>
        ) : (
          <img src={src} alt={`${title} screen of the chat app`} loading="lazy" onError={() => setFailed(true)} />
        )}
      </div>
    </div>
  )
}
