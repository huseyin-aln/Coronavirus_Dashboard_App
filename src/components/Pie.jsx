import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import PieChart from "fusioncharts/fusioncharts.charts";
ReactFC.fcRoot(FusionCharts, PieChart);


const Pie = ({pieData, state}) => {
   
  const chartConfigs = {
      type: "pie3d", 
      width: "100%", 
      height: "200", 
      dataFormat: "json", 
      dataSource: {
        chart: {
          caption: state[0].country,
          captionFontColor: "#102a42",
          captionFontSize: 20,
          baseFontSize: 16,
          baseFontColor: "#3289da",
          smartLineColor: "#3289da",
          paletteColors:
            "#f71212, #27a16e, #ecae10, #F2726F,  #35e91d, #6E80CA ,#8d6e63,",
          use3DLighting: 1,
          useDataPlotColorForLabels: 1,
          decimals: 0,
          pieRadius: "70%",
          animation: 1,
          pieYScale: 70,
          showHoverEffect : 1,
        },
        data: pieData,
      },
    };

    return (
      <div >
        <ReactFC {...chartConfigs} />
      </div>
    )
}

export default Pie


