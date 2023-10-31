import * as React from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import { ClosedCaptioning, X } from 'phosphor-react';

const filter = createFilterOptions<FilmOptionType>();

export default function FreeSoloCreateOptionDialog() {
  const [value, setValue] = React.useState<FilmOptionType | null>(null);
  const [open, toggleOpen] = React.useState(false);

  const handleClose = () => {
    setDialogValue({
      title: '',
    });
    toggleOpen(false);
  };

  const [dialogValue, setDialogValue] = React.useState<FilmOptionType>({
    title: '',
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Check if the title already exists in the options
    const existingOption = top100Films.find(
      (option) => option.title === dialogValue.title
    );

    if (existingOption) {
      setValue(existingOption);
    } else {
      // If the title doesn't exist, add it to the options
      const newOption = { title: dialogValue.title };
      top100Films.push(newOption);
      setValue(newOption);
    }

    handleClose();
  };
  const handleDelete = (title) => {
    // Remove the option with the given title from the options
    const updatedOptions = top100Films.filter((option) => option.title !== title);
    top100Films.length = 0;
    top100Films.push(...updatedOptions);
    setValue(null);
  };

  return (
    <React.Fragment>
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          if (typeof newValue === 'string') {
            // timeout to avoid instant validation of the dialog's form.
            setTimeout(() => {
              toggleOpen(true);
              setDialogValue({
                title: newValue,
              });
            });
          } else if (newValue && newValue.inputValue) {
            toggleOpen(true);
            setDialogValue({
              title: newValue.inputValue,
            });
          } else {
            setValue(newValue);
          }
        }}
        filterOptions={(options, params) => {
          const filtered = filter(options, params);

          if (params.inputValue !== '') {
            filtered.push({
              inputValue: params.inputValue,
              title: `Add "${params.inputValue}"`,
            });
          }

          return filtered;
        }}
        id="free-solo-dialog-demo"
        options={top100Films}
        getOptionLabel={(option) => {
          if (typeof option === 'string') {
            return option;
          }
          if (option.inputValue) {
            return option.inputValue;
          }
          return option.title;
        }}
        sx={{borderRadius:'50px'}} 
        selectOnFocus
        clearOnBlur
        handleHomeEndKeys
        renderOption={(props, option) => (
          <li {...props} style={{ display: 'flex', justifyContent: 'space-between' }}>
            {option.title}
            {option.title !== dialogValue.title && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleDelete(option.title);
                }}
                style={{ border: 'none', background:'none',cursor:'pointer' }}
              >
                <X size={25}  />
              </button>
            )}
          </li>
        )}
        sx={{ width: 300}}
        freeSolo
        renderInput={(params) => <TextField {...params} label="Search You Movie" />}
      />
      <Dialog open={open} onClose={handleClose}  sx={{borderRadius:'50px'}}>
        <form onSubmit={handleSubmit}>
          <DialogTitle>Add a new film</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Did you miss any film in our list? Please, add it!
            </DialogContentText >
            <TextField
              autoFocus
              margin="dense"
              id="name"
              value={dialogValue.title}
              sx={{borderRadius:'50px'}}
              onChange={(event) =>
                setDialogValue({
                  ...dialogValue,
                  title: event.target.value,
                })
              }
              label="title"
              type="text"
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit">Add new Movie</Button>
          </DialogActions>
        </form>
      </Dialog>
    </React.Fragment>
  );


}

interface FilmOptionType {
  inputValue?: string;
  title: string;
}

const top100Films: FilmOptionType[] = [
  { title: 'The Shawshank Redemption' },
  { title: 'The Godfather' },
  { title: 'Monty Python and the Holy Grail' },
];
