import classNames from "classnames";

type Props = {
  className?: string;
};

const Hr = ({ className }: Props) => (
  <hr className={classNames("my-2", className)} />
);

export default Hr;
