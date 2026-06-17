import axios from 'axios';
import { FormControl, TextField, Stack, Button } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setAdData } from '../store/adSlice.js';
import { setLoading, setInfoArea } from '../store/uiSlice.js';
const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL

const changeState = (e, setState) =>{
  setState(e.target.value)
  console.log("messi")
}


const AddDataForm = () => {
  const dispatch = useDispatch();


  const [ businessName, setBusinessName] = useState("")
  const [ productInfo, setProductInfo ] = useState("")
  

  const handleGenerate = async ()=>{
    dispatch(setLoading(true))

    try {
      const response = await axios.post(VITE_BACKEND_URL+"/generate-ad-text", {
          businessName,
          productInfo
        });
        dispatch(setAdData({
          success: response.data.success,
          aiDesc: response.data.aiData.aiDesc,
          cta: response.data.aiData.cta,
          hashtags: response.data.aiData.hashtags,
        }))
    } catch (error) {

      console.log(error)
      dispatch(setInfoArea("Xəta baş verdi! Bir daha cəhd edin."))

    } finally {
      dispatch(setLoading(false));
    }

  }
  return (
    <Stack  component="form" spacing={3} noValidate autoComplete="off">
      <FormControl>
        <TextField 
        onChange={e=>changeState(e, setBusinessName)} 
        fullWidth 
        id="filled-basic" 
        name="businessName" 
        label="Biznes adı" 
        variant="filled" 
        />
      </FormControl>
      <FormControl>
        <TextField
          onChange={e=>changeState(e, setProductInfo)} 
          id="outlined-multiline-static"
          label="Məhsul və ya xidmət haqqında qısa məlumat"
          name="productInfo"
          variant='filled'
          fullWidth 
          multiline
          rows={4}
        />
      </FormControl>

      <Button onClick={handleGenerate} variant="contained" color="primary" size="large">
          DAXİL ET
      </Button>
    </Stack>
  )
}

export default AddDataForm
