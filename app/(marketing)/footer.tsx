import { Button } from "@/components/ui/button";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
      <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
        <Button size={"lg"} variant={"ghost"} className="w-full">
          <Image
            src="/images/hr.svg"
            alt="Croatian"
            height={35}
            width={40}
            className="mr-4 rounded-md w-[35px] h-[40px]"
          />
          Croatian
        </Button>
        <Button size={"lg"} variant={"ghost"} className="w-full">
          <Image
            src="/images/es.svg"
            alt="Spanish"
            height={35}
            width={40}
            className="mr-4 rounded-md w-[35px] h-[40px]"
          />
          Spanish
        </Button>
        <Button size={"lg"} variant={"ghost"} className="w-full">
          <Image
            src="/images/fr.svg"
            alt="French"
            height={35}
            width={40}
            className="mr-4 rounded-md w-[35px] h-[40px]"
          />
          French
        </Button>
        <Button size={"lg"} variant={"ghost"} className="w-full">
          <Image
            src="/images/it.svg"
            alt="Italian"
            height={35}
            width={40}
            className="mr-4 rounded-md w-[35px] h-[40px]"
          />
          Italian
        </Button>
        <Button size={"lg"} variant={"ghost"} className="w-full">
          <Image
            src="/images/jp.svg"
            alt="Jpapanese"
            height={35}
            width={40}
            className="mr-4 rounded-md w-[35px] h-[40px]"
          />
          Japanese
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
