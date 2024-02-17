import React from "react";
import Link from "next/link";
import Image from "next/image"
import PrdGalleryImg01 from "../../asset/186x116_Home_furnishings.jpg";
import PrdGalleryImg02 from "../../asset/186x116_Home_decor.jpg";
import PrdGalleryImg03 from "../../asset/186x116_Home_storage.jpg";
import PrdGalleryImg04 from "../../asset/186x116_Home_lighting.jpg";

  

export default function ProductGallery() {
  return (
    <div>
      <div className="row mb-3">
        <div className="col-3 row m-0 ps-2 pe-2">
            <div className="bg-white pt-4 pb-4 shadow">
                <h5 className="col-12 fw-bold ps-2 mb-4">Revamp your home in style</h5>
                <div className="col-12 row m-0 mb-3">
                    <div className="col-6 row m-0">
                        <Image src={PrdGalleryImg01} className="p-0" alt={"Cushion covers, bedsheets & more"} />
                        <span className="p-0" style={{fontSize: "12px"}}>Cushion covers, bedsheets & more</span>
                    </div>
                    <div className="col-6 row m-0">
                        <Image src={PrdGalleryImg02} className="p-0" alt={"Figurines, vases and more"} />
                        <span  className="p-0" style={{fontSize: "12px"}}>Figurines, vases and more</span>
                    </div>
                </div>
                <div className="col-12 row m-0 mb-2">
                    <div className="col-6 row m-0">
                        <Image src={PrdGalleryImg03} className="p-0" alt={"Home storage"} />
                        <span  className="p-0" style={{fontSize: "12px"}}>Home storage</span>
                    </div>
                    <div className="col-6 row m-0">
                        <Image src={PrdGalleryImg04} className="p-0" alt={"Lighting solutions"} />
                        <span  className="p-0" style={{fontSize: "12px"}}>Lighting solutions</span>
                    </div>
                </div>
                <Link className="ms-3" style={{fontSize: "14px"}} href={"/"}>Explore all</Link>
            </div>
        </div>
        <div className="col-3 row m-0 ps-2 pe-2">
            <div className="bg-white pt-4 pb-4 shadow">
                <h5 className="col-12 fw-bold ps-2 mb-4">Revamp your home in style</h5>
                <div className="col-12 row m-0 mb-3">
                    <div className="col-6 row m-0">
                        <Image src={PrdGalleryImg01} className="p-0" alt={"Cushion covers, bedsheets & more"} />
                        <span className="p-0" style={{fontSize: "12px"}}>Cushion covers, bedsheets & more</span>
                    </div>
                    <div className="col-6 row m-0">
                        <Image src={PrdGalleryImg02} className="p-0" alt={"Figurines, vases and more"} />
                        <span  className="p-0" style={{fontSize: "12px"}}>Figurines, vases and more</span>
                    </div>
                </div>
                <div className="col-12 row m-0 mb-2">
                    <div className="col-6 row m-0">
                        <Image src={PrdGalleryImg03} className="p-0" alt={"Home storage"} />
                        <span  className="p-0" style={{fontSize: "12px"}}>Home storage</span>
                    </div>
                    <div className="col-6 row m-0">
                        <Image src={PrdGalleryImg04} className="p-0" alt={"Lighting solutions"} />
                        <span  className="p-0" style={{fontSize: "12px"}}>Lighting solutions</span>
                    </div>
                </div>
                <Link className="ms-3" style={{fontSize: "14px"}} href={"/"}>Explore all</Link>
            </div>
        </div>
        <div className="col-3 row m-0 ps-2 pe-2">
            <div className="bg-white p-1 pt-4 pb-4 shadow">
                <h5 className="col-12 fw-bold ps-2 mb-4">Revamp your home in style</h5>
                <div className="col-12 row m-0 mb-3">
                    <div className="col-6 row m-0">
                        <Image src={PrdGalleryImg01} className="p-0" alt={"Cushion covers, bedsheets & more"} />
                        <span className="p-0" style={{fontSize: "12px"}}>Cushion covers, bedsheets & more</span>
                    </div>
                    <div className="col-6 row m-0">
                        <Image src={PrdGalleryImg02} className="p-0" alt={"Figurines, vases and more"} />
                        <span  className="p-0" style={{fontSize: "12px"}}>Figurines, vases and more</span>
                    </div>
                </div>
                <div className="col-12 row m-0 mb-2">
                    <div className="col-6 row m-0">
                        <Image src={PrdGalleryImg03} className="p-0" alt={"Home storage"} />
                        <span  className="p-0" style={{fontSize: "12px"}}>Home storage</span>
                    </div>
                    <div className="col-6 row m-0">
                        <Image src={PrdGalleryImg04} className="p-0" alt={"Lighting solutions"} />
                        <span  className="p-0" style={{fontSize: "12px"}}>Lighting solutions</span>
                    </div>
                </div>
                <Link className="ms-3" style={{fontSize: "14px"}} href={"/"}>Explore all</Link>
            </div>
        </div>
        <div className="col-3 row m-0 ps-2 pe-2">
            <div className="bg-white p-1 pt-4 pb-4 shadow">
                <h5 className="col-12 fw-bold ps-2 mb-4">Revamp your home in style</h5>
                <div className="col-12 row m-0 mb-3">
                    <div className="col-6 row m-0">
                        <Image src={PrdGalleryImg01} className="p-0" alt={"Cushion covers, bedsheets & more"} />
                        <span className="p-0" style={{fontSize: "12px"}}>Cushion covers, bedsheets & more</span>
                    </div>
                    <div className="col-6 row m-0">
                        <Image src={PrdGalleryImg02} className="p-0" alt={"Figurines, vases and more"} />
                        <span  className="p-0" style={{fontSize: "12px"}}>Figurines, vases and more</span>
                    </div>
                </div>
                <div className="col-12 row m-0 mb-2">
                    <div className="col-6 row m-0">
                        <Image src={PrdGalleryImg03} className="p-0" alt={"Home storage"} />
                        <span  className="p-0" style={{fontSize: "12px"}}>Home storage</span>
                    </div>
                    <div className="col-6 row m-0">
                        <Image src={PrdGalleryImg04} className="p-0" alt={"Lighting solutions"} />
                        <span  className="p-0" style={{fontSize: "12px"}}>Lighting solutions</span>
                    </div>
                </div>
                <Link className="ms-3" style={{fontSize: "14px"}} href={"/"}>Explore all</Link>
            </div>
        </div>
      </div>
    </div>
  );
}
