import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";
import mixpanel from "mixpanel-browser";
import { TState, useAppDispatch } from "../store";
import { addAction } from "../store/actions";
import { addWithDelayThunk } from "../store/thunks";
import useMixpanelSendRoute from "../hooks/useMixpanelSendRoute";
import Page from "./Page";

function App() {
  useMixpanelSendRoute();
  const { count, addWithDelayPending } = useSelector((state: TState) => state);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const addCount = () => {
    mixpanel.track("add-count", { count });
    dispatch(addAction(2));
  };

  const addDelayedCount = () => {
    mixpanel.track("add-delayed-count", { count });
    dispatch(addWithDelayThunk(3));
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <h1>Vite + React + Redux + React Router</h1>
          <Routes>
            <Route path="/" element={<Page text="Home" />} />
            <Route path="page1" element={<Page text="Page 1" />} />
            <Route path="page2" element={<Page text="Page 2" />} />
          </Routes>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-12">
              <button className="btn btn-success" onClick={() => navigate("/")}>
                Home
              </button>
              <button
                className="btn btn-warning"
                onClick={() => navigate("/page1")}
              >
                Page 1
              </button>
              <button
                className="btn btn-danger"
                onClick={() => navigate("/page2")}
              >
                Page 2
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <button className="btn btn-primary" onClick={addCount}>
                count is {count}
              </button>
              <button
                className={`btn ${
                  addWithDelayPending ? "btn-danger" : "btn-primary"
                }`}
                onClick={addDelayedCount}
              >
                Delay count is {count}
              </button>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
