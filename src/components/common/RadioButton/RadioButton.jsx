
export default function RadioButton({ label, value, children }) {
    return (
      <button
        type="button"
        role="radio"
        aria-checked={"false"}
        tabIndex="-1"
        className="radio-group__button"
        data-label={label}
        data-value={value}
      >
        {children}
      </button>
    );
  }