import Head from "next/head";
import Link from "next/link";
import { ReactElement } from "react";
import Footer from "./Footer";
import MobileNav from "./MobileNav";
import SectionContainer from "./SectionContainer";

const headerNavLinks = [
  { href: "/", title: "Home" },
  { href: "/blog", title: "Blog" },
  { href: "/projects", title: "Projects" },
  { href: "/about", title: "About" },
];

const LayoutWrapper = ({ children }: { children: ReactElement }) => {
  return (
    <SectionContainer>
      <Head>
        <title>Ashish Blogs</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <div className="flex h-screen flex-col justify-between ">
        <header className="flex items-center justify-between py-10">
          <div>
            <Link href="/" aria-label={"headerTitle"}>
              <div className="flex items-center justify-between">
                <div className="mr-3">{/* <Logo /> */}</div>
                {/* {typeof siteMetadata.headerTitle === "string" ? (
                  <div className="hidden h-6 text-2xl font-semibold sm:block">
                    {siteMetadata.headerTitle}
                  </div>
                ) : (
                  siteMetadata.headerTitle
                )} */}
              </div>
            </Link>
          </div>
          <div className="flex items-center text-base leading-5">
            <div className="hidden sm:block">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4"
                >
                  {link.title}
                </Link>
              ))}
            </div>
            {/* <ThemeSwitch /> */}
            <MobileNav />
          </div>
        </header>
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  );
};

export default LayoutWrapper;
