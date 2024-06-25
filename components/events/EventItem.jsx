import Link from 'next/link'
import Image from 'next/image'
export default function EventItem(props) {
  const { title, image, date, location, id } = props

  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
  const formattedAddress = location.replace(',', '\n')
  const exportLink = `/events/${id}`
  return (
    <li className='bg-white shadow-md rounded-lg overflow-hidden mb-6'>
      <Image
        layout='responsive'
        width={500}
        height={300}
        src={`/${image}`}
        alt={title}
      />
      <div>
        <h2>{title}</h2>
        <div>
          <time>{humanReadableDate}</time>
        </div>
        <div>
          <address>{formattedAddress}</address>
        </div>
      </div>
      <div>
        <Link href={exportLink}>Explore Event</Link>
      </div>
    </li>
  )
}
