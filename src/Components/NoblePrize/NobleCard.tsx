import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Chip, Grid } from "@mui/material";
import { LaureatesProps, PrizeProps } from "../types";
import { NobleDetail } from "../NobleDetail/NobleDetail";

const initialData: LaureatesProps = {
  id: '0',
  firstname: 'loading...',
  surname: 'loading...',
  motivation: 'loading...',
  share: 'loading...'
}

export const NobleCard = (props: PrizeProps) => {
  const { laureates, year, category } = props;
  const [open, setOpen] = React.useState(false);
  const [detailData, setDetailData] = React.useState<LaureatesProps>(initialData);
  const [currentYear, setCurrentYear] = React.useState(year);
  const [currentCategory, setCurrentCategory] = React.useState(category);

  const handleClickOpen = (props: LaureatesProps, year: string, category: string) => {
    if (props){
    setDetailData(props);
    setCurrentCategory(category);
    setCurrentYear(year);
    setOpen(true);
  }
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      {laureates &&
        laureates.map((item) => {
          return (
            <Grid item xs={3} key={item.id}>
              <Card sx={{minHeight: 180}} >
                <CardContent>
                  <Chip
                    color="success"
                    size="small"
                    label={category}
                    sx={{ marginBottom: 1 }}
                  />
                  <Typography variant="h5" component="div">
                    {item.firstname} {item.surname}
                  </Typography>
                 
                </CardContent>
                <CardActions>
                  <Button size="small" onClick={()=>handleClickOpen(item, year, category)}>Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
        <NobleDetail open={open} onClose={handleClose} detailData={detailData} year={currentYear} category={currentCategory}/>
    </>
  );
};
