import Head from 'next/head'
import { useTheme } from 'src/context/Theme';
import { Footer } from './Footer';
import { Header } from './Header';

export const Layout: React.FC<{}> = ({ children }) => {
  const { theme } = useTheme();

  return (
    <>
      <Head>
        <title>Gilded Rose</title>
        <meta name="description" content="Gilded Rose inventory app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`theme-${theme} bg-primary text-main-text transition-all duration-300 flex flex-col min-h-screen`}>
        <Header />
        <main className="container mx-auto flex flex-grow px-4 pb-4">{children}</main>
        <Footer />
      </div>
    </>
  );
}