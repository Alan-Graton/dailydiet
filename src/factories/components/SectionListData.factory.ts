import { IMealDTO } from "@/storage/config/MealDTO";

interface ISectionListData {
  title: string;
  data: IMealDTO[];
}

export function SectionListFactory(array: IMealDTO[]): ISectionListData[] {
  const reducePayload = array
    .reduce(
      (acc, cur) => {
        const hasSameTitle = acc.find((item) => item.title === cur.date);
        const isDuplicate = hasSameTitle?.data.find(
          (item) => item.id === cur.id
        );

        if (!hasSameTitle) {
          acc.push({ title: cur.date, data: [cur] });
        } else {
          if (!isDuplicate) {
            hasSameTitle.data.push(cur);
          }
        }

        return acc;
      },
      [{ title: "", data: [] } as ISectionListData]
    )
    .filter((el) => el.title);

  return reducePayload;
}
