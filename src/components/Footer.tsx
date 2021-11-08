import Image from 'next/image'

export const Footer: React.FC = () => (
  <footer className="flex items-center justify-center w-full h-24 border-t">
    <a
      className="flex items-center justify-center"
      href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
      target="_blank"
      rel="noopener noreferrer"
    >
      Powered by{' '}
      <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
    </a>
  </footer>
)
