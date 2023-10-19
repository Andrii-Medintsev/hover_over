import Field from './components/Field';

const URL = 'https://60816d9073292b0017cdd833.mockapi.io/modes';

const App = () => {
  console.log(URL);
  return (
    <div className='container'>
      <Field />
    </div>
  );
};

export default App;
