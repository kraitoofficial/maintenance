import Image from "next/image";
import { FaFacebook, FaYoutube, FaGithub } from "react-icons/fa";

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-20" style={{ backgroundImage: "url('/bg.png')", backgroundSize: "cover", backgroundPosition: "center" }}>
      <div className="flex flex-col justify-center items-center gap-5 lg:gap-10">
        <Image
          src="/kraito.png"
          alt="Kraito Logo"
          className="dark:invert"
          width={100}
          height={100}
          priority
        />
        <h1 className="text-2xl lg:text-5xl uppercase text-center font-bold text-gray-900 dark:text-gray-100">
          Kraito is under development
        </h1>
        <h2 className="text-md lg:text-xl font-semibold text-center text-gray-900 dark:text-gray-100">
          Stay connected with us on our social media and avail our web development services and get updates.
        </h2>
        <div className="flex justify-center items-center space-x-4 gap-5">
          <a href="https://www.facebook.com/kraitoofficial" className="text-gray-900 dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300">
            <FaFacebook size={40} />
          </a>
          <a href="https://www.youtube.com/@kraitoofficial" className="text-gray-900 dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300">
            <FaYoutube size={40} />
          </a>
          <a href="https://github.com/kraitoofficial" className="text-gray-900 dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300">
            <FaGithub size={40} />
          </a>
        </div>
      </div>
      <footer className="text-center text-gray-600 dark:text-gray-400 text-sm mt-8">
        &copy; {currentYear} Kraito. All rights reserved.
      </footer>
    </main>
  );
}
