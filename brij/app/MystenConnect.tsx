"use client"
import React from 'react'
import "@mysten/dapp-kit/dist/index.css";
import { SuiClientProvider, WalletProvider } from "@mysten/dapp-kit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { networkConfig } from './networkConfig';

const queryClient = new QueryClient();




function MystenConnect({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <QueryClientProvider client={queryClient}>
    <SuiClientProvider networks={networkConfig} defaultNetwork="devnet">
      <WalletProvider autoConnect>
        {children}
      </WalletProvider>
    </SuiClientProvider>
  </QueryClientProvider>
  )
}

export default MystenConnect