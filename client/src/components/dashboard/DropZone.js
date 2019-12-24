import React, { useState } from 'react';
import { DropzoneDialog } from 'material-ui-dropzone';
import Button from '@material-ui/core/Button';
//importing firebase for storage
import { firebase } from '../../helpers/index';

const DropZone = props => {
  //state hooks
  const [isOpen, setIsOpen] = useState(false);
  const [files, setFiles] = useState('');

  const handleSave = file => {
    console.log(file[0]);
    //Saving files to state
    setFiles(file);
    //close modal after clicking save
    setIsOpen(false);

    //TODO:
    // 1. Implement firebase storage
    //initializing firebase
    // firebase();
  };

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>Upload Picture</Button>
      <DropzoneDialog
        open={isOpen}
        onSave={handleSave}
        acceptedFiles={['image/jpeg', 'image/png']}
        showPreviews={true}
        maxFileSize={5000000}
        onClose={() => setIsOpen(false)}
        file={files}
      />
    </div>
  );
};

export default DropZone;
