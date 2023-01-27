import * as components from "./components";
import { App } from "vue";

// Import the tailwind css
import "./style.css";

const componentsList = components?.default;

const UIComponentLib = {
  install(app: App) {
    Object.values(componentsList).forEach((component) => {
      app.component(component.name, component);
    });
  },
};

export default UIComponentLib;
