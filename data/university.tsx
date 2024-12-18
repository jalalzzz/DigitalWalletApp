export interface UniversityData {
  id: string;
  type: 'university'; 
  subject: string;
  issue_date: string;
  issued_by: string;
  present?: boolean;
  title:string;
}

export const data:UniversityData[] =[
    {
      "id": "d1a5e6b9-c7f2-4f3b-8c4a-9e7d8f2e1a3c",
      "issue_date": "2020-06-15",
      "title": "Bachelor's Degree",
      "subject": "Computer Science",
      "issued_by": "University of Jordan",
      "present":false,
      "type":"university"
    },
    {
      "id": "e2c3a9b7-d4f5-491f-7e8b-6a3f2c1b7d9e",
      "issue_date": "2018-05-20",
      "title": "Master's Degree",
      "subject": "Software Engineering",
      "issued_by": "American University of Beirut",
      "present":false,
      "type":"university"
    },
    {
      "id": "a7d9f2e6-c3b8-4e5d-9f1a-2b4c8e7f3a9d",
      "issue_date": "2022-09-10",
      "title": "Diploma",
      "subject": "UI/UX Design",
      "issued_by": "Dubai Institute of Design and Innovation",
      "present":false,
      "type":"university"
    },
    {
      "id": "f3e6d1b7-c4a8-4f2b-7d9a-3e5b6f8c2a9d",
      "issue_date": "2017-11-12",
      "title": "Bachelor's Degree",
      "subject": "Information Technology",
      "issued_by": "King Saud University",
      "present":false,
      "type":"university"
    },
    {
      "id": "c9a8f2e1-b7d4-4c3b-8e5d-9f6a3d2f7b1e",
      "issue_date": "2019-07-01",
      "title": "Certificate",
      "subject": "Data Analysis",
      "issued_by": "Harvard Extension School",
      "present":false,
      "type":"university"
    },
    {
      "id": "b7d3e6c9-f5a4-4f9b-2a8e-3d1c9f7b5e6a",
      "issue_date": "2015-04-22",
      "title": "Master's Degree",
      "subject": "Cybersecurity",
      "issued_by": "Cairo University",
      "present":false,
      "type":"university"
    },
    {
      "id": "e8b7f3a9-c6d1-4f2e-5b9a-3c7f6d8a2b1e",
      "issue_date": "2023-03-18",
      "title": "Professional Certificate",
      "subject": "Cloud Computing",
      "issued_by": "MIT Professional Education",
      "present":false,
      "type":"university"
    },
    {
      "id": "d4b6e2f3-a8c9-4f7b-1e9a-5c3f9d7a6b2e",
      "issue_date": "2016-08-30",
      "title": "Bachelor's Degree",
      "subject": "Electrical Engineering",
      "issued_by": "University of Cairo",
      "present":false,
      "type":"university"
    },
    {
      "id": "f2e9b7c4-a3d1-4f8e-5d6a-9b7c3e1f2a6d",
      "issue_date": "2021-01-11",
      "title": "Diploma",
      "subject": "Artificial Intelligence",
      "issued_by": "Stanford Online",
      "present":false,
      "type":"university"
    },
    {
      "id": "a9f1d6b7-c8e3-4b2e-5f4a-7d9e3c2f8b6a",
      "issue_date": "2018-12-05",
      "title": "Master's Degree",
      "subject": "Business Administration",
      "issued_by": "London School of Economics",
      "present":false,
      "type":"university"
    }
  ]

  export const notUsed :UniversityData[]= [
    {
      id: '1a2b3c4d5e6f7g8h9i0j', // Unique Random ID
      type: 'university',
      issue_date: '2020-05-15',
      subject: 'Engineering',
      "title": "Master's Degree",
      issued_by: 'Jordanian Ministry of Education',
      present: false,
    },
    {
      id: '2b3c4d5e6f7g8h9i0j1a', // Unique Random ID
      type: 'university',
      issue_date: '2021-07-20',
      "title": "Bachelor's Degree",
      subject: 'Computer Science',
      issued_by: 'Jordanian Ministry of Education',
      present: true,
    },
    {
      id: '3c4d5e6f7g8h9i0j1a2b', // Unique Random ID
      type: 'university',
      issue_date: '2019-03-10',
      "title": "Master's Degree",
      subject: 'Biology',
      issued_by: 'Jordanian Ministry of Education',
      present: false,
    },
    {
      id: '4d5e6f7g8h9i0j1a2b3c', // Unique Random ID
      type: 'university',
      issue_date: '2022-11-22',
      "title": "Bachelor's Degree",
      subject: 'Physics',
      issued_by: 'Jordanian Ministry of Education',
      present: true,
    },
    {
      id: '5e6f7g8h9i0j1a2b3c4d', // Unique Random ID
      type: 'university',
      issue_date: '2023-01-14',
      "title": "Master's Degree",
      subject: 'Chemistry',
      issued_by: 'Jordanian Ministry of Education',
      present: false,
    },
  ];
