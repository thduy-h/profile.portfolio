import { GoogleTagManager } from "@next/third-parties/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import ScrollToTop from "./components/helper/scroll-to-top";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
export const metadata = {
  title: "Thanh Duy Huynh | AI & Computer Vision",
  description: "Portfolio of Thanh Duy Huynh, an AI undergraduate working in computer vision, video understanding, deep learning, Edge AI, and deployable intelligent systems.",
  keywords: ["Thanh Duy Huynh", "AI", "Artificial Intelligence", "Computer Vision", "Deep Learning", "Video Understanding", "Object Detection", "Person Re-Identification", "Edge AI", "Applied AI"],
  openGraph: {
    title: "Thanh Duy Huynh | AI & Computer Vision",
    description: "AI undergraduate working in computer vision, video understanding, deep learning, Edge AI, and deployable intelligent systems.",
    type: "website"
  },
  twitter: {
    card: "summary",
    title: "Thanh Duy Huynh | AI & Computer Vision",
    description: "AI undergraduate working in computer vision, video understanding, deep learning, Edge AI, and deployable intelligent systems."
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ToastContainer />
        <main className="relative mx-auto min-h-screen overflow-x-clip px-6 text-white sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem]">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        <Footer />
      </body>
      {process.env.NEXT_PUBLIC_GTM && <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />}
    </html>
  );
}
