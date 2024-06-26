import { getFeatruedEvents } from '../lib/dummy-data'
import EventList from '../components/events/EventList'

export default function HomePage() {
  const featruedEvents = getFeatruedEvents()
  return (
    <div className='bg-slate-200 min-h-screen overflow-hidden flex align-center justify-center'>
      <EventList items={featruedEvents} />
    </div>
  )
}
