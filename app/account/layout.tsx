export default function AccountLayout({ children}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen bg-white items-center p-8 flex-grow">
      {children}
    </div>
  );
}