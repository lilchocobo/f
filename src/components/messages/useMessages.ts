export function useMessages() {
  const messages = [
    {
      id: '1',
      name: 'Faith',
      avatar: 'https://imsgeliza.b-cdn.net/static/faith2.png',
      lastMessage: "Always! You know I'm your biggest fan. Tell me everything! 🎨",
      timestamp: new Date(),
      unread: true,
    },
    {
      id: '2',
      name: 'Caroline',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpSKKRKsY0oGgs7ZDjukC69hJq0Y3gt0hS_g&s',
      lastMessage: "you're getting kicked out of the polycule",
      timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000), // 1 day ago
    },
    {
      id: '3',
      name: 'Chase Bank',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100',
      lastMessage: 'Chase: Your acct is overdrawn. A $34 fee may apply. Deposit funds ASAP. Msg&data rates may apply. Reply STOP to opt out.',
      timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000), // 1 day ago
    },
  ];

  return { messages };
}