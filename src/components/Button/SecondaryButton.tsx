import { forwardRef } from 'react';
import { Button, type ButtonBaseRef } from './Button';
import type { ButtonBaseProps } from './types';

/**
 * A button component styled for secondary actions.
 */
export const SecondaryButton = forwardRef<ButtonBaseRef, ButtonBaseProps>(
  (props, ref) => {
    return <Button ref={ref} variant="secondary" {...props} />;
  }
);

SecondaryButton.displayName = 'SecondaryButton';

export default SecondaryButton;
