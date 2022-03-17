import React from 'react';
import HobbyData from '../data/hobbyData';
import Card from '../components/card';
export default function() {
    return <>
    <div>
        
        <div className="grid grid-rows-1 grid-cols-3 flex-wrap p-16 bg-cyan-400">
                {HobbyData.map((item) =>
                  <Card props={item}></Card>
                )}
        </div>
    </div>
    </>
}