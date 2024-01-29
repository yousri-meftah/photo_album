"use client"
import { Button } from '@/components/ui/button';
import { CldUploadButton,CldImage ,CldUploadWidget} from 'next-cloudinary';

import React, { useState } from 'react';

type apitype = {
    info: {
      asset_id: string,
      public_id: string,
    },
    event: string
  }
function Gallery() {

    const [imageId, setImageId] = useState("lelh9jb2xxvwtmqva8ui");

    const handleUpload = (id: string) => {
      setImageId(id);
    };
  return (
    <>  
    <div className="flex space-x-0">
        <h1>gallery</h1>
        <Button asChild>
            <CldUploadButton
            uploadPreset="yousri_preset"
            onUpload={(res:apitype) => setImageId(res.info.public_id)} 
            />
        </Button>
    </div>
       <CldImage
        width="960"
        height="600"
        src={imageId}
        sizes="100vw"
        
        alt="wwhere"
      />
      </>
    
  )
}

export default Gallery