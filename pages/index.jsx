import { getFeatruedEvents } from '../lib/dummy-data'
import EventList from '../components/events/EventList'

export default function HomePage() {
  const featruedEvents = getFeatruedEvents()
  return (
    <div className=''>
      <EventList items={featruedEvents} />
    </div>
  )
}
