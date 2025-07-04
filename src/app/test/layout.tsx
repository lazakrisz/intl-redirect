import { NextIntlClientProvider } from "next-intl";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import "@/app/globals.css";

export default function TestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NextIntlClientProvider>
          <NuqsAdapter>{children}</NuqsAdapter>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
