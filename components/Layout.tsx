import { JSX } from "https://esm.sh/v99/preact@10.11.0/src/index";
import { Footer } from "./Footer.tsx";

export function Layout(
  { children, title }: { children: JSX.Element; title: string },
) {
  return (
    <div class="min-h-screen bg-[#22272E] flex flex-col">
      <head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content={title} />
        <meta property="og:type" content="blog" />
        <meta property="og:locale" content="es-CO" />
        <meta
          property="og:url"
          content="https://www.tmblog.deno.dev"
        />
        <meta
          property="og:image"
          content="https://i.postimg.cc/vmRNk2gk/tmblog-og-image.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="720" />
        <meta
          property="og:image:alt"
          content="A gray background with a TM logo in the center."
        />
        <meta property="og:site_name" content="TMBlog" />
        <meta
          property="og:description"
          content="Blog de opinión personal, tecnología, programación y desarrollo web."
        />
      </head>
      <main class="flex-grow-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
