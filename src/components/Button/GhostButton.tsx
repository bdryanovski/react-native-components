import { forwardRef } from 'react';
import { Button, type ButtonBaseRef } from './Button';
import type { ButtonBaseProps } from './types';

export const GhostButton = forwardRef<ButtonBaseRef, ButtonBaseProps>(
  (props, ref) => {
    return <Button ref={ref} variant="ghost" {...props} />;
  }
);

GhostButton.displayName = 'GhostButton';

export default GhostButton;
