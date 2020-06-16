import React from 'react';
import SudokuRenderer from './SudokuRenderer/SudokuRenderer';
import ImageUpload from './ImageUpload/ImageUpload';
import axios from 'axios';
import DisplayImage from './DisplayImage/DisplayImage';
import Fab from '@material-ui/core/Fab';
import CircularProgress from '@material-ui/core/CircularProgress';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import * as Constants from '../utils/Constants';
import SaveIcon from '@material-ui/icons/Save';
import Divider from '@material-ui/core/Divider';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import './Sudoku.css';

class Sudoku extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageVal: null,
      sudokuObject: null,
      loading: false,
      snackbarActive: false,
    };
  }

  imageUploaded = async (file) => {
    this.setState({
      imageVal: file,
      displayImage: window.URL.createObjectURL(file),
      loading: true,
    });
    let formData = new FormData();
    formData.append('file', file);
    const res = await axios.post(
      'https://screenshot-sudoku-solver.herokuapp.com/uploader',
      // 'http://localhost:3000/uploader',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );
    if (res.status === 200) {
      this.snackbarMessage = Constants.M_S_IMAGE_UPLOAD;
      this.snackbarSeverety = 'success';
    } else {
      this.snackbarMessage = Constants.M_F_IMAGE_UPLOAD;
      this.snackbarSeverety = 'error';
    }
    this.setState({
      sudokuObject: res.data ? res.data : null,
      loading: false,
      snackbarActive: true,
    });
  };

  getSudokuObject = (obj) => {
    this.setState({ sudokuObject: obj });
  };

  saveImages = async () => {
    let formData = new FormData();
    formData.append('file', this.state.imageVal);
    formData.append('json', JSON.stringify(this.state.sudokuObject));
    const res = await axios.post(
      'http://localhost:3000/image-save-uploader',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );
  };

  closeSnackbar = () => {
    this.setState({ snackbarActive: false });
  };

  solve = async () => {
    this.setState({
      loading: true,
    });
    const res = await axios.post(
      'https://screenshot-sudoku-solver.herokuapp.com/solve',
      // 'http://localhost:3000/solve',
      { body: this.state.sudokuObject },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    if (res.status === 200) {
      this.snackbarMessage = Constants.M_S_SOLVE;
      this.snackbarSeverety = 'success';
    } else {
      this.snackbarMessage = Constants.M_F_SOLVE;
      this.snackbarSeverety = 'error';
    }
    this.setState({
      sudokuObject: res.data ? res.data : this.state.sudokuObject,
      loading: false,
      snackbarActive: true,
    });
  };

  render() {
    return (
      <>
        <ImageUpload onUpload={this.imageUploaded} />

        {this.state.sudokuObject && (
          <>
            <div style={{ display: 'flex' }}>
              <SudokuRenderer
                key={JSON.stringify(this.state.sudokuObject)}
                sudokuObject={this.state.sudokuObject}
                getSudokuObject={this.getSudokuObject}
              />

              <DisplayImage src={this.state.displayImage} />
            </div>
            <Divider light />
            <div className="center">
              <Fab
                variant="extended"
                color="secondary"
                onClick={this.saveImages}
              >
                <SaveIcon />
                Save Images for Training
              </Fab>
              <Fab variant="extended" color="primary" onClick={this.solve}>
                <ArrowForwardIosIcon />
                Solve
              </Fab>
            </div>
          </>
        )}
        {this.state.loading && <CircularProgress />}
        <Snackbar
          open={this.state.snackbarActive}
          autoHideDuration={5000}
          onClose={this.closeSnackbar}
          onClick={this.closeSnackbar}
        >
          <Alert severity={this.snackbarSeverety}>{this.snackbarMessage}</Alert>
        </Snackbar>
      </>
    );
  }
}
export default Sudoku;
