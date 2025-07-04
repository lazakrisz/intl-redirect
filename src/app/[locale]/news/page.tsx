import { Link } from "@/i18n/navigation";
import { getArticles } from "@/lib/queries";
import SearchForm from "./search-form";

export default async function NewsPage() {
  const articles = await getArticles();

  return (
    <main className="max-w-screen-lg mx-auto py-12">
      <hgroup className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">News</h1>
        <p className="text-sm text-gray-500">
          Find the latest news and articles about the company
        </p>
      </hgroup>

      <div className="h-[1000px] grid place-items-center">Large Dummy hero</div>

      <SearchForm type="news" />

      <ul
        id="search-results"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4"
      >
        {articles.map((article) => (
          <li key={article.id}>
            <article className="p-4 border border-gray-200 rounded-md">
              <h2>{article.title}</h2>
              <p>{article.excerpt}</p>

              <Link
                href={{
                  pathname: "/news/[slug]",
                  params: { slug: article.slug },
                }}
              >
                Read more
              </Link>
            </article>
          </li>
        ))}
      </ul>
    </main>
  );
}
