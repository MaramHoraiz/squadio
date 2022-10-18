export default function SelectedImages(props){
    const { selectedImg } = props;
    return (
      <div className=" selectedImage-container">
        <img className="img" src={selectedImg} alt="img" />
      </div>
    );
  };