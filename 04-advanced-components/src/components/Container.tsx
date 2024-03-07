import { type ReactNode, type ElementType, ComponentPropsWithoutRef } from 'react';

type TProps<T extends ElementType> = {
    component?: T;
    children: ReactNode;
} & ComponentPropsWithoutRef<T>;

export default function Container<C extends ElementType>({ component, children, ...props }: TProps<C>): ReactNode {
    const Component = component || 'div';
    return (<Component {...props}>{children}</Component>);
}
