let sectionsList = [
  { id: 1, name: "About" },
  { id: 2, name: "Education" },
  { id: 3, name: "Experience" },
];

export let GetAllSections = () => {
  let sections = [];
  sectionsList.forEach((i) => {
    sections.push({
      id: i.id,
      name: i.name,
    });
  });
  return sections;
};

export let GetSectionByName = (Name) => {
  return sectionsList.filter((i) => i.name === Name);
};

export let GetSectionById = (Id) => {
  return sectionsList.filter((i) => i.id === Id);
};
