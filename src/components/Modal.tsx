import { type ReactNode } from "react"
import styles from "./Modal.module.css"

function Modal({ open, onClose, children }: { open: boolean; onClose: () => void; children: ReactNode }) {
  if (!open) return null

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <button className={styles.close} onClick={onClose}>
          ✕
        </button>
        {children}
      </div>
    </div>
  )
}

export default Modal
