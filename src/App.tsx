// components
import Form from './components/Form';

// providers
import FieldsProvider from './providers/FieldsProvider';

const App = () => {
  return (
    <FieldsProvider>
      <main className="min-h-screen bg-slate-900">
        <div className="container mx-auto py-10">
          <h1 className="text-6xl text-slate-50 font-bold text-center">
            Dynamic Form
          </h1>

          <Form />
        </div>
      </main>
    </FieldsProvider>
  );
};

export default App;
