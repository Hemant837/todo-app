import MainNavigation from "../components/MainNavigation/MainNavigation";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <MainNavigation>
      <Component {...pageProps} />
    </MainNavigation>
  );
}
