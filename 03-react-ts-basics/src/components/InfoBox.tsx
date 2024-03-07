import { ReactNode } from "react";

type TProps = {
    mode: 'hint' | 'warning';
    severity?: 'low' | 'medium' | 'high';
    children: ReactNode;
}

export default function InfoBox({ mode, severity, children }: TProps) {
    const warningStrength = mode === 'warning' ? `warning--${severity}` : '';
    const className = `infobox infobox-${mode} ${warningStrength}`;
    const header = <h2>Warning</h2>;

    return (
        <aside className={ className }>
            {  mode === 'warning' ? header : null }
            <p>{ children }</p>
        </aside>
    );
}
