import Input from './components/Input';
import Form, { type TFormHandle } from './components/Form';
import Button from './components/Button';
import { useRef } from 'react';

function App() {
    const customForm = useRef<TFormHandle>(null);

    function handleSave(data: unknown) {
        if (!(data)                         ||
            !(typeof data === 'object')     ||
            !(data.hasOwnProperty('name'))  ||
            !(data.hasOwnProperty('age'))
        ) {
            return;
        }
        customForm.current?.clear();
    }

    return (
        <main>
            <Form onSave={handleSave} ref={customForm}>
                <Input type='text' label='Name' id='name' />
                <Input type='number' label='Age' id='age' />
                <p>
                    <Button>Save</Button>
                </p>
            </Form>
        </main>
    );
}

export default App;
