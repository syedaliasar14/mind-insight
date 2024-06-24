import Footer from "../components/footer";

export default function AccountLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <div className="flex w-full min-h-screen flex-col items-center justify-center">
      <div className="w-[480px] flex flex-col bg-white items-center p-16 my-10 rounded-md shadow-xl">{children}</div>
      <div className="flex justify-end">
        <Footer/>
      </div>
    </div>
  );
}

