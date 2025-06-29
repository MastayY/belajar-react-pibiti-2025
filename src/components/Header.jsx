import Button from "./Button";

function Header(props) {
  // 'props' adalah objek yang berisi semua data yang dikirim
  const { title, description } = props;
  return (
    <header>
      {/* Tampilkan data dari props.title */}
      <h1>ini adalah title {title}</h1>
      <p>{description}</p>
      <Button text="Button Header" />
    </header>
  );
}

export default Header;
