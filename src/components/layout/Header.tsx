import { motion } from 'framer-motion';
import { ThemeToggle } from '../ThemeToggle';
import { Button } from '@/components/ui/button';
import { MessageSquare } from 'lucide-react';
import { useDeviceType } from '@/hooks/useDeviceType';
import { useVcfDownload } from '@/hooks/useVcfDownload';

const navItems = [
  { name: 'Meet Faith', href: '#' },
  { name: 'About Faith', href: '#about-qing' },
  { name: 'Capabilities', href: '#platform' },
];

export function Header() {
  const { isMobile } = useDeviceType();
  const triggerVcfDownload = useVcfDownload();

  const handleMessageClick = () => {
    if (isMobile) {
      triggerVcfDownload();
    } else {
      const message = encodeURIComponent("Hey Faith! 👋");
      const imessageUrl = `imessage://+16193978508&body=${message}`;
      window.location.href = imessageUrl;
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b hidden lg:block">
      <div className="container mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          {/* Logo */}
          <motion.a 
            href="#"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold hover:text-primary/90 transition-colors"
          >
            Faith
          </motion.a>

          {/* Navigation */}
          <nav className="flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Button 
              variant="default" 
              size="sm" 
              className="rounded-full"
              onClick={handleMessageClick}
            >
              <MessageSquare className="h-4 w-4 mr-2" />
              Text Faith
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}