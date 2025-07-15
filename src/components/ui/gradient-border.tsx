import { cn } from '@/lib/utils';

interface GradientBorderProps {
  className?: string;
}

export function GradientBorder({ className }: GradientBorderProps) {
  return (
    <div 
      className={cn(
        "absolute -inset-0.5 bg-gradient-to-r from-rose-400 via-purple-400 to-rose-400 rounded-full opacity-100",
        className
      )}
      style={{
        animation: 'rotate 4s linear infinite',
        backgroundSize: '300% 100%',
      }}
    />
  );
}