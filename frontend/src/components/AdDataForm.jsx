import { FormControl, TextField, Stack, Button } from '@mui/material';

const AddDataForm = () => {
  return (
    <Stack component="form" spacing={3} noValidate autoComplete="off">
      <FormControl>
        <TextField fullWidth id="filled-basic" name="businessName" label="Biznes adı" variant="filled" />
      </FormControl>
      <FormControl>
        <TextField
        
          id="outlined-multiline-static"
          label="Məhsul və ya xidmət haqqında qısa məlumat"
          variant='filled'
          fullWidth 
          multiline
          rows={4}
        />
      </FormControl>

      <Button variant="contained" color="primary" size="large">
          DAXİL ET
      </Button>
    </Stack>
  )
}

export default AddDataForm