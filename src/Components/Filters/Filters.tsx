import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import { NobelFilterProps } from '../types';
import { getDistinctCategory, getDistinctYear } from '../../Common/common.utls';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export const Filters = (props: NobelFilterProps) => {
    const {nobelData, onYearClick, onCatClick} = props;

    const [yearName, setYearName] = React.useState<string[]>([]);
    const [selectedYear, setSelectedYear] = React.useState<string[]>([]);
    const [categoryName, setCategoryName] = React.useState<string[]>([]);
    const [selectedCategory, setSelectedCategory] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof yearName>) => {
    const {
      target: { value },
    } = event;
    setSelectedYear(
      typeof value === 'string' ? value.split(',') : value,
    );
    onYearClick(value as unknown as string[]);
  };

  const handleChangeCategory = (event: SelectChangeEvent<typeof categoryName>) => {
    const {
      target: { value },
    } = event;
    setSelectedCategory(
      typeof value === 'string' ? value.split(',') : value,
    );
    onCatClick(value as unknown as string)
  };
  React.useEffect( () => {
    if (nobelData){
        setYearName(getDistinctYear(nobelData));
        setCategoryName(getDistinctCategory(nobelData));
    }
   
  },[nobelData])
    return (
<div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">Year</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={selectedYear}
          onChange={handleChange}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {yearName.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={selectedYear.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="category">Category</InputLabel>
        <Select
          labelId="category"
          id="demo-multiple-checkbox"
          value={selectedCategory}
          onChange={handleChangeCategory}
          input={<OutlinedInput label="Category" />}
          MenuProps={MenuProps}
        >
          {categoryName.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
    )
}