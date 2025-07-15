export function generateVCF() {
  const vCardData = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    'FN:John Doe',
    'N:Doe;John;;;',
    'TITLE:Product Designer',
    'ORG:Design Studio',
    'EMAIL;type=INTERNET;type=WORK:john.doe@example.com',
    'TEL;type=CELL:+1 (555) 123-4567',
    'ADR;type=WORK:;;123 Design Street;San Francisco;CA;94107;USA',
    'URL:https://example.com',
    'NOTE:Creative product designer with a passion for user experience.',
    'END:VCARD'
  ].join('\n');

  return vCardData;
}
