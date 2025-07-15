import { Heart, Sparkles, MessageCircle, Lock } from 'lucide-react';

const features = [
  {
    icon: Heart,
    title: 'Genuine Connection',
    description:
      'Build a real friendship with Qing through natural, empathetic conversations.',
  },
  {
    icon: MessageCircle,
    title: 'iMessage Integration',
    description:
      'Chat with Qing directly in iMessage, just like texting a friend.',
  },
  {
    icon: Lock,
    title: 'Private & Secure',
    description:
      'Your conversations with Qing are encrypted and completely private.',
  },
  {
    icon: Sparkles,
    title: 'Personalized Experience',
    description:
      'Qing learns your interests and personality to create meaningful interactions.',
  },
];

export function FeaturesSection() {
  return (
    <div className="py-24 bg-white">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group p-6 rounded-3xl transition-all duration-200 hover:bg-gray-50"
            >
              <div className="h-12 w-12 rounded-2xl bg-rose-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200">
                <feature.icon className="h-6 w-6 text-rose-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}