"use client";
import React, { useEffect, useState } from "react";

function Main({ children }: { children: React.ReactNode }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_NODE_ENV === "development") {
      return;
    }

    const disableRightClick = (e: MouseEvent) => e.preventDefault();
    document.addEventListener("contextmenu", disableRightClick);

    return () => {
      document.removeEventListener("contextmenu", disableRightClick);
    };
  }, []);

  useEffect(() => {
    const selectionCopy = (e: ClipboardEvent) => {
      e.clipboardData?.setData("text/plain", "THE TEA TIME SNACKS TAJA");
      e.preventDefault();
    };
    document.addEventListener("copy", selectionCopy);

    return () => {
      document.removeEventListener("copy", selectionCopy);
    };
  }, []);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return <div>{children}</div>;
}

export default Main;
