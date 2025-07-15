import { Mail, MessageSquare, MapPin } from 'lucide-react';

const contactDetails = [
  {
    icon: Mail,
    title: 'Email',
    details: 'hello@faith.ai',
    description: 'Send us an email anytime!',
  },
  {
    icon: MessageSquare,
    title: 'Live Chat',
    details: 'Available 24/7',
    description: 'Get instant answers',
  },
  {
    icon: MapPin,
    title: 'Office',
    details: 'San Francisco, CA',
    description: 'Come say hello!',
  },
];

export function ContactInfo() {
  return (
    <div className="space-y-8">
      {contactDetails.map((item) => (
        <div key={item.title} className="flex gap-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 rounded-xl bg-rose-400/10 flex items-center justify-center">
              <item.icon className="h-6 w-6 text-rose-400" />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">{item.title}</h3>
            <p className="text-rose-400 font-medium">{item.details}</p>
            <p className="text-gray-400 text-sm">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}