import './App.css';
import Loading from './Loading';

const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=fd933377ec6343f2997122351aaab327'

function App() {
  const [loading, setLoading] = useState(true);
  
  if(loading){
    return (
      <main>
        <Loading />
      </main>
    );
  }
}

export default App;
