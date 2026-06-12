import styles from "./MapView.module.css"

interface MapViewProps {
  title: string
  address: string
  query: string
}

function MapView({ title, address, query }: MapViewProps) {
  return (
    <div className={styles.content}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.address}>{address}</p>
      <div className={styles.wrapper}>
        <iframe
          src={`https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`}
          className={styles.iframe}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={title}
        />
      </div>
    </div>
  )
}

export default MapView
