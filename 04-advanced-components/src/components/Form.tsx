import { type ComponentPropsWithoutRef } from 'react';

type TProps = ComponentPropsWithoutRef<'form'>;

export default function Form(props: TProps) {
    return (
        <form {...props}>
            {props.children}
        </form>
    );
}
