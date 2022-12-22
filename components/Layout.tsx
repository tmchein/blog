import { JSX } from "https://esm.sh/v99/preact@10.11.0/src/index";
import { Footer } from "./Footer.tsx";

export function Layout(
  { children, title }: { children: JSX.Element; title: string },
) {
  return (
    <div class="min-h-screen bg-[#22272E] flex flex-col">
      <head>
        <title>{title}</title>
      </head>
      <main class="flex-grow-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
