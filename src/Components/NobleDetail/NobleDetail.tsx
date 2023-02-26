import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { NobleDetailProps } from "../types";
import { Chip } from "@mui/material";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

function BootstrapDialogTitle(props: DialogTitleProps) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}
export const NobleDetail = (props: NobleDetailProps) => {
  const { open, onClose, detailData, year, category } = props;

  return (
    <div>
      <BootstrapDialog
        onClose={onClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={onClose}>
          {detailData.firstname} {detailData.surname}
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>{detailData.motivation}</Typography>
          <Typography gutterBottom>
            <Chip
              color="success"
              size="small"
              label={"Year: " +  year }
              sx={{ marginBottom: 1 }}
            />
            <Chip
              color="success"
              size="small"
              label={"Category: " + category}
              sx={{ marginBottom: 1, marginLeft: 2 }}
            />
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={onClose}>
            Close
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
};
