import { useRef } from 'react';
import Button from './components/Button';
import Container from './components/Container';
import Input from './components/Input';

function App() {
    const input = useRef<HTMLInputElement>(null);

    return (
        <main>
            <Container component={Button} onClick={() => { console.log('Click') }} type="button">
                Click Me
            </Container>
            <Input label='Test' id='test' ref={input}></Input>
        </main>
    );
}

export default App;
