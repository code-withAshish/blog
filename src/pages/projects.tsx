import Card from "@/components/Card";

const projectsData = [
  {
    title: "VS Code Extension",
    description: `Developed a VS code extension as part of a open source community that enchances the experience of building Telegram bots in VS code using grammy framework`,

    href: "https://marketplace.visualstudio.com/items?itemName=grammyjs.grammyjs",
  },
  {
    title: "Dashlane Clone",
    description: `A simple and elegant clone of random password generating website Dashlane which i like to call it FASHLANE made with svelte and tailwindcss`,
    href: "https://fashlane.netlify.app",
  },
  {
    title: "Ashish Blogs",
    description:
      "This very webiste you are on right now is one my best projects that i loved and enjoyed developing a blog made with Nextjs, Tailwind and Sanity CMS all the best tools combined",
    href: "/",
  },
  {
    title: "COVID 19 API",
    description: `Developed an API using nodejs and
pupetter that scrapes data from mygov.in
and returns it as an structured JSON
format.`,
    href: "https://covid19-api-india.vercel.app/",
  },
];

export default function Projects() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Projects
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Some of my projects as a fullstack developer
          </p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {projectsData.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                href={d.href}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
