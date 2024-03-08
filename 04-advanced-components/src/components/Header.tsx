import Button from './UI/Button.tsx';
import { useTimersContext } from '../store/timers-context.tsx';

export default function Header() {
    const timesCtx = useTimersContext();

    return (
        <header>
            <h1>ReactTimer</h1>

            <Button>{ timesCtx.isRunning ? 'Start' : 'Stop'} Timers</Button>
        </header>
    );
}
