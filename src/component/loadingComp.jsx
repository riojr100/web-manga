export default function loadingComp() {
  return (
    <img
      src={require("../gambar/loading.gif")}
      style={{ width: 50, height: 50 }}
      alt="Loading Data..."
    />
  );
}
