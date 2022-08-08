import { useEffect, useState } from 'react';
import axios from 'axios';
const JZZ = require(`jzz`);
require(`jzz-midi-smf`)(JZZ);
require(`jzz-synth-tiny`)(JZZ);
export default function Home() {
  const [midiURL, setMidiURL] = useState<string>(
    `https://files.catbox.moe/fgfy07.mid`,
  );
  const [cachePlayer, setPlayer] = useState<any>(null);
  const [showData, setShowData] = useState({
    time: 0,
    end: 0,
    playing: false,
    paused: false,
  });
  JZZ.synth.Tiny.register(`Web Audio`);
  const startPlayer = async () => {
    if (cachePlayer && (cachePlayer.playing || cachePlayer.paused))
      cachePlayer.stop();
    axios.get(midiURL, { responseType: `arraybuffer` }).then((res) => {
      const midiout = JZZ().openMidiOut();
      // data can be String, Buffer, ArrayBuffer, Uint8Array or Int8Array
      const smf = new JZZ.MIDI.SMF(res.data);
      console.log(smf);

      const warn = smf.validate();
      if (warn) console.log(warn);
      const player = smf.player();
      setPlayer(player);
      player.connect(midiout);
      player.play();
      const timer = setInterval(() => {
        if (!player.playing && !player.paused) clearInterval(timer);
        setShowData({
          time: player.positionMS(),
          end: player.durationMS(),
          playing: player.playing,
          paused: player.paused,
        });
      });
    });
  };
  // useEffect(() => {

  // }, [typeof window])
  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold underline">JZZ Load test</h1>
        <br />
        fgfy07,bx0q6k
        <br />
        <input
          type="text"
          className="w-72"
          placeholder="Enter midi url"
          value={midiURL}
          onChange={(e) => setMidiURL(e.target.value)}
        />
        <br />
        <br />
        <button
          className="bg-white text-black px-2"
          onClick={() => {
            startPlayer();
          }}
        >
          Start
        </button>
        <button
          className="bg-white text-black px-2"
          onClick={() => {
            cachePlayer.stop();
          }}
        >
          Stop
        </button>
        <button
          className="bg-white text-black px-2"
          onClick={() => {
            cachePlayer.pause();
          }}
        >
          Pause
        </button>
        <button
          className="bg-white text-black px-2"
          onClick={() => {
            cachePlayer.resume();
          }}
        >
          Resume
        </button>
        <br />
        {JSON.stringify(showData)}
        <br />
        {!showData.playing && showData.paused
          ? `⏸️`
          : showData.playing
          ? `▶️`
          : `⏹️`}
        {` `}
        {showData.time.toFixed(0)}/{showData.end.toFixed(0)}
      </div>
    </div>
  );
}
