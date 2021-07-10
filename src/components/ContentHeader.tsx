import { h } from "preact";

export default function ContentHeader() {
  const statColors = {
    "Need Approval": "#f7bf38",
    Scheduled: "#3ac183",
    Publishing: "#acacac",
    Published: "#acacac",
    Error: "#fb6450",
    Notes: "#67b1f2",
  };

  return (
    <div>
      <div className="content--header">
        <div className="content--header--status">
          <div
            className="statcircle"
            style={{ backgroundColor: statColors.Published }}
          ></div>
          Published
        </div>
        <div className="content--header--status">
          <div
            className="statcircle"
            style={{ backgroundColor: statColors.Scheduled }}
          ></div>
          Scheduled
        </div>
        <div className="content--header--status">
          <div
            className="statcircle"
            style={{ backgroundColor: statColors["Need Approval"] }}
          ></div>
          Need Approval
        </div>
        <div className="content--header--status">
          <div
            className="statcircle"
            style={{ backgroundColor: statColors.Error }}
          ></div>
          Error
        </div>
        <div className="content--header--status">
          <div
            className="statcircle"
            style={{ backgroundColor: statColors.Notes }}
          ></div>
          Notes
        </div>
      </div>
    </div>
  );
}
