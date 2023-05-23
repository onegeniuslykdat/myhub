import { GetSectionById } from "./sections";

let headingsList = [
  { id: 1, name: "Profile_Statement", sectionid: 1 },
  { id: 2, name: "About_Me", sectionid: 1 },
  { id: 3, name: "Profile_Statement", sectionid: 1 },
  { id: 4, name: "About_Me", sectionid: 1 },
  { id: 5, name: "Profile_Statement", sectionid: 1 },
  { id: 6, name: "About_Me", sectionid: 1 },
  { id: 7, name: "Profile_Statement", sectionid: 1 },
  { id: 8, name: "About_Me", sectionid: 1 },
  { id: 9, name: "Profile_Statement", sectionid: 1 },
  { id: 10, name: "About_Me", sectionid: 1 },
  { id: 11, name: "Profile_Statement", sectionid: 1 },
  { id: 12, name: "About_Me", sectionid: 1 },
];

export let GetAllHeadings = () => {
  let headings = [];
  headingsList.forEach((i) => {
    headings.push({
      id: i.id,
      name: i.name,
      sectionid: i.sectionid,
      sectionname: GetSectionById(i.sectionid)[0].name,
    });
  });
  return headings;
};
