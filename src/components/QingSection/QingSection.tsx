import { QingBio } from './QingBio';
import { ImageGallery } from './ImageGallery';

export function QingSection() {
  return (
    <div id="about-qing" className="min-h-screen flex items-center bg-background py-20">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="w-full max-w-md mx-auto overflow-visible pb-20">
            <ImageGallery />
          </div>
          <QingBio />
        </div>
      </div>
    </div>
  );
}