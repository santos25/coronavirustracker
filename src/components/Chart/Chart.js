import React from "react";
import { Pie } from "react-chartjs-2";

// import { fetchDaily } from "../../Api";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
    width: "80%",
  },
}));

const Chart = ({ country, confirmed, recovered, deaths }) => {
  //   const [dataDaily, setDataDaily] = useState([]);
  const classes = useStyles();

  //   useEffect(() => {
  //     // const fetchApi = async () => {
  //     //   setDataDaily(await fetchDaily());
  //     // };
  //     // fetchApi();
  //   }, []);

  //   const lineChart = dataDaily.length ? (
  //     <Line
  //       data={{
  //         labels: dataDaily.map(({ date }) => date),
  //         datasets: [
  //           {
  //             data: dataDaily.map(({ confirmed }) => confirmed),
  //             label: "Confirmados",
  //             borderColor: "#3333ff",
  //             fill: true,
  //           },
  //           {
  //             data: dataDaily.map(({ deaths }) => deaths),
  //             label: "Muertes",
  //             borderColor: "red",
  //           },
  //         ],
  //       }}
  //     />
  //   ) : null;

  const pieChart = confirmed ? (
    <Pie
      data={{
        labels: ["Infected", "Recovered", "Dead"],
        datasets: [
          {
            label: "People",
            backgroundColor: [
              "rgba(0, 0, 255, 0.5)",
              "rgba(0, 255, 0, 0.5)",
              "rgba(255, 0, 0, 0.5)",
            ],
            data: [confirmed.value, recovered.value, deaths.value],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Country ${country}` },
      }}
    />
  ) : null;

  return (
    <div className={classes.container}>
      {/* {
                country ? barChart : lineChart
            } */}

      {pieChart}
    </div>
  );
};

export default Chart;
