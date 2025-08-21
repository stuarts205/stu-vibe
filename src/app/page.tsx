import React, { Suspense } from "react";
import { dehydrate, HydrationBoundary, useQuery } from "@tanstack/react-query";
import { getQueryClient, trpc } from "@/trpc/server";
import Client from "./client";

const Page = async () => {
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(trpc.create.queryOptions({ text: "Stuart PREFETCH" }));

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense fallback={<div>Loading...</div>}>
        <Client />
      </Suspense>
    </HydrationBoundary>
  );
};

export default Page;
