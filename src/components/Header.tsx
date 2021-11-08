import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from 'src/context/Theme';
import { Button } from './Button';
import { Toggle } from './Toggle/Toggle';

export const Header: React.FC<{}> = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="flex justify-between items-center p-4">
      <Link href="/">
        <a className="flex">
          <Image src="/logo.jpeg" alt="Gilded Rose Shop" width={56} height={56} />
          <h2 className="text-2xl font-bold p-2">Gilded Rose Shop</h2>
        </a>
      </Link>
      <nav className="flex space-x-4">
        <Toggle onToggle={toggleTheme} value={theme === 'light'} />
        <Link href="/" passHref>
          <Button>Home</Button>
        </Link>
        <Link href="/about" passHref>
          <Button>About</Button>
        </Link>
      </nav>
    </header>
  );
}
