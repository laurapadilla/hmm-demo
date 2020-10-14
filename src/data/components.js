import locations from "../data/locations";

const components = [
  {
    component: "PPG Locations",
    description:
      "A PPG Location is considered to be several different types of locations that can be shared throughout any customers. These locations may include an ASC – Application Service Center, FSL – Forward Stocking Location, PPG Warehouse, or Other Location that is not within those categories but needs to be captured throughout HMM.",
    locations,
    classname: "f5 w-70 lh-copy mb4",
    id: 1,
  },
  {
    component: "Enterprise",
    description:
      "An enterprise is the top tier grouping of one or more Customer Instances. An enterprise will display a general template of service level configurations that can be overridden at the customer level.",
    classname: "f5 w-70 lh-copy mb4",
    id: 2,
  },

  {
    component: "Service Levels",
    description:
      "Service Levels are various customizations that are defined at the enterprise level but can be overridden at the customer level. Enterprises can have one or more Service Levels.",
    classname: "f5 w-70 lh-copy mb4",
    id: 3,
  },

  {
    component: "Business Units",
    description:
      "A Business Unit or BU is a sub component of an Enterprise. Business Units give users the ability to group Customers into different sub groups within an Enterprise.",
    classname: "f5 w-70 lh-copy mb4",
    id: 4,
  },
];

export default components;
