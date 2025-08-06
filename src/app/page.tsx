import Link from "next/link";

const commonSessionClassName =
  "p-8 border rounded-xl shadow-lg bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700";

const commonTitleClassName = "text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4";

export default async function Home() {
  return (
    <div className="flex flex-col h-auto w-full flex-grow items-center justify-center px-4 py-4 bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700">
      <h1 className="text-5xl font-extrabold text-gray-800 dark:text-gray-100 mb-8 text-center">Welcome to My Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
        {/* section: About Me */}
        <section className={commonSessionClassName}>
          <h2 className={commonTitleClassName}>About Me</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {`I'm a passionate developer with a love for learning and sharing knowledge. In this blog,
            you will find articles on various topics including programming, technology trends, and
            personal development.`}
          </p>
        </section>

        {/* section: My Projects */}
        <section className={commonSessionClassName}>
          <h2 className={commonTitleClassName}>My Projects</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {`I enjoy working on a variety of projects, from web development to open-source
            contributions. Check out my latest projects and see what I'm currently working on.`}
          </p>
          <Link href="/projects" className="text-blue-500 dark:text-blue-400 hover:underline mt-4 block">
            View All Projects →
          </Link>
        </section>

        {/* section: Featured Project - NexusHeart */}
        <section className={commonSessionClassName}>
          <h2 className={commonTitleClassName}>Featured Project</h2>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">NexusHeart 💕</h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
            {`A cross-cultural dating platform connecting Chinese and American singles. I developed 
            the frontend using Next.js 15 with TypeScript, Tailwind CSS, and Supabase integration.`}
          </p>
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded">
              Next.js 15
            </span>
            <span className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded">
              TypeScript
            </span>
            <span className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded">
              Tailwind CSS
            </span>
          </div>
          <Link
            href="https://nexusheart.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 dark:text-blue-400 hover:underline"
          >
            Visit NexusHeart →
          </Link>
        </section>

        {/* section: Contact */}
        <section className={commonSessionClassName}>
          <h2 className={commonTitleClassName}>Contact</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {`Feel free to reach out to me through the contact page. I'm always open to discussing new
            ideas, collaborations, or just having a chat about technology.`}
          </p>
        </section>

        {/* section: Frontend Development Notes */}
        <section className={commonSessionClassName}>
          <h2 className={commonTitleClassName}>Frontend Development Notes</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {`Explore my detailed notes on frontend development, where I document my learnings and
            best practices.`}
          </p>
          <Link
            href="https://merrickcai.notion.site/Frontend-Development-188e3a07cc988036a524c65fb43d2d06"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 dark:text-blue-400 hover:underline mt-4 block"
          >
            View Notes on Notion
          </Link>
        </section>

        {/* section: Upcoming Features */}
        <section className={commonSessionClassName}>
          <h2 className={commonTitleClassName}>Upcoming Features</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {`Exciting updates are on the way! The site will soon be connected to a backend database
            hosted on Vercel, enabling dynamic content and enhanced functionality. Additionally,
            support for Markdown and MDX will be introduced, leveraging Next.js's official
            integration to create rich, flexible content.`}
          </p>
        </section>
      </div>
    </div>
  );
}
