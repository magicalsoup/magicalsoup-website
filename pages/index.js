import {React} from 'react';
import Card from '../components/card';
import HobbyData from '../data/hobbyData';
export default function Home() {

  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <div className="flex w-screen items-center justify-center">
        <p>this is a wall of text</p>
      </div>
      <div className="flex justify-center items-center flex-wrap p-16 bg-cyan-400">
        {HobbyData.map((item) =>
          <Card props={item}></Card>
        )}
      </div>
    </div>
  )
}
