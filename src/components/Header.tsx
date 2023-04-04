import classNames from "classnames";

type Props = {
  className?: string;
  children: React.ReactNode;
};

const Header = ({ className, children }: Props) => (
  <h3 className={classNames("text-xl mx-3 mt-3 mb-3", className)}>
    {children}
  </h3>
);

export default Header;
