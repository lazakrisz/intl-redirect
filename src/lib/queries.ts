import "server-only";

export async function getArticles() {
  const articles = await import("@/db/articles.json");
  return articles.articles;
}

export async function getArticleBySlug(slug: string) {
  const articles = await getArticles();
  return articles.find((article) => article.slug === slug);
}

export async function searchArticles(query: string) {
  const articles = await getArticles();
  return articles.filter((article) =>
    article.title.toLowerCase().includes(query.toLowerCase())
  );
}
