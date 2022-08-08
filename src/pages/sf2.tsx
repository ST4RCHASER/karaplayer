import { useEffect } from 'react';
export default function Home() {
  // useEffect(() => {

  // }, [typeof window])
  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold underline">SF2 Load test</h1>
        <br />
        <button className="bg-white text-black px-2">Play</button>
      </div>
    </div>
  );
}
