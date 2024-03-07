import { type ComponentPropsWithoutRef } from 'react';

type TProps = {
    id: string;
    label: string;
} & ComponentPropsWithoutRef<'input'>

export default function Input({id, label, ...props}: TProps) {
    return (
        <p>
            <label htmlFor={id}>{label}</label>
            <input id={id} {...props} />
        </p>
    );
}
