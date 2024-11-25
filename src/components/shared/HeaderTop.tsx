import GridLayout from "@shared/GridLayout";

import Logo from "images/stonePick.svg";

export default function HeaderTop() {
  return (
    <GridLayout additionalClass="border-b border-b-gray-300">
      <div className="col-start-2 w-full flex py-4 justify-between">
        <Logo width="8rem" height="3rem" />
        <div></div>
      </div>
    </GridLayout>
  );
}
