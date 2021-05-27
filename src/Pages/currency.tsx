import { useQuery } from "react-query";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  CircularProgress,
  Select,
  FormControl,
  Grid,
  MenuItem,
  Typography,
} from "@material-ui/core";
import { useStyles } from "./style.materialUi";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";
import { DataGrid, GridColDef } from "@material-ui/data-grid";

const datas = [
  { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
  // { name: "Page B", uv: 500, pv: 1400, amt: 2000 },
];
const url = "https://www.blockchain.com/ticker";

type DataCurr = {
  "15m": number;
  last: number;
  buy: number;
  sell: number;
  symbol: string;
};

type currency = {
  [key: string]: DataCurr;
};
const fetchData = async (): Promise<currency> => {
  return await axios.get(url).then((response) => response.data);
};

function Currency() {
  const classes = useStyles();
  const { data, status, refetch } = useQuery<currency>(
    "tickier-data",
    fetchData
  );
  const [currencys, setCurrency] = useState("USD");

  if (status === "loading") {
    <CircularProgress style={{ margin: "auto 0 auto 0" }} />;
  }

  const handleChangeCurrency = (data: any) => {
    setCurrency(data.target.value);
  };

  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "ID",
      type: "number",
      width: 110,
    },
    { field: "last", headerName: "Last", type: "number", width: 110 },
    { field: "buy", headerName: "Buy", type: "number", width: 110 },
    { field: "sell", headerName: "Sell", type: "number", width: 110 },
  ];

  const rows = [
    { id: 1, last: 3213, buy: 2322, sell: 3524 },
    { id: 2, last: 4213, buy: 1322, sell: 5992 },

    { id: 3, last: 313, buy: 222, sell: 3500 },
  ];

  useEffect(() => {
    const update = setInterval(refetch, 3000);
    return () => clearInterval(update);
  }, []);

  return (
    <>
      <Grid container className={classes.select}>
        <Grid item xs={12} sm={4} md={4}>
          <Typography variant="h5">BITCOIN CURRENCY LIST</Typography>
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <FormControl variant="outlined">
            <Select
              value={currencys}
              onChange={(e) => handleChangeCurrency(e)}
              label="Currency List"
            >
              {data &&
                Object.keys(data).map((item) => {
                  return <MenuItem value={item}>{item}</MenuItem>;
                })}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <h2>
            {data && data[currencys].symbol}
            {data && data[currencys].last} |{data && data[currencys].buy}
          </h2>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={12} md={12} className={classes.graph}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          checkboxSelection
        />
      </Grid>
    </>
  );
}

export default Currency;
