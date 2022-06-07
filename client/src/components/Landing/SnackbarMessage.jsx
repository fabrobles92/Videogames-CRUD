import {forwardRef} from 'react'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });


function SnackbarMessage({state, handleClose}) {
    switch (state) {
        case false:                
            return(
                <Snackbar open={true} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
                    <Alert severity='error' onClose={handleClose} sx={{ width: '100%' }}>
                        There was an error deleting your message, pls try again.
                    </Alert>
                </Snackbar>
            )
        case true:
            return(
            <Snackbar open={true} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
                <Alert severity='success' onClose={handleClose} sx={{ width: '100%' }}>
                    Videogame has been deleted successfully.
                </Alert>
            </Snackbar>
        )
        default:
            return null
    }
}

export default SnackbarMessage