import { Grid, Typography } from "@mui/material";
import React from "react";
import { getDataByID } from "../../Common/common.utls";
import { FilterProps, PrizeProps } from "../types";
import { NobleCard } from "./NobleCard";

export const NobleCards = (props: FilterProps) => {
  const { nobelData, year, category } = props;

  const getYearData = (year: string) => {
    let filterData: PrizeProps[] = [];
    if (nobelData) {
      filterData = getDataByID(nobelData, year, category?.toString());
      console.log(filterData);
    }
    return (
      <>
        {filterData &&
          filterData.map((item, index) => {
            return (
              <NobleCard
                laureates={item.laureates}
                year={item.year}
                category={item.category}
                key={index}
              />
            );
          })}
      </>
    );
  };
  return (
    <>
      {year &&
        year.map((item) => {
          return (
            <div key={item} style={{marginTop: 20}}>
              <Typography variant="h2" component="div">
                {item}
              </Typography>

              <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
                key={item}
              >
                {getYearData(item)}
              </Grid>
            </div>
          );
        })}
    </>
  );
};
