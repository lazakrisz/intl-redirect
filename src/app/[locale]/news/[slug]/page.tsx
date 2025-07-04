import { Link } from "@/i18n/navigation";
import { getArticleBySlug } from "@/lib/queries";
import { notFound } from "next/navigation";

export default async function NewsSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <main>
      <Link href="/news">Back to news</Link>

      <h1>{article.title}</h1>
      <p>{article.excerpt}</p>
      <p>{article.content}</p>
    </main>
  );
}
