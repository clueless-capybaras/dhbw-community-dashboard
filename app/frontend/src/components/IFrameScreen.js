function IFrameScreen(props) {
  return (
    <div className="iframe-screen">
      <iframe title={props.title} src={props.url} />
    </div>
  );
}
export default IFrameScreen;