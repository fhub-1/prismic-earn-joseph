import { SliceZone } from "@prismicio/react";
import { Content } from "@prismicio/client";
import { DateField, isFilled } from "@prismicio/client";

import { components } from "@/slices";
import Heading from "@/components/Heading";
import Bounded from "@/components/Bounded";
import { formatDate } from "@/utils/formatDate";
// import { formatDate } from "@/utils/formatDate";

export default function ContentBody({
  page,
}: {
  page: Content.BlogPostDocument | Content.ProjectDocument;
}) {
  // function formDate(date: DateField) {
  //   if (isFilled.date(date)) {
  //     const dateOptions: Intl.DateTimeFormatOptions = {
  //       weekday: "long",
  //       year: "numeric",
  //       month: "long",
  //       day: "numeric",
  //     };

  //     return new Intl.DateTimeFormat("en-ke", dateOptions).format(
  //       new Date(date)
  //     );
  //   }
  // }

  // const formattedDate = formDate(page.data.date);
  const formattedDate = formatDate(page.data.date);
  return (
    <Bounded as="article">
      <div className="rounded-2xl border-2 border-slate-800 bg-slate-900 px-4 py-10 md:px-8 md:py-20">
        <Heading as="h1">{page.data.title}</Heading>
        <div className="flex gap-4 text-yellow-400">
          {page.tags.map((tag, index) => (
            <span key={index} className="text-xl font-bold">
              {tag}
            </span>
          ))}
        </div>
        <p className="mt-8 border-b border-slate-600 text-xl font-medium text-slate-300">
          {formattedDate}
          {/* working on bug */}
        </p>
        <div className="prose prose-lg prose-invert mt-12 w-full max-w-none md:mt-20">
          <SliceZone slices={page.data.slices} components={components} />
        </div>
      </div>
    </Bounded>
  );
}
