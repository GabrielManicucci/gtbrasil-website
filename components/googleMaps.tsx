import React from "react";

type GoogleMapEmbedProps = {
  address: string;
  width?: string;
  height?: string;
};

const GoogleMapEmbed = ({
  address,
  width = "100%",
  height = "450px",
}: GoogleMapEmbedProps) => {
  const src = `https://www.google.com/maps?q=${encodeURIComponent(
    address
  )}&output=embed`;

  return (
    <iframe
      src={src}
      width={width}
      height={height}
      style={{ border: 0 }}
      loading="lazy"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
      className="rounded-2xl shadow-xl drop-shadow-sm"
    ></iframe>
  );
};

export default GoogleMapEmbed;
