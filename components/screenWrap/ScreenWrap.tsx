import type { ReactNode } from 'react';
import { Theme } from 'tamagui';

type IScreenContentProps = {
  children?: ReactNode;
};

const ScreenWrap = ({ children }: IScreenContentProps) => {
  return <Theme name="light">{children}</Theme>;
};

export default ScreenWrap;
