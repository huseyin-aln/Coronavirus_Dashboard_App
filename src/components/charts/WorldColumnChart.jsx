import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import ColumnChart from "fusioncharts/fusioncharts.charts";
ReactFC.fcRoot(FusionCharts, ColumnChart);

const WorldColumnChart = ({ worldColumnData }) => {
  const chartConfigs = {
    type: "bar3d",
    width: "50%",
    height: "350",
    dataFormat: "json",
    dataSource: {
      chart: {
        caption: "Countries With The Most Confirmed Coronavirus (COVID-19)",
        xaxisname: "Countries",
        yaxisname: "Confirmed",
        showvalues: "1",
        captionFontColor: "#102a42",
        captionFontSize: 20,
        baseFontSize: 16,
        decimal: 2,
        paletteColors:
          "#2caeba, #5D62B5, #ecae10, #F2726F,  #35e91d, #6E80CA ,#8d6e63,",
        showHoverEffect: 1,
      },
      data: worldColumnData,
    },
  };

  return (
    <div>
      <ReactFC {...chartConfigs} />
    </div>
  );
};

export default WorldColumnChart;
