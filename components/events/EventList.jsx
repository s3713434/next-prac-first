import EventItem from './EventItem'

export default function EventList(props) {
  const { items } = props
  return (
    <ul className='max-w-4xl mx-auto space-y-6'>
      {items.map((event) => (
        <EventItem
          key={event.id}
          id={event.id}
          image={event.image}
          title={event.title}
          date={event.date}
          location={event.location}
        />
      ))}
    </ul>
  )
}
