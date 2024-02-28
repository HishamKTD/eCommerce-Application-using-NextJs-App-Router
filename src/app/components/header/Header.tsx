import Link from "next/link";
import Image from "next/image";
import logo from "../../asset/logo.png";
import "./header.css";
import Search from "./Search";
import NavBar from "./NavBar";

function Header() {
  return (
    <>
      <nav className="d-none d-sm-flex navbar navbar-expand bg-primary position-fixed w-100 top-0 z-2">
        <div className="container-fluid row ">
          <Link href={"/"} className={"navbar-brand col-2 "}>
            <Image src={logo} alt="logo" width={150} />
          </Link>
          <div className="col-6">
            <Search />
          </div>
          <div className="col-4">
            <NavBar />
          </div>
        </div>
      </nav>
      <nav
        className="navbar d-block d-sm-none bg-primary position-fixed top-0 z-2 pt-2 pb-2"
        style={{ width: "100vw" }}
      >
        <div className="container-fluid row m-0">
          <Link href={"/"} className={"navbar-brand m-0 p-0 col-auto"}>
            <Image src={logo} alt="logo" width={90} />
          </Link>
          <div className="col-9 p-0">
            <Search />
          </div>
        </div>
      </nav>
      <nav className="d-block d-sm-none position-sticky top-50 bg-primary z-3">
        <div className="col-4 bottom-0">
          <NavBar />
        </div>
      </nav>
    </>
  );
}

export default Header;
