import type { MouseEvent, ReactNode } from "react";
import { useLocation, useNavigate } from "react-router";

type Props = {
  /** 移動先セクションの id */
  to: string;
  children: ReactNode;
  className?: string;
  onNavigate?: () => void;
};

/**
 * トップページ内のセクションへ移動するリンク。
 * トップ以外のページ（将来追加するページ）からでもトップの該当セクションへ戻れる。
 */
export function SectionLink({ to, children, className, onNavigate }: Props) {
  const { pathname, search } = useLocation();
  const navigate = useNavigate();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    onNavigate?.();
    if (pathname === "/") {
      document.getElementById(to)?.scrollIntoView();
      window.history.replaceState(window.history.state, "", `${search}#${to}`);
    } else {
      navigate(`/${search}#${to}`);
    }
  };

  return (
    <a href={`/${search}#${to}`} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
