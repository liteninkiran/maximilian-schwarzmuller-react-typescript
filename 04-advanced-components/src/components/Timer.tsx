import { useEffect, useState } from 'react';
import { Timer as TProps } from '../store/timers-context.tsx';
import Container from './UI/Container.tsx';

export default function Timer({ name, duration }: TProps) {
    const durationMs = duration * 1000;
    const [remainingTime, setRemainingTime] = useState(durationMs);
    const callback = (): void => setRemainingTime(prevTime => prevTime - 50);
    useEffect((): void => { setInterval(callback, 50) }, []);
    const formattedRemainingTime = (remainingTime / 1000).toFixed(2);

    return (
        <Container as="article">
            <h2>{name}</h2>
            <p><progress max={durationMs} value={remainingTime}/></p>
            <p>{formattedRemainingTime}</p>
        </Container>
    );
}
