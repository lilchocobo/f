import { useEffect, useRef } from 'react';

export function useMessageScroll<T extends HTMLElement>(deps: any[]) {
  const scrollRef = useRef<T>(null);

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (!scrollElement) return;

    // Calculate the scroll position accounting for the header height
    const scrollToBottom = () => {
      const headerHeight = 64; // Height of the sticky header
      const scrollHeight = scrollElement.scrollHeight;
      const clientHeight = scrollElement.clientHeight;
      const maxScroll = scrollHeight - clientHeight;

      // Ensure we don't scroll past the bottom
      const targetScroll = Math.min(maxScroll, scrollHeight - headerHeight);

      scrollElement.scrollTo({
        top: targetScroll,
        behavior: 'smooth'
      });
    };

    // Initial scroll
    scrollToBottom();

    // Add a small delay to ensure content is rendered
    const timeoutId = setTimeout(scrollToBottom, 100);
    return () => clearTimeout(timeoutId);
  }, deps);

  return scrollRef;
}