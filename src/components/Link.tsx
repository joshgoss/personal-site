import classNames from "classnames";

type Props = {
  className?: string;
  href: string;
  children: React.ReactNode;
  title: string;
};

const Link = ({ className, children, href, title }: Props) => (
  <a
    className={classNames("text-blue-500 underline", className)}
    href={href}
    title={title}
  >
    {children}
  </a>
);

export default Link;
