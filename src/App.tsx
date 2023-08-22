import { useState, useEffect } from 'react';
import LotteryTable from './components/lotteryTable';
import LotterySelector from './components/lotterySelector';
import { generateUniqueLotteryNumbers } from './utils/lotteryUtils';
import Container from 'react-bootstrap/Container';
import './App.scss';

function App() {
  const [lotteryNumbers, setLotteryNumbers] = useState<number[][]>([]);

  const handleSelect = (pick: number, total: number, sets: number) => {
    const numbers = generateUniqueLotteryNumbers(total, pick, sets);
    setLotteryNumbers(numbers);
  };

  useEffect(() => {
    handleSelect(7, 35, 10);
  }, []);

  return (
      <Container>
        <h1>Lottery</h1>
        <LotterySelector onSelect={handleSelect} />
        <LotteryTable numbers={lotteryNumbers} />
      </Container>
  );
}

export default App;
