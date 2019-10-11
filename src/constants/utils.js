const headers = [
  { label: 'Animals', name: 'animals' },
  { label: 'Birds', name: 'birds' },
  { label: 'Alphabets', name: 'alphabets' }
];

const headerMenu = [
  {
    label: 'Entertainment',
    name: 'entertainment',
    route: '/entertainment',
    icon: '',
    submenu: [
      {
        label: 'Animals',
        value: 'animals',
        route: '/entertainment/animals',
        icon: 'tiger_EScqhyDJzR.png'
      }
    ]
  },
  {
    label: 'Learning',
    name: 'learning',
    route: '/learning',
    icon: '',
    submenu: [
      {
        label: 'Animals',
        value: 'animals',
        route: '/learning/animals',
        icon: 'camel_0QsFAgwMS-.png'
      },
      {
        label: 'Fruits',
        value: 'fruits',
        route: '/learning/fruits',
        icon: 'red-apple_UOS0EbXIUI.png'
      },
      {
        label: 'Vegetables',
        value: 'vegetables',
        route: '/learning/vegetables',
        icon: 'onion_LyqYoWcYhl.png'
      }
    ]
  }
];

const synthesisPrefixes = ['I am, ', 'This is, ', 'Hello, I am '];

export { headers, headerMenu, synthesisPrefixes };
