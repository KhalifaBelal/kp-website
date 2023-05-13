"use client";

import { HTMLAttributes, ReactNode, useEffect, useState, FC } from "react";
import KPSection from "@/ui/KPSection";

interface PreloaderProps extends HTMLAttributes<HTMLDivElement> {
  page: ReactNode;
}

const Preloader: FC<PreloaderProps> = ({ page }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    const timeoutId = setTimeout(() => setIsLoading(false), 4000);
    return () => clearTimeout(timeoutId);
  }, [null]);
  return (
    <KPSection
      style={{
        backgroundColor: isLoading ? "#e8e7e8" : "",
        height: "screen",
        maxHeight: "100%",
      }}
    >
      {isLoading ? (
        <video
          src="/preloader.mp4"
          autoPlay
          muted
          typeof="video/mp4"
          controls={false}
          className="scale-[.8] mr-3 lg:scale-[.2] lg:mr-12"
        />
      ) : (
        <div>{page}</div>
      )}
    </KPSection>
  );
};

export default Preloader;
