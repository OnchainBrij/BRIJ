import "./globals.css";
import { Poppins } from "next/font/google";
import { LikedProjectsProvider } from "../context/LikedProjectContext";
import MystenConnect from "./MystenConnect";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Brij",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <MystenConnect>

        <LikedProjectsProvider>{children}</LikedProjectsProvider>
        </MystenConnect>
      </body>
    </html>
  );
}
