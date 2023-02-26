import { PrizeProps } from "../Components/types";

export const getDataByID = (data: PrizeProps[], year?: string , category?: string) => {
    const newPrizes = data.filter((item)=> {
        if(year && category){
            return item.year == year && item.category == category;
        } else if ( year) {
            return item.year == year;
        } else if(category) {
            return item.category = category;
        }
        return [];
    })
    return newPrizes;
}

export const getDistinctYear = (data: PrizeProps[]) => {
    const newYear = [...new Set(data.map(item => item.year))]; 
    return newYear;
}

export const getDistinctCategory = (data: PrizeProps[]) => {
    return [...new Set(data.map(item => item.category))]; 
}