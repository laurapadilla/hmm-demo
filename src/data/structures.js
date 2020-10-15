const structures = [
  {
    structure: "Facility",
    about:
      "A facility within HMM is the first structure level after the customer instance has been defined. A facility may represent customer and/or PPG Locations. A customer instance may have one or more facilities. A Facility can be an already pre-defined PPG Location or another customer specified location altogether.",
    classname: "f5 w-60-l w-100 lh-copy mb4",
    id: 1,
  },
  {
    structure: "Building",
    about:
      "A Building indicates a physical location within a facility or a virtual space assigned to a Facility.",
    classname: "f5 w-60-l w-100 lh-copy mb4",

    id: 2,
  },

  {
    structure: "Shop",
    about:
      "A shop is a location big or small within a building of a given customer.",
    classname: "f5 w-60-l w-100 lh-copy mb4",
    id: 3,
  },

  {
    structure: "Bin/Cabinet",
    about:
      "A Bin/Cabinet also referred to in this document as just a Bin is a specific location or virtual location within a Shop. The Bin holds the actual inventory assigned to a Customer Instance. A Bin can be a physical location or a virtual location.",
    classname: "f5 w-60-l w-100 lh-copy",

    id: 4,
  },
];

export default structures;
