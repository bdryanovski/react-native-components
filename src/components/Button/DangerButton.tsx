import { forwardRef } from 'react';
import { Button } from './Button';
import type { ButtonBaseProps, ButtonBaseRef } from './types';

/**
 * A button component styled for dangerous actions, such as deletions.
 * @returns A ButtonBase component with the "danger" variant.
 */
export const DangerButton = forwardRef<ButtonBaseRef, ButtonBaseProps>(
  (props, ref) => {
    return <Button ref={ref} variant="danger" {...props} />;
  }
);

DangerButton.displayName = 'DangerButton';

export default DangerButton;
