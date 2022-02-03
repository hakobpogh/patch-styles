import React, { FC, HTMLAttributes } from 'react';

interface HeaderProps extends Omit<HTMLAttributes<any>, 'className'> {
  className: (className: string) => string;
}

export const Header: FC<HeaderProps> = ({
  className,
  children,
}) => {
  const classNameValue = className('SomeRandomClassName');
  console.log(`returned from className "${classNameValue}"`);

  return (
    <header className={classNameValue}>
      {children}
    </header>
  );
};
