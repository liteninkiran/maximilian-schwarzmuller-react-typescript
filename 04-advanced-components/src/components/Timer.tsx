import { useEffect, useRef, useState } from 'react';
import { Timer as TProps, useTimersContext } from '../store/timers-context.tsx';
import Container from './UI/Container.tsx';

export default function Timer({ name, duration }: TProps) {
    const interval = useRef<number | null>(null);
    const durationMs = duration * 1000;
    const [remainingTime, setRemainingTime] = useState(durationMs);
    const formattedRemainingTime = (remainingTime / 1000).toFixed(2);

    const { isRunning } = useTimersContext();
    const intervalCallback = () => setRemainingTime(prevTime => prevTime - 50);
    const effectCallback = () => {
        let timer: number;
        if (isRunning) {
            timer = setInterval(intervalCallback, 50);
            interval.current = timer;
        } else if (interval.current) {
            clearInterval(interval.current);
        }
        return () => clearInterval(timer);
    }
 
    useEffect(() => effectCallback(), [isRunning]);
 
    if (remainingTime <= 0 && interval.current) {
        clearInterval(interval.current);
    }

    return (
        <Container as="article">
            <h2>{name}</h2>
            <p><progress max={durationMs} value={remainingTime}/></p>
            <p>{formattedRemainingTime}</p>
        </Container>
    );
}
