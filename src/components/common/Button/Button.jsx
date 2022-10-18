
export default function Button({ label, value, classes = "" }) {
    return (
      <button
        type="button"
        tabIndex="-1"
        className={`btn ${classes}`}
        data-label={label}
        data-value={value}
      >
       {value} 
      </button>
    );
  }