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
      name: 'Genie',
      avatar: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=100',
      lastMessage: 'Do you want to review all the renders together next time we meet?',
      timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000), // 1 day ago
    },
    {
      id: '3',
      name: 'Assistant',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100',
      lastMessage: 'Did the kids finish their homework?',
      timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000), // 1 day ago
    },
  ];

  return { messages };
}