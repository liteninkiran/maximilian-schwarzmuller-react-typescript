import { FormEvent, useRef, useImperativeHandle, forwardRef } from 'react';
import { type ComponentPropsWithoutRef } from 'react';

type TProps = ComponentPropsWithoutRef<'form'> & {
    onSave: (value: unknown) => void;
};

const Form = forwardRef<TFormHandle, TProps>(function Form({ onSave, children, ...otherProps }, ref) {
    const form = useRef<HTMLFormElement>(null);
    const formHandle: TFormHandle = { clear(): void { form.current?.reset(); }}
    useImperativeHandle(ref, () => formHandle);

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData);
        onSave(data);
    }

    return (
        <form onSubmit={handleSubmit} {...otherProps} ref={form}>
            {children}
        </form>
    );
});

export default Form;
export type TFormHandle = {
    clear: () => void;
}
