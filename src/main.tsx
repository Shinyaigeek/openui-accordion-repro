import { Renderer } from "@openuidev/react-lang";
import { openuiLibrary } from "@openuidev/react-ui/genui-lib";
import { createRoot } from "react-dom/client";
import "@openuidev/react-ui/styles/index.css";

// A static (non-streaming) response with three accordion sections.
// Expected: the FIRST section ("Apple") is open on mount (or none).
// Actual:   the LAST section ("Cherry") is open on mount.
const PROGRAM = `root = Accordion([i1, i2, i3])
i1 = AccordionItem("a", "Apple", [c1])
i2 = AccordionItem("b", "Banana", [c2])
i3 = AccordionItem("c", "Cherry", [c3])
c1 = TextContent("Apple section content")
c2 = TextContent("Banana section content")
c3 = TextContent("Cherry section content")`;

function App() {
  return (
    <div className="wrap">
      <div className="panel">
        <h2>OpenUI Accordion: last item is opened on initial mount</h2>
        <p>
          Expected: <strong>Apple</strong> (first section) open, or all closed. Actual:{" "}
          <strong>Cherry</strong> (last section) open.
        </p>
        <pre className="program">{PROGRAM}</pre>
        <Renderer response={PROGRAM} library={openuiLibrary} />
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")!).render(<App />);
