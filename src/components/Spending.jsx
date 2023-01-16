import React, { useState } from "react";
import SpendingStyled from "../styled-components/SpendingStyled";
import data from "./../data.json";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  LabelList,
  Tooltip,
} from "recharts";
import getLocaleCurrency from "../lib/getLocaleCurreny";
const CustomToolTip = ({ active, payload, label })=>{
 if(active && payload && payload.length){
    const {payload : Payload} = payload[0];
     const {amount} = Payload
    return <div className="customTooltip">
              <p>{getLocaleCurrency(amount)}</p>
          </div>
 }
 return null
}
const Spending = () => {
    let [posData, setposData] = useState({});
    const totalSpent = data.reduce((sum,currentValue)=>sum + currentValue.amount,0)
  return (
    <SpendingStyled>
      <h3>Spending - Last 7 days</h3>
      <div className="graphWrapper">
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={data} margin={{ bottom: 30 }} onMouseLeave={()=>{setposData({})}}>
            <Bar
              className="bar"
              dataKey="amount"
              fill={"hsl(10, 79%, 65%)"}
              radius={4}
              onMouseOver={(data) => {
                setposData(data);
              }}
            >
              <LabelList position="bottom" dataKey="day" fill="gray" />
            </Bar>
            <Tooltip cursor={false} content={<CustomToolTip/>} isAnimationActive={false}   position={{ x: posData.x, y: posData.y - 30}}/>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="totalThisMonth">
             <h3>Total this week</h3>
            <div>
                <p style={{fontSize : 22}}>{getLocaleCurrency(totalSpent)}</p>
            </div>
      </div>
    </SpendingStyled>
  );
};

export default Spending;
