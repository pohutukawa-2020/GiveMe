import React, { useState } from 'react'
require('regenerator-runtime/runtime')

function ImageUpload (props) {
  const [photo, setImage] = useState('')
  const [loading, setLoading] = useState(false)

  const uploadImage = async e => {
    const files = e.target.files
    const data = new FormData()
    data.append('file', files[0])
    data.append('upload_preset', 'GiveMe')
    setLoading(true)
    const res = await fetch(
      'https://api.cloudinary.com/v1_1/djogj7231/image/upload',
      {
        method: 'POST',
        body: data
      }
    )
    const file = await res.json()

    setImage(file.secure_url)
    props.onChange(file.secure_url)
    setLoading(false)
  }

  return (
    <div className='ImageUpload'>
      <input type='file' name='file' placeholder='Upload an Image' onChange={uploadImage}/>
      {loading ? (
        <h6>Loading...</h6>
      ) : (
        <img src={photo} style={{ width: '300px' }} />
      )}
    </div>
  )
}

export default ImageUpload
