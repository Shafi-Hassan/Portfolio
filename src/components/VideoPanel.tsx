import React from "react";

export const VideoPanel = (props: any) => {
  let data = props?.fields;
  let video = "https://" + data?.file?.url;
  return (
    <div className="w-full h-full py-20 px-10">
      <p className="text-gray-700 pb-4">(Demo Video -- No Audio)</p>
      <video controls>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPanel;
