import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("HomePage");

  return (
    <div>
      <h1>{t("title")}</h1>

      <Link href="/news">News</Link>
    </div>
  );
}
