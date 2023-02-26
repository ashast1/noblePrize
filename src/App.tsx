import React from 'react';
import logo from './logo.svg';
import './App.css';
import FetchData from './Services/FetchData.services';
import Header from './Components/Header/Header';
import { NoblePrize } from './Components/NoblePrize/NoblePrize';
import { getDataByID } from './Common/common.utls';
import { PrizeProps } from './Components/types';

function App() {
  const [data, setData] = React.useState<PrizeProps[]>();
  const [year, setYear] = React.useState([]);
  const [category, setCategory] =React.useState();
  const [filteredData, setFilteredYearData] = React.useState<PrizeProps[]>([]);
  

  React.useEffect(()=>{
    FetchData('http://api.nobelprize.org/v1/prize.json')
    .then((response)=>{
      setData(response.data.prizes);
      if(response.data.prizes) {
        setFilteredYearData(response.data.prizes);
      } else {
        setFilteredYearData([]);
      }
    });
  },[])
  return (
    <>
    <Header />
    <NoblePrize nobelData={filteredData}/>
    </>
  );
}

export default App;
