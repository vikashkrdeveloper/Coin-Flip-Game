import React, { useState } from "react";
import Swal from "sweetalert2";

// Define types for state variables
type Blockchain = "ethereum" | "polygon" | "solana" | "bitcoin";
type Side = "heads" | "tails" | null;

const CoinFlipGame: React.FC = () => {
  const [blockchain, setBlockchain] = useState<Blockchain>("ethereum");
  const [side, setSide] = useState<Side>(null);
  const [result, setResult] = useState<Side>(null);
  const [betAmount, setBetAmount] = useState<string>("");

  const getProvider = (blockchain: Blockchain) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let provider: any;
    switch (blockchain) {
      case "ethereum":
        break;
      case "polygon":
        break;
      case "solana":
        break;
      case "bitcoin":
        break;
      default:
        provider = null;
    }
    return provider;
  };

  const flipCoin = async () => {
    if (!betAmount || !blockchain) {
      Swal.fire({
        title: "Error",
        text: "Please select the token and bet first!",
        icon: "error",
      });
      return;
    }
    if (!side) {
      Swal.fire({
        title: "Error",
        text: "Please select the side!",
        icon: "error",
      });
      return;
    }
    const provider = getProvider(blockchain);
    if (provider) {
      // Implement blockchain-specific logic here if needed
    }

    const randomSide: Side = Math.random() > 0.5 ? "heads" : "tails";
    setResult(randomSide);
    if (side === randomSide) {
      Swal.fire({
        title: "You won",
        text: `You doubled your bet of ${betAmount} tokens on ${blockchain}!`,
        icon: "success",
      });
    } else {
      Swal.fire({
        title: "You lost",
        text: "Better luck next time.",
        icon: "error",
      });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-6">Coin Flip Game</h1>
      <select
        value={blockchain}
        onChange={(e) => setBlockchain(e.target.value as Blockchain)}
        required
        className="px-4 py-2 mb-4 rounded-lg border border-gray-300 focus:outline-none"
      >
        <option value="ethereum">Ethereum (Rinkeby Testnet)</option>
        <option value="polygon">Polygon (Mumbai Testnet)</option>
        <option value="solana">Solana (Devnet)</option>
        <option value="bitcoin">Bitcoin (Testnet)</option>
      </select>
      <input
        type="number"
        value={betAmount}
        onChange={(e) => setBetAmount(e.target.value)}
        placeholder="Enter bet amount"
        className="px-4 py-2 mb-4 rounded-lg border border-gray-300 focus:outline-none"
        required
      />
      <div className="flex mb-4">
        <button
          onClick={() => setSide("heads")}
          className={`px-4 py-2 rounded-lg mr-2 ${
            side === "heads" ? "bg-blue-500 text-white" : "bg-gray-300"
          }`}
        >
          Heads
        </button>
        <button
          onClick={() => setSide("tails")}
          className={`px-4 py-2 rounded-lg ${
            side === "tails" ? "bg-blue-500 text-white" : "bg-gray-300"
          }`}
        >
          Tails
        </button>
      </div>

      <button
        onClick={flipCoin}
        className="px-6 py-3 bg-green-500 text-white rounded-lg"
      >
        Flip Coin
      </button>

      {result && (
        <div className="mt-6 text-2xl font-bold">
          Result: {result === "heads" ? "Heads" : "Tails"}
        </div>
      )}
    </div>
  );
};

export default CoinFlipGame;
