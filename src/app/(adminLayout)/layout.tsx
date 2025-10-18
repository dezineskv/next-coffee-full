import { Provider } from '../provider';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
      <body>
        {children} 
      </body>
  );
}
