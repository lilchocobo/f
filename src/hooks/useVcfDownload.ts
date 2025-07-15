// hooks/use-vcf-download.ts
import { generateVCF } from '@/lib/generateVCF';

export function useVcfDownload() {
  const triggerVcfDownload = () => {
    const vcfContent = generateVCF();
    const blob = new Blob([vcfContent], { type: 'text/vcard' });
    const url = window.URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'faith.vcf');
    document.body.appendChild(link);
    link.click();
    
    // Clean up
    window.URL.revokeObjectURL(url);
    document.body.removeChild(link);
  };

  return triggerVcfDownload;
}
