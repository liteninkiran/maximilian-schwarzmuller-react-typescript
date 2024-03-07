import Button from './components/Button';
import Container from './components/Container';

function App() {
    return (
        <main>
            <Container as={Button}></Container>
        </main>
    );
}

export default App;
