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
    };
  }

  imageUploaded = async (file) => {
    this.setState({
      imageVal: file,
      displayImage: window.URL.createObjectURL(file),
    });
    let formData = new FormData();
    formData.append('file', file);
    const res = await axios.post(
      'https://akhilennu.pythonanywhere.com/test-uploader',
      //   'https://akhilennu.pythonanywhere.com/uploader',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );
    console.log(res);
    console.log(this.state);
  };
  render() {
    return (
      <>
        <ImageUpload onUpload={this.imageUploaded} />
        <div style={{ display: 'flex' }}>
          <SudokuRenderer />
          <DisplayImage src={this.state.displayImage} />
        </div>
      </>
    );
  }
}
export default Sudoku;
