import { Container } from "@mui/system"
import React from "react"
import { getDistinctYear } from "../../Common/common.utls"
import { Filters } from "../Filters/Filters"
import Loading from "../Loading/Loading"
import { FilterProps } from "../types"
import { NobleCards } from "./NobleCards"

export const NoblePrize = (props:FilterProps) => {
    const {nobelData} = props;

    const [year, setYear] = React.useState<string[]>([]);
    const [category, setCategory] = React.useState('');
    const [load, setLoad] = React.useState(false);

    const onYearHandle = (value: string[]) => {
        value && setYear(value);
    }

    const onCatHandle = (value: string) => {
       setCategory(value);
    }
    React.useEffect( () => {
        if (nobelData){
            setYear(getDistinctYear(nobelData));
            setLoad(true);
        }
      },[nobelData])
    return (
        <Container maxWidth="lg" sx={{marginTop: 5}}>
            <Filters nobelData={nobelData} onYearClick={onYearHandle} onCatClick={onCatHandle}/>
            {load ? ( <NobleCards nobelData={nobelData} year={year} category={category}/>): <Loading />}
        </Container>
    )
}