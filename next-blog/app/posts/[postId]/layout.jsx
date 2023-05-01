import { Suspense } from "react"
import styles from './layout.module.css'


export default function RootLayout({children}) {
  return (
    <div className={styles.standardBg}>

        <Suspense fallback={<h2>Loading...</h2>}>
        {children}
        </Suspense>
    </div>
  )
}
