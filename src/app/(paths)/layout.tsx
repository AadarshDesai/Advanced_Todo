"use client"
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <div>
        <Header/>
          <PanelGroup direction="horizontal">
            <Panel defaultSize={20} minSize={18}>
              <Sidebar />
            </Panel>
            <PanelResizeHandle />
            <Panel defaultSize={80} minSize={70}>
              {children}
            </Panel>
        </PanelGroup>
    </div>
  );
}