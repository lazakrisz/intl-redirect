"use server";

import { parseWithZod } from "@conform-to/zod";
import { searchSchema } from "./schema";
import { getPathname, redirect } from "@/i18n/navigation";
import { getLocale } from "next-intl/server";
import { redirect as nextRedirect } from "next/navigation";

export async function searchAction(prevState: unknown, formData: FormData) {
  const submission = parseWithZod(formData, {
    schema: searchSchema,
  });

  if (submission.status !== "success") {
    return submission.reply();
  }

  const searchParams = new URLSearchParams();

  if (submission.value.query) {
    searchParams.set("query", submission.value.query);
  }

  const { type } = submission.value;

  if (type === "news") {
    const locale = await getLocale();
    const pathname = getPathname({ href: `/${type}`, locale });
    const url = `${pathname}?${searchParams.toString()}#search-results`;

    nextRedirect(url);
  } else {
    const url = `/test?${searchParams.toString()}#search-results`;

    nextRedirect(url);
  }
}
