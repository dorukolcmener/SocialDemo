import { h } from "preact";
import { useState } from "preact/hooks";
import {
  Bell,
  Edit,
  Monitor,
  MessageCircle,
  BarChart2,
  Headphones,
} from "preact-feather";
import MenuItem from "./MenuItem";

export default function MenuItems() {
  const [notificationCount, setNotificationCount] = useState(29);

  return (
    <>
      <div className="menuitem">
        <Bell color="#f55661" />
        <span>
          Notifications
          <span className="notificationcount">{notificationCount}</span>
        </span>
      </div>
      <MenuItem Icon={Monitor} title="Summary" id="2">
        Summary
      </MenuItem>
      <MenuItem Icon={Edit} title="Publish" id="3" active={true}>
        <ul>
          <li>Compose</li>
          <li>Feed</li>
        </ul>
      </MenuItem>
      <MenuItem Icon={MessageCircle} title="Engage" id="4">
        Engage
      </MenuItem>
      <MenuItem Icon={Headphones} title="Listen" id="5" active={true}>
        Listen
      </MenuItem>
      <MenuItem Icon={BarChart2} title="Report" id="6">
        Report
      </MenuItem>
    </>
  );
}
