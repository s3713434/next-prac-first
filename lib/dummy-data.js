const DUMMY_EVENTS = [
  {
    id: 'e1',
    title: 'This is title 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum commodo luctus. Sed rutrum metus sit amet consequat pretium. Vivamus iaculis, urna ac convallis blandit, urna risus vestibulum nisi, non fermentum purus elit ac felis. Sed nec orci sed sapien interdum feugiat vel ac nisi. Nulla eleifend et dolor cursus suscipit. Nunc bibendum libero augue, a sagittis sapien mattis at. Pellentesque a neque in lorem rhoncus congue at non purus. Nulla pulvinar, ipsum vitae mollis interdum, nunc arcu volutpat justo, nec commodo est quam a nisl. Quisque quis tempor lacus, a ultricies ex. Donec convallis bibendum lectus, ac semper nibh maximus id. Fusce egestas ut dui sed lacinia. Proin in rhoncus ex, sed imperdiet lacus. Quisque quis augue in quam viverra elementum sit amet quis arcu. Etiam eu ante mi. Pellentesque ullamcorper viverra maximus. Morbi eleifend quis nibh eget sagittis.',
    location: 'fake location 1',
    date: '2024-06-25',
    image: 'images/image-1.jpg',
    isFeatrued: true,
  },
  {
    id: 'e2',
    title: 'This is title 2',
    description:
      'Integer condimentum mi ante, ullamcorper lacinia felis consequat vel. Curabitur vitae efficitur ligula, eget tempus mi. Vivamus condimentum nec lorem feugiat cursus. Cras quis metus eget nulla accumsan pharetra vitae elementum purus. Etiam gravida cursus ex, ornare euismod tortor fermentum in. Praesent faucibus orci a nisl porttitor, et porta leo varius. Suspendisse sagittis lorem eu libero hendrerit dictum. Vivamus ac consequat massa, non ultrices est. Nunc nec feugiat nulla. Nunc facilisis, tellus dictum cursus tincidunt, ante ligula mattis risus, ut varius nunc ante quis sapien. Sed et nisl ac nulla sodales malesuada ut et enim.',
    location: 'fake location 2',
    date: '2024-06-26',
    image: 'images/image-2.jpg',
    isFeatrued: true,
  },
  {
    id: 'e3',
    title: 'This is title 3',
    description:
      'Maecenas tellus mauris, scelerisque et rutrum ac, faucibus non neque. Fusce pellentesque diam justo, ut tempor velit vehicula nec. Phasellus mi augue, tempor sit amet nulla eu, sollicitudin fermentum lacus. Sed ornare risus sed mi cursus, a tincidunt nisl varius. Vivamus et metus eget enim imperdiet dictum. Donec consectetur risus sit amet congue volutpat. Proin venenatis vitae augue et vestibulum. Nullam feugiat finibus sem, eget ultricies arcu eleifend vel. Etiam et libero at quam ultrices tristique luctus ut magna. In vel sollicitudin purus. Suspendisse sed eleifend tellus. Nam cursus felis ex, ac accumsan felis aliquam vitae.',
    location: 'fake location 3',
    date: '2024-06-27',
    image: 'images/image-3.jpg',
    isFeatrued: true,
  },
]

export function getFeatruedEvents() {
  return DUMMY_EVENTS.filter((event) => event.isFeatrued)
}

export function getAllEvents() {
  return DUMMY_EVENTS
}

export function getFilteredEvent(dataFilter) {
  const { year, month } = dataFilter
  let filteredEvent = DUMMY_EVENTS.filter((event) => {
    const eventDate = new Date(event.date)
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    )
  })
  return filteredEvent
}

export function getEventById(id) {
  return DUMMY_EVENTS.find((event) => event.id === id)
}
