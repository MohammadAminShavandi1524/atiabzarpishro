import { Suspense } from "react";

import CataloguesPage from "@/components/catalogues/CataloguesPage";

const Page = () => {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-[600px] items-center justify-center">
          <span className="border-custom-primary size-5 animate-spin rounded-full border-2 border-t-transparent" />
        </div>
      }
    >
      <CataloguesPage />
    </Suspense>
  );
};

export default Page;
