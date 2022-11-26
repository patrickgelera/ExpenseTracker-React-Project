import React from "react";
import "./Chart.css";
import ChartBar from './ChartBar';

const Chart = (props)=>{
    const  dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value)
    console.log(props.dataPoints)
    const totalMax = Math.max(...dataPointValues)
    console.log(totalMax)
    return(
        <div className="chart">
            {props.dataPoints.map((dataPoint)=>{
                return <ChartBar
                    key = {dataPoint.label}
                    value = {dataPoint.value}
                    max = {totalMax}
                    label = {dataPoint.label}
                />
            })}
        </div>
    )
}
export default Chart