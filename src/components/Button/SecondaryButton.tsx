import { forwardRef } from 'react';
import { Button } from './Button';
import type { ButtonBaseProps, ButtonBaseRef } from './types';

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
