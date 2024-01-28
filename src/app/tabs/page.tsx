// App.tsx
"use client";
import React, { useState } from "react";
import Tab from "./Tab";

const App: React.FC = () => {
  const [value, setValue] = useState<any>(0);

  return (
    <div className="App">
      <Tab>
        <Tab.Heads>
          <Tab.Item
            label={"Tab1"}
            index={0}
            onChange={(newIndex: any) => setValue(newIndex)}
            value={value}
          />
          <Tab.Item
            label={"Tab2"}
            index={1}
            onChange={(newIndex: any) => setValue(newIndex)}
            value={value}
          />
          <Tab.Item
            label={"Tab3"}
            index={2}
            onChange={(newIndex: any) => setValue(newIndex)}
            value={value}
          />
          <Tab.Item
            label={"Tab4"}
            index={3}
            onChange={(newIndex: any) => setValue(newIndex)}
            value={value}
          />
        </Tab.Heads>
        <Tab.ContentWrapper index={0} value={value}>
          <h1>I am content 1</h1>
        </Tab.ContentWrapper>
        <Tab.ContentWrapper index={1} value={value}>
          <h1>I am content 2</h1>
        </Tab.ContentWrapper>
        <Tab.ContentWrapper index={2} value={value}>
          <h1>I am content 3</h1>
        </Tab.ContentWrapper>
        <Tab.ContentWrapper index={3} value={value}>
          <h1>I am content 4</h1>
        </Tab.ContentWrapper>
      </Tab>
    </div>
  );
};

export default App;
