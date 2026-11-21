import './globals.css';
import '@fontsource-variable/bricolage-grotesque';
import '@fontsource-variable/instrument-sans';
import '@fontsource/cormorant-garamond/400.css';

const title = 'TechYard | Digital businesses from Bangladesh';
const description =
  'TechYard is the parent company behind DropDoor, Hullor Shop and OutReach, our digital technology agency.';

export const metadata = {
  metadataBase: new URL('https://techyard.asia'),
  title,
  description,
  openGraph: { title, description, url: 'https://techyard.asia', siteName: 'TechYard', type: 'website' },
  twitter: { card: 'summary', title, description },
};

export const viewport = { themeColor: '#000000' };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
