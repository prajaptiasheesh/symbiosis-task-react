import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'

function RenderFileInput({ input, label, type, meta: { touched, error } }) {

    const { onChange } = input;

    const onDrop = useCallback((acceptedFiles) => {
        acceptedFiles.forEach((file) => {
          const reader = new FileReader()
    
          reader.onabort = () => console.log('file reading was aborted')
          reader.onerror = () => console.log('file reading has failed')
          reader.onload = () => {
          // Do whatever you want with the file contents
            const base64Image = reader.result
            const { onChange } = input;

            onChange(base64Image);
          }
          reader.readAsDataURL(file)
        })
        
      }, [])


    const {getRootProps, getInputProps} = useDropzone({
                                                    onDrop,
                                                    accept: 'image/jpeg, image/png'
                                                })

    const { value, ...inputProps } = input;
    return <div {...getRootProps()} >
            <label>{label}</label>
            <div>
                <input 
                    {...inputProps} 
                    {...getInputProps()} 
                    placeholder={label} 
                />
                {value ? <div class="image-cropper">
                            <img src={value} alt="avatar" class="profile-pic" />
                        </div>  : null}
                {touched && error && <span>{error}</span>}
            </div>
        </div>
}

export default RenderFileInput
