import * as React from 'react';
import { DialogContentProps, type DialogProps } from '@radix-ui/react-dialog';
import { Command as CommandPrimitive } from 'cmdk';
import { Search } from 'lucide-react';

import { cn } from '@src/shared/lib/shadcn-utils';
import UiDialog from '@src/components/ui/dialog';

const UiCommandRoot = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={cn(
      'flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground',
      className,
    )}
    {...props}
  />
));
UiCommandRoot.displayName = CommandPrimitive.displayName;

interface CommandDialogProps extends DialogProps {
  contentClass?: string;
  shouldFilter?: boolean;
  container?: HTMLElement;
  contentProps?: DialogContentProps;
}

const UiCommandDialog = ({
  children,
  container,
  contentClass,
  contentProps = {},
  shouldFilter = true,
  ...props
}: CommandDialogProps) => {
  return (
    <UiDialog {...props}>
      <UiDialog.Content
        container={container}
        className={cn('overflow-hidden p-0 shadow-lg', contentClass)}
        {...contentProps}
      >
        <UiCommandRoot
          shouldFilter={shouldFilter}
          className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5"
        >
          {children}
        </UiCommandRoot>
      </UiDialog.Content>
    </UiDialog>
  );
};

interface UiCommandInputProps
  extends React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input> {
  wrapperClass?: string;
  appendSlot?: React.ReactNode;
  prependSlot?: React.ReactNode;
}

const UiCommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  UiCommandInputProps
>(({ className, prependSlot, wrapperClass, appendSlot, ...props }, ref) => (
  <div
    className={cn('flex items-center border-b px-3', wrapperClass)}
    cmdk-input-wrapper=""
  >
    {prependSlot ? (
      prependSlot
    ) : (
      <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
    )}
    <CommandPrimitive.Input
      ref={ref}
      className={cn(
        'flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    />
    {appendSlot}
  </div>
));

UiCommandInput.displayName = CommandPrimitive.Input.displayName;

const UiCommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.List
    ref={ref}
    className={cn('max-h-[300px] overflow-y-auto overflow-x-hidden', className)}
    {...props}
  />
));

UiCommandList.displayName = CommandPrimitive.List.displayName;

const UiCommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>((props, ref) => (
  <CommandPrimitive.Empty
    ref={ref}
    className="py-6 text-center text-sm"
    {...props}
  />
));

UiCommandEmpty.displayName = CommandPrimitive.Empty.displayName;

const UiCommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Group
    ref={ref}
    className={cn(
      'overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground',
      className,
    )}
    {...props}
  />
));

UiCommandGroup.displayName = CommandPrimitive.Group.displayName;

const UiCommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Separator
    ref={ref}
    className={cn('-mx-1 h-px bg-border', className)}
    {...props}
  />
));
UiCommandSeparator.displayName = CommandPrimitive.Separator.displayName;

const UiCommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Item
    ref={ref}
    className={cn(
      'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      className,
    )}
    {...props}
  />
));

UiCommandItem.displayName = CommandPrimitive.Item.displayName;

const UiCommandShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        'ml-auto text-xs tracking-widest text-muted-foreground',
        className,
      )}
      {...props}
    />
  );
};
UiCommandShortcut.displayName = 'CommandShortcut';

const UiCommand = Object.assign(UiCommandRoot, {
  Dialog: UiCommandDialog,
  Input: UiCommandInput,
  List: UiCommandList,
  Empty: UiCommandEmpty,
  Group: UiCommandGroup,
  Item: UiCommandItem,
  Shortcut: UiCommandShortcut,
  Separator: UiCommandSeparator,
  Loading: CommandPrimitive.Loading,
});

export default UiCommand;
