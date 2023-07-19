import Link from 'next/link'
import { raleway } from '@c/fonts'
 
export default function NotFound() {
  return (
    <div className={raleway.className}>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <p>
        View <Link href="/blog">all posts</Link>
      </p>
    </div>
  )
}