import { Routes, Route } from "react-router-dom";
import "./App.css";
import { DragDropContext } from 'react-beautiful-dnd'

// Importing all the pages
import ManagementPage from './pages/management/managementpage'

function App() {

  return (
      <ManagementPage />
  );
}

export default App;
