"use client";

import { getFormProps, getInputProps, useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { parseAsString, useQueryState } from "nuqs";
import { useActionState } from "react";
import { searchAction } from "./action";
import { searchSchema } from "./schema";

export default function SearchForm({ type }: { type: "test" | "news" }) {
  const [query] = useQueryState("query", parseAsString.withDefault(""));

  const [lastResult, action, isPending] = useActionState(
    searchAction,
    undefined
  );

  const [form, fields] = useForm({
    lastResult,
    defaultValue: {
      query,
    },
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: searchSchema });
    },
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });

  return (
    <form
      className="flex gap-2 items-center"
      action={action}
      {...getFormProps(form)}
    >
      <input type="hidden" name="type" value={type} />

      <div className="flex flex-col gap-1">
        <input
          aria-label="Search"
          title="Search"
          className="border border-gray-300 rounded-md p-2"
          {...getInputProps(fields.query, { type: "search" })}
        />
        <p className="text-sm text-red-500" id={fields.query.errorId}>
          {fields.query.errors?.join(", ")}
        </p>
      </div>

      <button
        className="bg-blue-500 text-white rounded-md p-2 self-start disabled:opacity-50"
        type="submit"
        disabled={isPending}
      >
        Search
      </button>
    </form>
  );
}
