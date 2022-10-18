export default function Images(props){
    const { images, selectImg, setSelectedImages } = props;
    return (
      <div className=" flex flex-wrap">
        {images.map((data, index) => {
          return (
            <img
              style={{
                height: selectImg === data.url.xs ? "119px" : "",
              }}
              className="mini-img"
              key={index}
              src={data.url.xs}
              alt="images"
              onClick={() => setSelectedImages(data)}
            />
          );
        })}
      </div>
    );
  };