"use client"

import { HTMLAttributes, ReactNode, useEffect, useState, FC } from "react";

interface PreloaderProps extends HTMLAttributes<HTMLDivElement> {
  page: ReactNode;
}

const Preloader: FC<PreloaderProps> = ({ page }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Wait for the page to fully load before hiding the preloader
    window.addEventListener("load", () => {
      const _timeout = setTimeout(() => setIsLoading(false), 4000)
      return () => clearTimeout(_timeout)
    });
  }, []);

  return (
    <div
      style={{
        backgroundColor: isLoading ? "#e8e7e8" : "",
        height: "screen",
        maxHeight: "100%",
        width: "screen",
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
