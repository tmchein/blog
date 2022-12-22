import { asset } from "$fresh/runtime.ts";

export function Footer() {
  return (
    <footer class="bg-[#2d333b] flex flex-col items-center mt-8 py-3 text-white">
      <img
        class="w-14"
        src={asset("/tmlogo.svg")}
        alt="TMCheiN's logo which is described by a large T followed by an M"
      />
      <ul class="flex gap-8 m-auto">
        <li>
          <a
            class="hover:text-blue-400 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/tmchein"
          >
            Twitter
          </a>
        </li>
        <li>
          <a
            class="hover:text-blue-400 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/tmchein"
          >
            GitHub
          </a>
        </li>
      </ul>
    </footer>
  );
}
