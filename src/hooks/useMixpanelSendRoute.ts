/**
 * Mixpanel route tracker hook.
 */
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import mixpanel from "mixpanel-browser";

/**
 * This hook will send a page-loaded event to mixpanel when the route changes.
 * Call this hook at the top level of your app.
 */
const useMixpanelSendRoute = () => {
  const location = useLocation();
  useEffect(() => {
    mixpanel.track("page-loaded", { page: location.pathname });
  }, [location]);
};

export default useMixpanelSendRoute;
