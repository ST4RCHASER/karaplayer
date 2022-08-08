import Head from 'next/head';
import Image from 'next/image';

import styles from '@/styles/Home.module.css';
import Soundfont from 'soundfont-player';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import MidiPlayer from 'midi-player-js';
import axios from 'axios';
import convertInstrumentIdToName from '@/utils/convertInstrumentIdToName';
import convertNoteToDrumName from '@/utils/convertNoteToDrumName';
export default function Home() {
  const router = useRouter();
  const [cachePlayer, setPlayer] = useState<MidiPlayer.Player | null>(null);
  const [midi, setMidi] = useState<string>('');
  //https://files.catbox.moe/bx0q6k.mid
  const [midiURL, setMidiURL] = useState<string>('https://files.catbox.moe/fgfy07.mid');
  const [currentTime, setCurrentTime] = useState(0);
  const doLoadMidi = async (url: string) => {
    if (typeof window == 'undefined') return;
    const AudioContext = window.AudioContext || false;
    const audioContext = new AudioContext;
    let instrumentList: Soundfont.Player[] = [];
    const availableChannels = [];
    if (cachePlayer?.isPlaying()) cachePlayer?.stop();
    const playInstrument = async (instrument: number, noteName: string, gain: number) => {
      instrumentList[instrument]?.play(noteName, audioContext.currentTime, { gain: gain / 100,duration: gain / 100  });
      console.log('Played instrument', instrument, noteName, gain);
    }
    const playDrum = async (instrument: number, noteNumber: number, gain: number) => {
      console.log('Played drum', convertNoteToDrumName(noteNumber), instrument, noteNumber, gain);
    }
    const onMidiEvent = (event: any) => {
      if (event.name == 'Note on' && event.velocity > 0) {
        // console.log(event);
        //Try get the instrument from channel 
          if(event.channel == 10) playDrum(event.instrument, event.noteNumber, event.velocity);
          else playInstrument(event.channel, event.noteName, event.velocity);
          
        //document.querySelector('#track-' + event.track + ' code').innerHTML = JSON.stringify(event);
        //console.log(event);
      }
    }
    const player = new MidiPlayer.Player((event: any) => {
      // console.log('event', event, player);
      setCurrentTime(event.tick);
      onMidiEvent(event);
    })
    const res = await axios.get(url, { responseType: 'arraybuffer' });
    setMidi(res.data);
    //Convert it to base64
    player?.loadArrayBuffer(res.data);
    for (const ins of player?.instruments || []) {
      const name = convertInstrumentIdToName(ins) as any;
      const instrument = await Soundfont.instrument(audioContext, name, {soundfont: 'MusyngKite'})
      instrumentList.push(instrument);
      console.log('instrument loaded', name);
    }
    for(const event of player?.getEvents() || []){
      for(const subevent of (event as any)) {
        if(subevent.name == 'Note on' && typeof subevent.channel == 'number' && availableChannels.indexOf(subevent.channel) == -1) {
          availableChannels.push(subevent.channel);
        }
      } 
    }
    availableChannels.sort((a, b) => a - b);
    //Fill to instruments list
    const newInstrumentList = [];
    let useCount = 0;
    for(const channel of availableChannels) {
      newInstrumentList[channel] = instrumentList[useCount++];
    }
    instrumentList = newInstrumentList;
    console.log('available channels', availableChannels,instrumentList);
    setPlayer(player);
    console.log(player);
    console.log('Loaded midi');
  }
  useEffect(() => {

  }, [typeof window])
  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold underline">
          Karaplayer
        </h1>
        <br />
        {currentTime > 0 && <div>Time: {currentTime}</div>}
        {cachePlayer?.tempo && <div>Tempo: {cachePlayer?.tempo}</div>}
        {
          midi ? <div className='text-green-600'>Song loaded</div> : <div className='text-red-600'>Song not load</div>
        }
        {
          cachePlayer?.isPlaying() ? <div className='text-green-600'>▶️ Playing</div> : <div className='text-red-600'>⏹️ Not playing</div>
        }
        <input type="text" className='w-72' placeholder='Enter midi url' value={midiURL} onChange={e => setMidiURL(e.target.value)} />
        <button className='bg-white text-black px-2' onClick={() => { doLoadMidi(midiURL) }}>Load</button>
        <br />
        {cachePlayer?.isPlaying() ? <button className='bg-white text-black px-2' onClick={() => { cachePlayer?.stop() }}>Stop</button> : <button className='bg-white text-black px-2' onClick={() => { cachePlayer?.skipToPercent(0); cachePlayer?.play() }}>Play</button>}
      </div>
    </div>
  );
}
