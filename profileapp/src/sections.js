let sectionsList = [
  { id: 1, name: "About", title: "Anthony Udochukwu Onyekwere" },
  { id: 2, name: "Education", title: "My Education" },
  { id: 3, name: "Experience", title: "My Experience" },
  { id: 4, name: "Contact", title: "Get in touch" },
];

export let GetAllSections = () => {
  return sectionsList;
};

export let GetSectionByName = (Name) => {
  return sectionsList.filter((i) => i.name === Name);
};

export let GetSectionById = (Id) => {
  return sectionsList.filter((i) => i.id === Id);
};
