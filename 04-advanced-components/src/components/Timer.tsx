import { Timer as TProps } from '../store/timers-context.tsx';
import Container from './UI/Container.tsx';

export default function Timer({ name, duration }: TProps) {
    return (
        <Container as="article">
            <h2>{name}</h2>
            <p>{duration}</p>
        </Container>
    );
}
