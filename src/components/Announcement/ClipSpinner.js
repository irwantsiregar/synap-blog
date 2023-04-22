import ClipLoader from "react-spinners/ClipLoader";

export default function ClipSpinner() {
  return (
    <ClipLoader
      color="fefefe"
      loading
      size={25}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
}
