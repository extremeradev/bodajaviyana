import { useEffect, useRef, useState, type ReactNode } from "react"
import styles from "./Reveal.module.css"

function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let timeout: ReturnType<typeof setTimeout>
    const obs = new IntersectionObserver(
      ([entry]) => {
        clearTimeout(timeout)
        if (entry.isIntersecting) {
          timeout = setTimeout(() => setVisible(true), delay * 1000)
        } else {
          setVisible(false)
        }
      },
      { threshold: 0.15 }
    )
    obs.observe(el)
    return () => {
      obs.disconnect()
      clearTimeout(timeout)
    }
  }, [delay])

  return (
    <div ref={ref} className={`${styles.reveal} ${visible ? styles.visible : ""}`}>
      {children}
    </div>
  )
}

export default Reveal
