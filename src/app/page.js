import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  const count = useSelector((state) => state.counter.value)
  return (
    <div>
      {count}
    </div>
  )
}
