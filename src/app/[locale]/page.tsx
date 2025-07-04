import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import NextLink from "next/link";

export default function HomePage() {
  const t = useTranslations("HomePage");

  return (
    <div className="max-w-screen-lg mx-auto py-12">
      <h1 className="text-2xl font-bold">{t("title")}</h1>

      <nav className="mt-4">
        <ul className="flex gap-4">
          <li>
            <Link href="/news">
              News{" "}
              <span className="text-sm text-gray-500">i18n, middleware</span>
            </Link>
          </li>

          <li>
            <NextLink href="/test">
              Test{" "}
              <span className="text-sm text-gray-500">
                No i18n, no middleware
              </span>
            </NextLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
