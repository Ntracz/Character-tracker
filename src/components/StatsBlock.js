import React from "react";
import Stat from "./Stat";
import './StatsBlock.css'

function StatsBlock(){
    return (
        <div className="statsBlock">
         <Stat title='Strenght'/>
         <Stat title='Dexterity'/>
         <Stat title='Constitution'/>
         <Stat title='Intelligence'/>
         <Stat title='Wisdom'/>
         <Stat title='Charisma'/>
        </div>
    )
}

export default StatsBlock;