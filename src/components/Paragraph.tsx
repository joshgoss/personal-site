import classNames from "classnames";

type Props = {
  className?: string;
  children: React.ReactNode;
};

const Paragraph = ({ className, children }: Props) => (
  <p className={classNames("block text-sm text-gray-600 mx-3", className)}>
    {children}
  </p>
);

export default Paragraph;
