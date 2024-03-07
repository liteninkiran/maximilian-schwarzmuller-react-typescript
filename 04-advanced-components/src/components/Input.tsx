type TProps = {
    id: string;
    label: string;
}

export default function Input({ id, label }: TProps) {
    return (
        <p>
            <label htmlFor={id}>{label}</label>
            <input id={id} type="text" />
        </p>
    );
}
