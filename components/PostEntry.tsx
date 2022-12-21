export function PostEntry(
  { title, thumb, excerpt, date, id }: {
    title: string;
    thumb: string;
    excerpt: string;
    date: Date;
    id: string;
  },
) {
  return (
    <article class="py-4 max-w-sm text-gray-700 border rounded-xl border-gray-200 p-4">
      <a class="hover:text-blue-600" href={`/blog/${id}`}>
        <h2 class="text-2xl font-bold">
          {title}
        </h2>
        <img
          class="rounded-lg max-h-full"
          src={thumb}
          alt={title}
        />
      </a>
      <p class="max-w-xs text-justify my-2 line-clamp-3">
        {excerpt}
      </p>
      <time>Fecha: {Intl.DateTimeFormat("es").format(date)}</time>
    </article>
  );
}
