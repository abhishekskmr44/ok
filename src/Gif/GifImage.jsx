import React from "react";

function GifImage({ data }) {
  return (
    <>
      <div className="gifImg">
        <img src={data?.images?.original?.url} />
      </div>
    </>
  );
}

export default GifImage;