import GridLayout from "@shared/GridLayout";
import Tab from "@shared/Tab";

export default function Gnb() {
  const categories = [
    "전체",
    "판타지",
    "현판",
    "로맨스",
    "로판",
    "무협",
    "BL",
    "드라마",
  ];

  return (
    <GridLayout additionalClass="border-b border-b-gray-300">
      <div className="col-start-2 w-full flex h-16 items-center gap-4">
        {categories.map((category) => (
          <Tab
            key={`category-${category}`}
            text={category}
            to={`/${category}`}
          />
        ))}
      </div>
    </GridLayout>
  );
}
