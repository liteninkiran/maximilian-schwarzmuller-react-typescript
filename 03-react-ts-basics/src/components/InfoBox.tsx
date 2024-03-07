import { ReactNode } from "react";

type THintBoxProps = {
    mode: 'hint';
    children: ReactNode;
}

type TWarningBoxProps = {
    mode: 'warning';
    severity: 'low' | 'medium' | 'high';
    children: ReactNode;
}

type TProps = THintBoxProps | TWarningBoxProps;

export default function InfoBox(props: TProps) {
    const { mode, children } = props;
    const warningStrength = mode === 'warning' ? `warning--${ props.severity }` : '';
    const className = `infobox infobox-${ mode } ${ warningStrength }`;
    const header = <h2>Warning</h2>;

    return (
        <aside className={ className }>
            {  mode === 'warning' ? header : null }
            <p>{ children }</p>
        </aside>
    );
}
