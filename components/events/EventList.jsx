import EventItem from './EventItem'

export default function EventList(props) {
  const { items } = props
  return (
    <ul className='max-w-3xl flex flex-col flex-wrap'>
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
