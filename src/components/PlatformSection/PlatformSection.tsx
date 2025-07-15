import { Camera, MessageSquare, Mic, Heart, Sparkles, Brain } from 'lucide-react';
import { PlatformFeatureCard } from './PlatformFeatureCard';

const features = [
  {
    icon: MessageSquare,
    title: 'Rich Messaging',
    description: 'Experience natural, engaging conversations with Faith through iMessage, complete with emojis and message effects.',
  },
  {
    icon: Camera,
    title: 'Photo Sharing',
    description: 'Share and discuss photos with Faith, who can understand and engage in meaningful conversations about your visual memories.',
  },
  {
    icon: Mic,
    title: 'Voice Memos',
    description: 'Send voice messages to Faith and receive thoughtful responses, making communication more personal and convenient.',
  },
  {
    icon: Heart,
    title: 'Emotional Intelligence',
    description: 'Faith understands context and emotions, providing empathetic responses that make every conversation feel genuine and supportive.',
  },
  {
    icon: Brain,
    title: 'Adaptive Learning',
    description: 'Faith remembers your conversations and preferences, creating a more personalized experience over time.',
  },
  {
    icon: Sparkles,
    title: 'Creative Expression',
    description: 'Engage in creative writing, brainstorming, and playful conversations that spark joy and inspiration.',
  },
];

export function PlatformSection() {
  return (
    <div id="platform" className="min-h-screen flex items-center bg-muted/50">
      <div className="container px-4 mx-auto py-20">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Experience Faith's Capabilities
          </h2>
          <p className="text-xl text-muted-foreground">
            Faith combines advanced AI with genuine emotional intelligence to create 
            meaningful connections through natural conversations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <PlatformFeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </div>
  );
}