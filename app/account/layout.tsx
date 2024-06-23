import Footer from "../components/footer";

export default function AccountLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <div className="flex min-h-screen">
      <div className="w-full md:w-7/12 flex flex-col min-h-screen bg-white items-center p-8 flex-grow">{children}</div>
      <div className="w-[0px] md:w-5/12 min-h-screen flex items-end">
        <Footer/>
      </div>
    </div>
  );
}

