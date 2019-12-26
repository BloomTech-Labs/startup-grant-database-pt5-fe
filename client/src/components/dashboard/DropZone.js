import React, { useState } from 'react';
import { DropzoneDialog } from 'material-ui-dropzone';
import Button from '@material-ui/core/Button';
const firebase = require('firebase/app');
require('firebase/storage');

const DropZone = props => {
  //state hooks
  const [isOpen, setIsOpen] = useState(false);
  const [files, setFiles] = useState('');

  const handleSave = data => {
    let file = data[0];
    let fileName = file.name;
    console.log(fileName);
    //Saving files to state
    setFiles(file);
    //close modal after clicking save
    setIsOpen(false);

    // 1. Create storage reference
    var storageRef = firebase.storage().ref(`avatars/${fileName}`);

    //2.Upload file to firebase
    var task = storageRef.put(file);

    //3.Update progress bar
    task.on('state_changed', function progress(snapshot) {
      //create percentage to set progress bar
      var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      // uploader.value = percentage
      console.log(percentage);
    });
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
