import { ReactNode, type ElementType } from 'react';

type TProps = {
    as: ElementType;
};

export default function Container({ as }: TProps): ReactNode {
    const Component = as;
    return <Component />
}
