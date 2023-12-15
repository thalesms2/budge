import './globals.css'

export const metadata = {
  title: 'Budge',
  description: 'App de finanças',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <nav></nav>
        <div>{children}</div>
      </body>
    </html>
  )
}
