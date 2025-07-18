"use client"
import Header from "@/components/Header";
import MainComponent from "@/components/MainComponent";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import Sidebar from "@/components/Sidebar";

//Add drag and drop feature as well.

export default function Home() {
  return (
    <main>
      <Header />
      {/* <div className="grid grid-cols-[350px_1fr] gap-4 ">
        <Sidebar />
        <MainComponent />
      </div> */}

      <PanelGroup direction="horizontal">
        <Panel defaultSize={20} minSize={18}>
          <Sidebar/>
        </Panel>
        <PanelResizeHandle/>
        <Panel defaultSize={80} minSize={72}>
          <MainComponent />
        </Panel>
      </PanelGroup>
    </main>
  );
}
