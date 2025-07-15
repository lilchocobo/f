import { useState } from 'react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useContactForm } from './useContactForm';

export function ContactForm() {
  const { formData, handleChange, handleSubmit, isSubmitting, isSuccess } = useContactForm();

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-green-400/10 text-green-400 p-6 rounded-2xl text-center"
      >
        <p className="text-lg font-medium">Thank you for your message!</p>
        <p className="text-sm mt-2">We'll get back to you soon.</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Input
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="bg-white/5 border-white/10 text-white placeholder:text-gray-400"
        />
      </div>
      <div>
        <Input
          name="email"
          type="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="bg-white/5 border-white/10 text-white placeholder:text-gray-400"
        />
      </div>
      <div>
        <Textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="bg-white/5 border-white/10 text-white placeholder:text-gray-400 min-h-[150px]"
        />
      </div>
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-rose-400 to-purple-400 hover:opacity-90"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
}