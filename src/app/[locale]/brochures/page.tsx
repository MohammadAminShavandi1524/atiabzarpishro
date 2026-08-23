import { Suspense } from "react";

import BrochuresPage from "@/components/brochures/BrochuresPage";

const Page = () => {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-[600px] items-center justify-center">
          <span className="border-custom-primary size-5 animate-spin rounded-full border-2 border-t-transparent" />
        </div>
      }
    >
      <BrochuresPage />
    </Suspense>
  );
};

export default Page;