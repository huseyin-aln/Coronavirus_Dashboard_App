import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import PieChart from "fusioncharts/fusioncharts.charts";
ReactFC.fcRoot(FusionCharts, PieChart);

const WorldPieChart = ({ worldPieData }) => {
  const chartConfigs = {
    type: "pie3d",
    width: "100%",
    height: "200",
    dataFormat: "json",
    dataSource: {
      chart: {
        caption: "World",
        captionFontColor: "#102a42",
        captionFontSize: 20,
        baseFontSize: 16,
        baseFontColor: "#3289da",
        smartLineColor: "#3289da",
        paletteColors:
          "#f71212, #0B5ED7, #ecae10, #F2726F,  #35e91d, #6E80CA ,#8d6e63,",
        use3DLighting: 1,
        useDataPlotColorForLabels: 1,
        decimals: 0,
        pieRadius: "70%",
        animation: 1,
        pieYScale: 70,
        showHoverEffect: 1,
      },
      data: worldPieData,
    },
  };

  return (
    <div>
      <ReactFC {...chartConfigs} />
    </div>
  );
};

export default WorldPieChart;
