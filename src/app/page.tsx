"use client"
import Header from "@/components/Header";
import MainComponent from "@/components/MainComponent";
import Sidebar from "@/components/Sidebar";
import { useState } from "react";
import { PanelGroup, Panel, PanelResizeHandle } from "react-resizable-panels";

//Add drag and drop feature as well.

export default function Home() {
  const [selectedOption, setSelectedOption] = useState("My Day");

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
  }

  return (
    <main>
      <Header/>
      <PanelGroup direction="horizontal">
        <Panel defaultSize={20} minSize={18}>
          <Sidebar />
        </Panel>
        <PanelResizeHandle />
        <Panel defaultSize={80} minSize={70}>
          <MainComponent />
        </Panel>
      </PanelGroup>
    </main>
  );
}
