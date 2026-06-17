import Box from "@mui/material/Box";
import { Typography, CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";

const Output = () => {
    const { aiDesc, cta, hashtags, success } = useSelector((state) => state.ad);
    const { loading, infoArea } = useSelector((state) => state.ui);
  return (
        <>
        
            <Typography variant="body1" component="div" color="text.primary">
                {/* loading state, cavab alindiqda cavab gorunece ve ya error  */}
                { loading ? (
                    <CircularProgress sx={{marginTop:2}} size={"40px"} aria-label="Loading…" />
                ) : success ? (
                    <Box sx={{marginTop:1}}>
                        <Typography component="div" variant="h6">Reklam mətni</Typography>
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

                        <Typography component="div" variant="h6">CTA (Call To Action)</Typography>
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

                        <Typography component="div" variant="h6">Hashtag-lər</Typography>
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
                            marginBottom: 2
                        }}
                        >
                            {hashtags}
                        </Box>
                        
                    </Box>
                    


                    ) : (
                    <span>{infoArea}</span>
                ) }
            </Typography>
        </>
  )
}

export default Output


