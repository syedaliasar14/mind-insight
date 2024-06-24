import Footer from "../components/footer";

export default function AccountLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <div className="w-full md:w-7/12 flex flex-col bg-white items-center p-8 flex-grow">{children}</div>
      <div className="w-full md:w-5/12 min-h-auto flex items-end">
        <Footer/>
      </div>
    </div>
  );
}

