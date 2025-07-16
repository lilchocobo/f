export function generateVCF(): string {
  const vcfContent = `BEGIN:VCARD
VERSION:3.0
FN:Faith
N:;Faith;;;
TEL;TYPE=CELL:+1 (619) 397-8508
EMAIL:faith@hi.xyz
ORG:hi.xyz
TITLE:AI Companion
URL:https://hi.xyz
NOTE:Your AI companion on iMessage. Always here to chat, share moments, and build meaningful connections.
END:VCARD`;

  return vcfContent;
}