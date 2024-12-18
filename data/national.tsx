export interface NationalData {
  id: string;
  type: 'national'; 
  name: string;
  date_of_issue: string;
  date_of_birth: string;
  issued_at: string;
  subject: string;
  present?: boolean;
}

export const data:NationalData[] =[
    {
      "id": "c7d8f2a3-45e6-401a-bcfd-78a9b3d5e1c2",
      "name": "Jalal Istaiti",
      "date_of_issue": "2024-12-01",
      "date_of_birth": "1988-05-10",
      "subject": "Front-End Development",
      "issued_at": "Amman, Jordan",
      "present":false,
      "type":"national"
    },
    {
      "id": "a9f5b4e2-9d3c-4e7b-bf9a-6d6eaa9278b8",
      "name": "Sarah Khalil",
      "date_of_issue": "2023-06-15",
      "date_of_birth": "1990-08-22",
      "subject": "Software Engineering",
      "issued_at": "Dubai, UAE",
      "present":false,
      "type":"national"
    },
    {
      "id": "f3e2c1b5-d7a4-426c-82b1-5fcb7d489f7a",
      "name": "Ahmad Mansour",
      "date_of_issue": "2022-11-20",
      "date_of_birth": "1985-02-14",
      "subject": "Mobile App Development",
      "issued_at": "Riyadh, Saudi Arabia",
      "present":false,
      "type":"national"
    },
    {
      "id": "b8a5d9c4-e3f1-4b7d-87f5-4d9c8ea1f7a2",
      "name": "Noor Al-Masri",
      "date_of_issue": "2021-09-05",
      "date_of_birth": "1993-12-30",
      "subject": "UI/UX Design",
      "issued_at": "Beirut, Lebanon",
      "present":false,
      "type":"national"
    },
    {
      "id": "d9b4e6f2-c3a8-491f-b7d4-a9e3f4c1b7a8",
      "name": "Layla Othman",
      "date_of_issue": "2023-03-12",
      "date_of_birth": "1987-07-18",
      "subject": "Cloud Architecture",
      "issued_at": "Doha, Qatar",
      "present":false,
      "type":"national"
    },
    {
      "id": "a3d8f2b7-4e9c-4c5d-9a8b-3f7d6e1c2a9f",
      "name": "Omar Habib",
      "date_of_issue": "2020-01-25",
      "date_of_birth": "1995-09-09",
      "subject": "Cybersecurity",
      "issued_at": "Cairo, Egypt",
      "present":false,
      "type":"national"
    },
    {
      "id": "c5b7d9a8-f2e1-4f3b-a4d9-8c7a5e6f2b9c",
      "name": "Hala Shami",
      "date_of_issue": "2024-07-11",
      "date_of_birth": "1992-04-07",
      "subject": "Data Analysis",
      "issued_at": "Manama, Bahrain",
      "present":false,
      "type":"national"
    },
    {
      "id": "e9a8c7f2-b6d1-4f5e-9c4a-7b3d8f1e2c5a",
      "name": "Tareq Zaid",
      "date_of_issue": "2019-12-30",
      "date_of_birth": "1986-03-03",
      "subject": "Backend Development",
      "issued_at": "Jeddah, Saudi Arabia",
      "present":false,
      "type":"national"
    },
    {
      "id": "b7c5a9d8-f3e2-4f9c-a6e1-2d7a8f9b3c4e",
      "name": "Rami Awad",
      "date_of_issue": "2023-08-21",
      "date_of_birth": "1991-06-15",
      "subject": "Project Management",
      "issued_at": "Muscat, Oman",
      "present":false,
      "type":"national"
    },
    {
      "id": "f1e2b3c5-a9d7-4c8e-7f4a-3b9d6f7e1a2c",
      "name": "Yasmeen Hasan",
      "date_of_issue": "2022-05-17",
      "date_of_birth": "1994-10-01",
      "subject": "Quality Assurance",
      "issued_at": "Kuwait City, Kuwait",
      "present":false,
      "type":"national"
    }
  ]
  export const notUsed:NationalData[] = [
    {
      id: '6f7g8h9i0j1a2b3c4d5e', // Unique Random ID
      type: 'national',
      name: 'John Doe',
      date_of_issue: '2018-06-05',
      date_of_birth: '1995-04-12',
      subject: 'Computer Engineering',
      issued_at: 'national of Jordan',
      present: true,
    },
    {
      id: '7g8h9i0j1a2b3c4d5e6f', // Unique Random ID
      type: 'national',
      name: 'Jane Smith',
      date_of_issue: '2017-08-19',
      date_of_birth: '1994-11-22',
      subject: 'Mechanical Engineering',
      issued_at: 'Jordan ',
      present: false,
    },
    {
      id: '8h9i0j1a2b3c4d5e6f7g', // Unique Random ID
      type: 'national',
      name: 'Michael Johnson',
      date_of_issue: '2020-12-25',
      date_of_birth: '1996-02-18',
      subject: 'Electrical Engineering',
      issued_at: 'Petra',
      present: true,
    },
    {
      id: '9i0j1a2b3c4d5e6f7g8h', // Unique Random ID
      type: 'national',
      name: 'Emily Davis',
      date_of_issue: '2019-05-10',
      date_of_birth: '1997-01-23',
      subject: 'Civil Engineering',
      issued_at: 'Al-Balqa',
      present: false,
    },
    {
      id: '0j1a2b3c4d5e6f7g8h9i', // Unique Random ID
      type: 'national',
      name: 'Chris Lee',
      date_of_issue: '2021-02-17',
      date_of_birth: '1998-09-15',
      subject: 'Software Engineering',
      issued_at: 'German',
      present: true,
    },
  ];