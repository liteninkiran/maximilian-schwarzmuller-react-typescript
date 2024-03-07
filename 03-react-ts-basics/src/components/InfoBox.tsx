import { ReactNode } from "react";

type TProps = {
    mode: 'hint' | 'warning';
    children: ReactNode;
}

export default function InfoBox({ mode, children }: TProps) {
    const warningStrength = mode === 'warning' ? 'warning--medium' : '';
    const className = `infobox infobox-${mode} ${warningStrength}`;
    const header = <h2>Warning</h2>;

    return (
        <aside className={ className }>
            {  mode === 'warning' ? header : null }
            <p>{ children }</p>
        </aside>
    );
}
