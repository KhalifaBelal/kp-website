"use client";

import { HTMLAttributes, ReactNode, useEffect, useState, FC } from "react";

interface PreloaderProps extends HTMLAttributes<HTMLDivElement> {
  page: ReactNode;
}

const Preloader: FC<PreloaderProps> = ({ page }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const _timeout = setTimeout(() => {
      setIsLoading(false);
    }, 3500);
    return () => clearTimeout(_timeout);
  }, []);

  // useEffect(() => {
  //   setIsFirstLoad(isFirstLoad)
  //   const _timeout = setTimeout(() => {
  //     isFirstLoad !== true
  //       ? (setIsFirstLoad(false))
  //       : null;
  //   }, 3500);
  //   clearTimeout(_timeout);
  // });

  return (
    <div
      style={{
        backgroundColor: isLoading ? "#e8e7e8" : "",
        height: "100%",
        maxHeight: "100%",
        width: "100%",
        maxWidth: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {isLoading ? (
        <video
          src="/preloader.mp4"
          autoPlay
          muted
          typeof="video/mp4"
          controls={false}
          className="scale-[.8] mr-3 lg:scale-[.3] lg:mr-12"
        />
      ) : (
        <div>{page}</div>
      )}
    </div>
  );
};

export default Preloader;
