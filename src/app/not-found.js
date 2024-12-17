import Link from 'next/link'
import tv from "../../public/icon/Error TV.png"
import Image from 'next/image'
import styles from "../app/styles/not-found.module.css"
 
export default function NotFound() {
  return (
    <div className={styles.container}>
     <div className={styles.right}>
        <h1>صفحه مورد نظر یافت نشد!</h1>
        <Link href="/">
        <button>بازگشت به صفحه اصلی</button>
        </Link>
     </div>
     <div className={styles.left}>
        <Image src={tv} alt='notFound'/>
     </div>
    </div>
  )
}