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
    <li className='bg-white shadow-md rounded-lg overflow-hidden my-6 flex'>
      <Image width={400} height={400} src={`/${image}`} alt={title} />
      <div className='mt-6 size-full flex flex-col px-6'>
        <h2 className='text-4xl font-bold'>{title}</h2>
        <div className='mt-6 text-slate-700 font-bold'>
          <time>{humanReadableDate}</time>
        </div>
        <div>
          <address>{formattedAddress}</address>
        </div>
        <div className='text-end mr-6 text-sky-600 mt-20'>
          <Link href={exportLink}>Explore Event</Link>
        </div>
      </div>
    </li>
  )
}
