import "../styles/globals.css";

export default function RootLayout({ children }: any) {
  return (
    <html>
      <head>
        <title>Shafi Hassans Portfolio Website</title>
        <meta content="The resume website of Shafi Hassan" name="description" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
