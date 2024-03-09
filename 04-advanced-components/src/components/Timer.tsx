import { useState } from 'react';
import { Timer as TProps } from '../store/timers-context.tsx';
import Container from './UI/Container.tsx';

export default function Timer({ name, duration }: TProps) {

    const durationMs = duration * 1000;
    const [remainingTime, setRemainingTime] = useState(durationMs);
    const callback = () => {
        setRemainingTime(prevTime => prevTime - 50);
    }

    setInterval(callback, 50);

    return (
        <Container as="article">
            <h2>{name}</h2>
            <p><progress max={durationMs} value={remainingTime}/></p>
            <p>{}</p>
        </Container>
    );
}
