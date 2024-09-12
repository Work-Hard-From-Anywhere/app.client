import type { ReactNode } from 'react';
import { Theme } from 'tamagui';

type IScreenContentProps = {
  children?: ReactNode;
};

export const ScreenContent = ({ children }: IScreenContentProps) => {
  return <Theme name="light">{children}</Theme>;
};
