import { forwardRef } from 'react';
import { Button } from './Button';
import type { ButtonBaseProps, ButtonBaseRef } from './types';

export const GhostButton = forwardRef<ButtonBaseRef, ButtonBaseProps>(
  (props, ref) => {
    return <Button ref={ref} variant="ghost" {...props} />;
  }
);

GhostButton.displayName = 'GhostButton';

export default GhostButton;
