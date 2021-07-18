import React, {useState, useEffect} from "react";


const Thumbnail = ({key, file}) => {
    const [loading, setLoading] = useState(false)
    const [thumb, setThumb] = useState("")

    useEffect(() => {
        setLoading(true)
        let reader = new FileReader();
        reader.onloadend = () => {
           setLoading(false)
           setThumb(reader.result)
          };
    
          reader.readAsDataURL(file);
    }, [file])


    return(
        file !==null &&
            loading ? 
            <p>Loading</p>
            :
            <img src={thumb}
      alt={file.name}
      className="img-thumbnail mt-2"
      height={200}
      width={200} />

    )
}

export default Thumbnail