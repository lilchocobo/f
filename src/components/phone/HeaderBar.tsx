import { FiWifi, FiBatteryCharging } from 'react-icons/fi';

export function HeaderBar() {
  return (
    <>
      
      <div className="absolute right-4 top-3 z-10 flex gap-2">
        <FiWifi className="text-neutral-600 h-5 w-5" />
        <FiBatteryCharging className="text-neutral-600 h-5 w-5" />
      </div>
    </>
  );
}