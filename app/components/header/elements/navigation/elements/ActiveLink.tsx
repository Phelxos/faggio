import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { PropsWithChildren, useEffect, useState } from "react";

type Props = LinkProps & {
  className?: string;
  activeClassName?: string;
  onMouseOver: () => void;
  onMouseOut: () => void;
};

const ActiveLink = ({
  children,
  activeClassName,
  className,
  onMouseOver,
  onMouseOut,
  ...props
}: PropsWithChildren<Props>) => {
  const pathname = usePathname();
  const [computedClassName, setComputedClassName] = useState(className);

  useEffect(() => {
    // Dynamic route will be matched via props.as
    // Static route will be matched via props.href
    const linkPathname = new URL(
      (props.as || props.href) as string,
      location.href
    ).pathname;

    // Using URL().pathname to get rid of query and hash
    if (!pathname) return;

    const activePathname = new URL(pathname, location.href).pathname;

    const newClassName =
      linkPathname === activePathname
        ? `${className} ${activeClassName}`.trim()
        : className;

    if (newClassName !== computedClassName) {
      setComputedClassName(newClassName);
    }
  }, [
    props.as,
    props.href,
    activeClassName,
    className,
    computedClassName,
    pathname,
  ]);

  return (
    <Link
      className={computedClassName}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      {...props}
    >
      {children}
    </Link>
  );
};

export default ActiveLink;
