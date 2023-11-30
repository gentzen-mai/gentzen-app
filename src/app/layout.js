export const metadata = {
  title: "Natural deduction database",
  description: "Prove sequents once and for all",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
