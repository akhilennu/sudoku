import React from 'react';
import SudokuRenderer from './SudokuRenderer/SudokuRenderer';
import ImageUpload from './ImageUpload/ImageUpload';
import axios from 'axios';
import DisplayImage from './DisplayImage/DisplayImage';

class Sudoku extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageVal: null,
      sudokuObject: null,
    };

    this.getSudokuObject = this.getSudokuObject.bind(this);
    this.saveImages = this.saveImages.bind(this);
  }

  imageUploaded = async (file) => {
    this.setState({
      imageVal: file,
      displayImage: window.URL.createObjectURL(file),
    });
    let formData = new FormData();
    formData.append('file', file);
    const res = await axios.post(
      // 'https://akhilennu.pythonanywhere.com/test-uploader',
      // 'https://akhilennu.pythonanywhere.com/uploader',
      'https://screenshot-sudoku-solver.herokuapp.com/uploader',
      // 'http://localhost:3000/uploader',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );
    this.setState({ sudokuObject: res.data });
  };

  getSudokuObject = (obj) => {
    this.setState({ sudokuObject: obj });
  };

  saveImages = async () => {
    let formData = new FormData();
    formData.append('file', this.state.imageVal);
    formData.append('json', JSON.stringify(this.state.sudokuObject));
    const res = await axios.post(
      // 'https://akhilennu.pythonanywhere.com/test-uploader',
      // 'https://akhilennu.pythonanywhere.com/uploader',
      // 'https://screenshot-sudoku-solver.herokuapp.com/uploader',
      'http://localhost:3000/image-save-uploader',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );
  };

  render() {
    return (
      <>
        <ImageUpload onUpload={this.imageUploaded} />
        <div style={{ display: 'flex' }}>
          {this.state.sudokuObject && (
            <SudokuRenderer
              sudokuObject={this.state.sudokuObject}
              getSudokuObject={this.getSudokuObject}
            />
          )}
          <DisplayImage src={this.state.displayImage} />
        </div>
        <button onClick={this.saveImages}>Save Images for Training</button>
      </>
    );
  }
}
export default Sudoku;
