import { Button } from "react-bootstrap";

export const SampleColms = [
  {
    label: "Name",
    field: "name",
    sort: "asc",
    width: 150,
  },
  {
    label: "Position",
    field: "position",
    sort: "asc",
    width: 270,
  },
  {
    label: "Office",
    field: "office",
    sort: "asc",
    width: 200,
  },
  {
    label: "Age",
    field: "age",
    sort: "asc",
    width: 100,
  },
  {
    label: "Start date",
    field: "date",
    sort: "asc",
    width: 150,
  },
  {
    label: "Salary",
    field: "salary",
    sort: "asc",
    width: 100,
  },
  {
    label: "Edit",
    field: "edit",
    sort: false,
    width: 100,
  },
];
export const Samplerows = [
  {
    name: "Tiger Nixon",
    position: "System Architect",
    office: "Edinburgh",
    age: "61",
    date: "2011/04/25",
    salary: "$320",
  },
  {
    name: "Yuri Berry",
    position: "Chief Marketing Officer (CMO)",
    office: "New York",
    age: "40",
    date: "2009/06/25",
    salary: "$675",
  },
  {
    name: "Caesar Vance",
    position: "Pre-Sales Support",
    office: "New York",
    age: "21",
    date: "2011/12/12",
    salary: "$106",
  },
  {
    name: "Doris Wilder",
    position: "Sales Assistant",
    office: "Sidney",
    age: "23",
    date: "2010/09/20",
    salary: "$85",
  },
  {
    name: "Angelica Ramos",
    position: "Chief Executive Officer (CEO)",
    office: "London",
    age: "47",
    date: "2009/10/09",
    salary: "$1",
  },
  {
    name: "Gavin Joyce",
    position: "Developer",
    office: "Edinburgh",
    age: "42",
    date: "2010/12/22",
    salary: "$92",
  },
  {
    name: "Jennifer Chang",
    position: "Regional Director",
    office: "Singapore",
    age: "28",
    date: "2010/11/14",
    salary: "$357",
  },
  {
    name: "Brenden Wagner",
    position: "Software Engineer",
    office: "San Francisco",
    age: "28",
    date: "2011/06/07",
    salary: "$206",
  },
  {
    name: "Fiona Green",
    position: "Chief Operating Officer (COO)",
    office: "San Francisco",
    age: "48",
    date: "2010/03/11",
    salary: "$850",
  },
  {
    name: "Shou Itou",
    position: "Regional Marketing",
    office: "Tokyo",
    age: "20",
    date: "2011/08/14",
    salary: "$163",
  },
  {
    name: "Michelle House",
    position: "Integration Specialist",
    office: "Sidney",
    age: "37",
    date: "2011/06/02",
    salary: "$95",
  },
  {
    name: "Suki Burks",
    position: "Developer",
    office: "London",
    age: "53",
    date: "2009/10/22",
    salary: "$114",
  },
  {
    name: "Prescott Bartlett",
    position: "Technical Author",
    office: "London",
    age: "27",
    date: "2011/05/07",
    salary: "$145",
  },
  {
    name: "Gavin Cortez",
    position: "Team Leader",
    office: "San Francisco",
    age: "22",
    date: "2008/10/26",
    salary: "$235",
  },

  {
    name: "Hermione Butler",
    position: "Regional Director",
    office: "London",
    age: "47",
    date: "2011/03/21",
    salary: "$356",
  },
  {
    name: "Lael Greer",
    position: "Systems Administrator",
    office: "London",
    age: "21",
    date: "2009/02/27",
    salary: "$103",
  },
  {
    name: "Jonas Alexander",
    position: "Developer",
    office: "San Francisco",
    age: "30",
    date: "2010/07/14",
    salary: "$86",
  },
  {
    name: "Shad Decker",
    position: "Regional Director",
    office: "Edinburgh",
    age: "51",
    date: "2008/11/13",
    salary: "$183",
  },
  {
    name: "Michael Bruce",
    position: "Javascript Developer",
    office: "Singapore",
    age: "29",
    date: "2011/06/27",
    salary: "$183",
  },
  {
    name: "Donna Snider",
    position: "Customer Support",
    office: "New York",
    age: "27",
    date: "2011/01/25",
    salary: "$112",
  },
].map((row,index) => {
    return {
      ...row,
      edit: (
          <Button outline size='sm' floating className='call-btn' onClick={() => console.log(`call ${index}`)}>Edit</Button>
      ),
    };
  });

export const workorderamendmentColms=[
    {
        label: "PlantProjectCode",
        field: "PlantProjectCode",
        sort: "asc",
        width: 150,
      },
      {
        label: "PSProjectCode",
        field: "PSProjectCode",
        sort: "asc",
        width: 150,
      },
      {
        label: "AmendmentNo",
        field: "AmendmentNo",
        sort: "asc",
        width: 150,
      },
      {
        label: "AmendmentDate",
        field: "AmendmentDate",
        sort: "asc",
        width: 150,
      },
      {
        label: "WorkOrderNo",
        field: "CONWorkOrderID.WorkOrderNo",
        sort: "asc",
        width: 150,
      },
      {
        label: "WorkOrderDate",
        field: "CONWorkOrderID.ContractorBPCode",
        sort: "asc",
        width: 150,
      },
      {
        label: "ContractorBPCode",
        field: "CONWorkOrderID.ContractorBPCode",
        sort: "asc",
        width: 150,
      },
      {
        label: "CurrencyCode_code",
        field: "CONWorkOrderID.CurrencyCode_code",
        sort: "asc",
        width: 150,
      },
];



export const FormatDataForTest = () => ({
  columns: SampleColms,
  rows: Samplerows,
});


export const FormatDataForTable = (colms,rows) => ({
    columns: colms,
    rows: rows,
  });
  