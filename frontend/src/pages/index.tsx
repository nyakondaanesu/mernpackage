import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <span className={title()}>MERN</span>
          <span className={title({ color: "violet" })}>.js&nbsp;</span>
          <br />
        </div>
        <div className="mt-8 flex flex-col gap-4">
          <span>
            1. Get started by editing{" "}
            <Code color="primary">pages/index.tsx</Code>
          </span>

          <span>
            2. Modify your api routes in{" "}
            <Code color="primary">backend/routes</Code>
          </span>
        </div>
      </section>
    </DefaultLayout>
  );
}
