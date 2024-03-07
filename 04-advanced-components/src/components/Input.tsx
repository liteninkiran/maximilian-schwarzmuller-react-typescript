import { forwardRef, type ComponentPropsWithoutRef } from 'react';

type TProps = {
    id: string;
    label: string;
} & ComponentPropsWithoutRef<'input'>

const Input = forwardRef<HTMLInputElement, TProps>(function Input({id, label, ...props}, ref) {
    return (
        <p>
            <label htmlFor={id}>{label}</label>
            <input id={id} {...props} ref={ref} />
        </p>
    );
});

export default Input;
