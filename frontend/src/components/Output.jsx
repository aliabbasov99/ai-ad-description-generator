import Box from "@mui/material/Box";
import { Typography, CircularProgress } from "@mui/material";
import { useState } from "react";

const Output = () => {
  const [ loading, setLoading ] = useState(false)
  const [ aiData, setAiData ] = useState("saf")

  const [ aiDesc, setAiDesc] = useState("")
  const [ cta, setCta] = useState("")
  const [ hashtags, setHashtags] = useState([])

  return (
        <>
        
            <Typography variant="body1" color="text.primary">
                {/* loading state, cavab alindiqda cavab gorunece ve ya error  */}
                { loading ? (
                    <CircularProgress sx={{marginTop:2}} size={"40px"} aria-label="Loading…" />
                ) : aiData ? (
                    <Box sx={{marginTop:1}}>
                        <Typography variant="h6">Reklam mətni</Typography>
                        <Box
                        sx={{
                            backgroundColor: 'rgba(255, 255, 255, 0.09)',
                            border: '1px solid rgba(255, 255, 255, 0.23)',
                            borderRadius: '4px',
                            padding: '16px',
                            minHeight: '60px',
                            width: '100%',
                            boxSizing: 'border-box',
                            whiteSpace: 'pre-line',
                        }}
                        >
                            {aiDesc}
                        </Box>

                        <Typography variant="h6">CTA (Call To Action)</Typography>
                        <Box
                        sx={{
                            backgroundColor: 'rgba(255, 255, 255, 0.09)',
                            border: '1px solid rgba(255, 255, 255, 0.23)',
                            borderRadius: '4px',
                            padding: '16px',
                            minHeight: '60px',
                            width: '100%',
                            boxSizing: 'border-box',
                            whiteSpace: 'pre-line',
                        }}
                        >
                            {cta}
                        </Box>

                        <Typography variant="h6">Hashtag-lər</Typography>
                        <Box
                        sx={{
                            backgroundColor: 'rgba(255, 255, 255, 0.09)',
                            border: '1px solid rgba(255, 255, 255, 0.23)',
                            borderRadius: '4px',
                            padding: '16px',
                            minHeight: '60px',
                            width: '100%',
                            boxSizing: 'border-box',
                            whiteSpace: 'pre-line',
                        }}
                        >
                            {hashtags}
                        </Box>
                        
                    </Box>
                    


                    ) : (
                    <span>Xahiş olunur məlumatları daxil edin...</span>
                ) }
            </Typography>
        </>
  )
}

export default Output


