import 'src/app/globals.css'

import { Header } from 'src/app/components/Header';
import { Footer } from 'src/app/components/Footer';

export const metadata = {
  title: "Dashboard Sandbox - Login",
  description: "Dashboard sandbox created by Next JS",
}

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      <Header headerTitle={metadata.title} />
      {children}
      <Footer />
    </section>
  )
}