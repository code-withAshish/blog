import AuthorLayout from "@/components/AuthorLayout";
import Link from "next/link";

export default function About() {
  return (
    <>
      <AuthorLayout>
        <p>
          Hii there, I am <b>Ashish Bhushan Kumar</b> a Fullstack developer with
          love for Javascript (I know weird language right?).
          <br />
          <br /> I would love to talk to you about any opportunities or projects
          feel free to drop me a mail and if you interested in some of my work,
          well check out my &nbsp;
          <b>
            <Link href={"/projects"}>Projects</Link>
          </b>
          <br />
          <br />
          Happy coding!!! 💻🧑🏻‍💻
        </p>
      </AuthorLayout>
    </>
  );
}
