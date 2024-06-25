import Link from "next/link";

const Footer = () => {
  return (
    <footer className="text-white p-4 w-full opacity-70">
      <div className="flex flex-col justify-center items-center gap-2">
        <Link href="/privacypolicy" className="text-center hover:text-fav-blue1 transition-all duration-300">
          Privacy Policy
        </Link>
        <Link href="/terms" className="text-center hover:text-fav-blue1 transition-all duration-300">
          Terms and Conditions
        </Link>
      </div>
    </footer>
  );
};

export default Footer;

