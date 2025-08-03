import { Pixelify_Sans} from "next/font/google";
import "./globals.css";

const pixelify = Pixelify_Sans({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className={pixelify.className}>
        {children}
      </body>
    </html>
  );
}