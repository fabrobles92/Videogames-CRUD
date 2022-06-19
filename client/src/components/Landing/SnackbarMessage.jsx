import {forwardRef} from 'react'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });


function SnackbarMessage({state}) {
    switch (state.flag) {
        case false:                
            return(
                <Snackbar open={true} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
                    <Alert severity='error' sx={{ width: '100%' }}>
                        {state.message}
                    </Alert>
                </Snackbar>
            )
        case true:
            return(
            <Snackbar open={true} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
                <Alert severity='success' sx={{ width: '100%' }}>
                    {state.message}
                </Alert>
            </Snackbar>
        )
        default:
            return null
    }
}

export default SnackbarMessage