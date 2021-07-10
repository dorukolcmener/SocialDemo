import { h, FunctionComponent } from "preact";

const Brand: FunctionComponent<{ url: string; id: string; checked?: boolean }> =
  ({ url, id, checked }) => {
    return (
      <>
        <input type="radio" name="brand" id={id} checked={!!checked}></input>
        <label
          className="brand"
          for={id}
          style={{
            backgroundImage: `url("${url}")`,
          }}
        ></label>
      </>
    );
  };

export default Brand;
