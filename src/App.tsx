import { useState } from "react";
import "./App.css";
import { Badge } from "./components/ui/badge";
import ExtensionList from "./ExtensionList";
import ThemeToggle from "./components/Header";

function App() {
  const [filter, setFilter] = useState<"all" | "active" | "inactive">("all");
  const handleBadgeClick = (filterValue: "all" | "active" | "inactive") => {
    setFilter(filterValue);
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 dark:bg-gray-950">
        <div className="w-full max-w-6xl">
      <ThemeToggle/>
          <div className="flex justify-between">
            <div>
              <h1 className="text-2xl font-bold mb-6 text-left">
                Extensions List
              </h1>
            </div>
            <div>
              <Badge
                variant={filter === "all" ? "default" : "secondary"}
                className="text-md rounded-2xl px-3 py-1 hover:bg-gray-600
                "
                onClick={() => handleBadgeClick("all")}
              >
                All
              </Badge>
              <Badge
                variant={filter === "active" ? "default" : "secondary"}
                className="text-md rounded-2xl px-3 py-1 mx-2 hover:bg-gray-600"
                onClick={() => handleBadgeClick("active")}
              >
                Active
              </Badge>
              <Badge
                variant={filter === "inactive" ? "default" : "secondary"}
                className="text-md rounded-2xl px-3 py-1 hover:bg-gray-600"
                onClick={() => handleBadgeClick("inactive")}
              >
                Inactive
              </Badge>
            </div>
          </div>
          <ExtensionList filter={filter} />
        </div>
      </div>
    </>
  );
}

export default App;
