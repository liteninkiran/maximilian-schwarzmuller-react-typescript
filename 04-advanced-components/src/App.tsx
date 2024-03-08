import Input from './components/Input';
import Form, { type TFormHandle } from './components/Form';
import Button from './components/Button';
import { useRef } from 'react';

type TFormData = {
    name: string;
    age: string;
}

function App() {
    const customForm = useRef<TFormHandle>(null);

    function handleSave(data: unknown) {
        const extractedData = data as TFormData;
        console.log(extractedData);
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
