import { BackButton } from '@/components/ui/back-button';

export function Privacy() {
  return (
    <div className="min-h-screen bg-background py-16 relative">
      <BackButton />
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto prose dark:prose-invert">
          <h1>Privacy Policy</h1>
          <p>Last updated: January 29, 2024</p>

          <h2>1. Introduction</h2>
          <p>
            Welcome to Faith ("we," "our," or "us"). We respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you use our AI companion service.
          </p>

          <h2>2. Information We Collect</h2>
          <h3>2.1 Personal Data</h3>
          <p>We may collect and process the following personal data:</p>
          <ul>
            <li>Contact information (email address, phone number)</li>
            <li>Message content and conversation history</li>
            <li>Usage data and interaction patterns</li>
            <li>Device information and identifiers</li>
          </ul>

          <h3>2.2 Usage Data</h3>
          <p>
            We automatically collect usage information when you interact with Faith, including:
          </p>
          <ul>
            <li>Interaction patterns and preferences</li>
            <li>Technical data about your device and connection</li>
            <li>Feature usage statistics</li>
          </ul>

          <h2>3. How We Use Your Information</h2>
          <p>We use your personal data to:</p>
          <ul>
            <li>Provide and improve the Faith AI companion service</li>
            <li>Personalize your experience</li>
            <li>Analyze and improve our services</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2>4. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.
          </p>

          <h2>5. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access your personal data</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Object to processing of your data</li>
            <li>Request data portability</li>
          </ul>

          <h2>6. Contact Us</h2>
          <p>
            For any questions about this Privacy Policy, please contact us at{' '}
            <a href="#"></a>faith@hi.xyz</a>
          </p>
        </div>
      </div>
    </div>
  );
}