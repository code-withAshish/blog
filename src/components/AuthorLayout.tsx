import Image from "next/image";
import { ReactNode } from "react";
import SocialIcon from "./social-icons";

export default function AuthorLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            About
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center pt-8">
            <Image
              src={""}
              alt="avatar"
              width={250}
              height={250}
              className="bg-red-300"
            />

            <h3 className="pb-2 pt-4 text-2xl font-bold leading-8 tracking-tight">
              Ashish Bhushan Kumar
            </h3>
            <div className="text-gray-500 dark:text-gray-400">
              Full Stack Developer
            </div>
            <div className="text-gray-500 dark:text-gray-400"></div>
            <div className="flex space-x-3 pt-6">
              <SocialIcon
                kind="mail"
                href={"mailto:abhushan064@gmail.com"}
                size={8}
              />
              <SocialIcon
                kind="github"
                href={"https://github.com/code-withAshish"}
                size={8}
              />
              <SocialIcon
                kind="linkedin"
                href={"https://www.linkedin.com/in/code-withashish/"}
                size={8}
              />
            </div>
          </div>
          <div className="prose max-w-none pb-8 pt-8 dark:prose-dark xl:col-span-2">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
