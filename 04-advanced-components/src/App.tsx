import Button from './components/Button';
import Container from './components/Container';

function App() {
    return (
        <main>
            <Container component={Button} onClick={() => { console.log('Click') }} type="button">
                Click Me
            </Container>
        </main>
    );
}

export default App;
