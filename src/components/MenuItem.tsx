import { h } from "preact";

export default function MenuItem({
  children,
  Icon,
  title,
  id,
  active = false,
}) {
  return (
    <>
      <input type="checkbox" id={`accordion-${id}`} checked={active} />
      <label className="menuitem" for={`accordion-${id}`}>
        <Icon color="#f55661" />
        <span>{title}</span>
      </label>
      {children ? <div className="accordion">{children}</div> : null}
    </>
  );
}
