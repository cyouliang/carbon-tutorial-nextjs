'use client';

import TutorialHeader from '@/components/TutorialHeader/TutorialHeader';
import { Content, Theme } from '@carbon/react';

export function Providers({ children }) {
  // takes in children parameter, and return a new layout of the children with TutorialHeader included.
  return (
    <div>
      <Theme theme="g100">
        <TutorialHeader />
      </Theme>
      <Content>{children}</Content>
    </div>
  );
}
