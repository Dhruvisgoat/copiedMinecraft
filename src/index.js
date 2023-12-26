import { useState } from "react"
import { createRoot } from "react-dom/client"
import "./styles.css"
import App from "./App"

function Overlay() {
  const [ready, set] = useState(false)
  return (
    <>
      <App />
      <div className="dot" />
      <div className={`fullscreen bg ${ready ? "ready" : "notready"} ${ready && "clicked"}`}>
        <div className="stack">
          <button onClick={() => set(true)}>Start</button>
        </div>

      </div>
    </>
  )
}

createRoot(document.getElementById("root")).render(<Overlay />)
