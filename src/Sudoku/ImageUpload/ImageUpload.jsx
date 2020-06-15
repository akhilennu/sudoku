import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import './ImageUpload.css';

export default function ImageUpload(props) {
  const onDrop = useCallback(async (acceptedFiles) => {
    props.onUpload(acceptedFiles[0]);
  }, []);
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/jpeg, image/png',
    multiple: false,
    onDrop,
  });

  return (
    <section className="container">
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop a jpeg file here, or click to select files</p>
        <em>(Only *.jpeg and *.png image will be accepted)</em>
      </div>
    </section>
  );
}
