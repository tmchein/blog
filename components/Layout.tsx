import { JSX } from "https://esm.sh/v99/preact@10.11.0/src/index";

export function Layout(
  { children, title }: { children: JSX.Element; title: string },
) {
  return (
    <>
      <head>
        <title>{title}</title>
      </head>
      {children}
    </>
  );
}
