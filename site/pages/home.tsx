import type { ReactNode } from "react";
import { Base } from "../components/Base";
import { Icon, type IconName } from "../components/Icon";

const Section = ({
  icon,
  title,
  children,
}: {
  icon: IconName;
  title: string;
  children: ReactNode;
}) => (
  <section>
    <h2 className="mb-2 flex items-center gap-2 text-xl font-semibold text-stone-900 dark:text-stone-100">
      <Icon name={icon} className="size-5 text-stone-500" />
      {title}
    </h2>
    <div className="leading-relaxed">{children}</div>
  </section>
);

export const Home = () => (
  <Base url="/">
    <section className="mb-10">
      <h1 className="text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-100">
        Luke Wiwatowski
      </h1>
      <p className="mt-2 text-lg text-stone-500 dark:text-stone-400">
        Gymnastics Engineering Miscellaneous
      </p>
    </section>
    <div className="space-y-8">
      <Section icon="award" title="Gymnastics">
        <p>
          Australian Representative for 15 years. 2010 Delhi Commonwealth Games
          Gold Medal winner.
        </p>
      </Section>
      <Section icon="settings" title="Engineering">
        <p>
          Bachelors in mechanical engineering from Swinburne University.
          Controls engineering at Alerton Australia. Lab Assistant for PV Lab
          Australia. Software Engineer for WSP Australia.
        </p>
      </Section>
      <Section icon="smartphone" title="Online">
        <p>You can connect with me on the line using many different urls.</p>
        <p className="mt-3 flex gap-4">
          <a
            href="https://www.linkedin.com/in/lukewiwa/"
            className="hover:text-sky-700 dark:hover:text-sky-400"
          >
            <Icon name="linkedin" className="size-6" label="LinkedIn" />
          </a>
          <a
            href="https://github.com/lukewiwa/"
            className="hover:text-sky-700 dark:hover:text-sky-400"
          >
            <Icon name="github" className="size-6" label="GitHub" />
          </a>
        </p>
      </Section>
    </div>
  </Base>
);
