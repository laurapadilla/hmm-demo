const locations = [
  {
    location: "Application Service Center",
    about:
      "An ASC or Application Service Center is a place where PPG owned inventory is packaged and sometimes stored for multiple customers of FSLs. An ASC can also be used as a Facility and/or Building. Not all Facilities and Buildings are ASCs.",
    classname: "f5 pl4 lh-copy mb4",
    id: 1,
  },
  {
    location: "Forward Stocking Location",
    about:
      "An FSL or Forward Stocking Location is a standalone structure where PPG Inventory is stored for one or more customers. A FSL is considered to be a secondary PPG Warehouse and a place to store inventory before it gets to a customer. An FSL may or may not be at the customer site but normally located near a customer. An FSL is considered to be a Facility and or a Building. Not all Facilities or Buildings are FSL’s.",
    classname: "f5 pl4 lh-copy mb4",

    id: 2,
  },

  {
    location: "PPG Warehouse",
    about:
      "A PPG Warehouse, primary stocking location and is similar to an FSL is a standalone structure that stored PPG Inventory for one or more customers. A warehouse can be used as a Facility and or a Building. Not all Facilities or Buildings are Warehouses.",
    classname: "f5 pl4 lh-copy mb4",
    id: 3,
  },

  {
    location: "Other PPG Locations",
    about:
      "Other PPG Locations is a type that will be used as default location type when it falls in neither of the above types. This location will be recorded if its intended purposes may need to reach multiple customers.",
    classname: "f5 pl4 lh-copy mb4",

    id: 4,
  },
];

export default locations;
