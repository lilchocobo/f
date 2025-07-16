import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col space-y-6">
          {/* CA Number */}
          <p className="text-xs text-muted-foreground text-center">
            CA: 3qq54YqAKG3TcrwNHXFSpMCWoL8gmMuPceJ4FG9npump
          </p>
          
          {/* Links */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            {/* Footer Links */}
            <div className="flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-6">
              <a 
                href="/privacy" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Privacy Policy
              </a>
              <a 
                href="/terms" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Terms of Service
              </a>
              <a 
                href="mailto:faith@hi.xyz" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </a>
            </div>
            
            {/* Company Link */}
            <a 
              href="https://hi.xyz" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}