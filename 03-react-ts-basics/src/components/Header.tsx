import { type PropsWithChildren } from 'react';

type Image = { src: string, alt: string }
type HeaderProps = PropsWithChildren<{ image: Image }>;

export default function Header({ image, children }: HeaderProps) {
    return (
        <header>
            <img { ...image } />
            { children }
        </header>
    );
}
