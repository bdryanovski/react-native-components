import { forwardRef } from 'react';
import { Button, type ButtonBaseRef } from './Button';
import type { ButtonBaseProps } from './types';

/**
 * A button component styled for primary actions.
 */
export const PrimaryButton = forwardRef<ButtonBaseRef, ButtonBaseProps>(
  (props, ref) => {
    return <Button ref={ref} variant="primary" {...props} />;
  }
);

PrimaryButton.displayName = 'PrimaryButton';

export default PrimaryButton;
