import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type Props = {
  id: string;
  /** 英語の大見出し（例: EXPERIENCE） */
  title: string;
  /** 各言語のサブタイトル（例: 職務経歴） */
  subtitle: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, title, subtitle, children, className = "" }: Props) {
  return (
    <section id={id} className={`scroll-mt-20 py-20 sm:py-28 ${className}`}>
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal>
          <header className="mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
              {title}
            </h2>
            <p className="mt-2 flex items-center gap-3 text-sm font-medium text-slate-500 dark:text-slate-400">
              <span className="h-px w-8 bg-gradient-to-r from-blue-500 to-violet-500" aria-hidden />
              {subtitle}
            </p>
          </header>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
