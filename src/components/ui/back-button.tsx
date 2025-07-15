import { ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from './button';

export function BackButton() {
  const navigate = useNavigate();

  return (
    <Button
      variant="ghost"
      size="sm"
      className="absolute top-4 left-4 p-2"
      onClick={() => navigate('/')}
    >
      <ChevronLeft className="h-5 w-5" />
      <span className="ml-2">Back</span>
    </Button>
  );
}