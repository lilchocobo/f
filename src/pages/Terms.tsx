import { BackButton } from '@/components/ui/back-button';

export function Terms() {
  return (
    <div className="min-h-screen bg-background py-16 relative">
      <BackButton />
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto prose dark:prose-invert">
          <h1>Terms of Service</h1>
          <p>Last updated: January 29, 2024</p>

          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using Faith ("Service"), you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of the terms, you may not access the Service.
          </p>

          <h2>2. Description of Service</h2>
          <p>
            Faith is an AI companion service that provides conversational interactions through iMessage. The Service is provided "as is" and may be modified, updated, or discontinued at any time.
          </p>

          <h2>3. User Responsibilities</h2>
          <h3>3.1 Account Usage</h3>
          <p>You agree to:</p>
          <ul>
            <li>Provide accurate and complete information</li>
            <li>Maintain the security of your access</li>
            <li>Not share your access with others</li>
            <li>Use the Service in compliance with applicable laws</li>
          </ul>

          <h3>3.2 Prohibited Activities</h3>
          <p>You must not:</p>
          <ul>
            <li>Use the Service for illegal purposes</li>
            <li>Attempt to breach security measures</li>
            <li>Interfere with the Service's functionality</li>
            <li>Harass, abuse, or harm others</li>
          </ul>

          <h2>4. Intellectual Property</h2>
          <p>
            All content, features, and functionality of the Service are owned by us and are protected by international copyright, trademark, and other intellectual property laws.
          </p>

          <h2>5. Limitation of Liability</h2>
          <p>
            We shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the Service.
          </p>

          <h2>6. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. We will notify users of any material changes via email or through the Service.
          </p>

          <h2>7. Contact Information</h2>
          <p>
            For questions about these Terms, please contact us at{' '}
            <a href="#"></a>
          </p>
        </div>
      </div>
    </div>
  );
}