"use client";

import { getLocalStorage, setLocalStorage } from "@/lib/storageHelper";
import { useState, useEffect } from "react";
import { KPButton, kpButtonVariants } from "@/ui/KPButton";

export default function CookieBanner() {
  const [cookieConsent, setCookieConsent] = useState<boolean>(false);

  useEffect(() => {
    const storedCookieConsent = getLocalStorage("cookie_consent", null);

    setCookieConsent(storedCookieConsent);
  }, [setCookieConsent]);

  useEffect(() => {
    const newValue = cookieConsent ? "granted" : "denied";

    window.gtag("consent", "update", {
      analytics_storage: newValue,
    });

    setLocalStorage("cookie_consent", cookieConsent);

    console.log("Cookie Consent: ", cookieConsent);
  }, [cookieConsent]);

  return (
    <div
      className={`my-3 mx-auto max-w-xs
                        fixed bottom-0 left-0 right-0 md:bottom-10 md:left-10 md:right-auto
                        ${
                          cookieConsent != null ? "hidden" : "flex"
                        } p-3 md:p-5 justify-between items-center flex-col gap-3  
                         bg-zinc-100 rounded-lg shadow z-[9999] border border-kp-red`}
    >
      <div className="text-center">
        <p className="text-zinc-900">
          We use <span className="font-bold text-kp-red">cookies</span> on our
          site.
        </p>
      </div>

      <div className="flex gap-2">
        <KPButton
          className={kpButtonVariants({ variant: "outline" })}
          onClick={() => setCookieConsent(false)}
        >
          Decline
        </KPButton>
        <KPButton
          className={kpButtonVariants({ variant: "outline" })}
          onClick={() => setCookieConsent(true)}
        >
          Allow Cookies
        </KPButton>
      </div>
    </div>
  );
}
