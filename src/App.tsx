import CoinFlipGame from './Components/CoinFlipGame';
import WalletConnect from './Components/WalletConnect';

const App = () => {
  return (
    <main className="container mx-auto my-10">
       <WalletConnect />
       <CoinFlipGame />
    </main>  
  );
}

export default App;
