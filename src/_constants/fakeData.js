import { Row, Col, User, Text } from "@nextui-org/react";
import { BadgeInc } from "../components/inc/BadgeInc";

export const columns = [
  {
    name: "NAME",
    uid: "name",
    Render: ({ item, cellValue }) => (
      <User squared src={item.avatar} name={cellValue} css={{ p: 0 }}>
        {item.email}
      </User>
    )
  },
  {
    name: "ROLE",
    uid: "role",
    Render: ({ item, cellValue }) => (
      <Col>
        <Row>
          <Text b size={14} css={{ tt: "capitalize" }}>
            {cellValue}
          </Text>
        </Row>
        <Row>
          <Text b size={13} css={{ tt: "capitalize", color: "$accents7" }}>
            {item.team}
          </Text>
        </Row>
      </Col>
    )
  },
  {
    name: "STATUS",
    uid: "status",
    Render: ({ item, cellValue }) => (
      <BadgeInc type={item.status}>{cellValue}</BadgeInc>
    )
  },
  {
    name: "ACTIONS",
    uid: "actions"
  }
];

export const data = [
  {
    id: "1",
    name: "Tony Reichert",
    role: "CEO",
    team: "Management",
    status: "active",
    age: "29",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    email: "tony.reichert@example.com"
  },
  {
    id: "2",
    name: "Zoey Lang",
    role: "Technical Lead",
    team: "Development",
    status: "paused",
    age: "25",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    email: "zoey.lang@example.com"
  },
  {
    id: "3",
    name: "Jane Fisher",
    role: "Senior Developer",
    team: "Development",
    status: "active",
    age: "22",
    avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
    email: "jane.fisher@example.com"
  },
  {
    id: "4",
    name: "William Howard",
    role: "Community Manager",
    team: "Marketing",
    status: "vacation",
    age: "28",
    avatar: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
    email: "william.howard@example.com"
  },
  {
    id: "5",
    name: "Kristen Copper",
    role: "Sales Manager",
    team: "Sales",
    status: "active",
    age: "24",
    avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
    email: "kristen.cooper@example.com"
  },
  {
    id: "6",
    name: "Tony Reichert",
    role: "CEO",
    team: "Management",
    status: "active",
    age: "29",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    email: "tony.reichert@example.com"
  },
  {
    id: "7",
    name: "Zoey Lang",
    role: "Technical Lead",
    team: "Development",
    status: "paused",
    age: "25",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    email: "zoey.lang@example.com"
  },
  {
    id: "8",
    name: "Jane Fisher",
    role: "Senior Developer",
    team: "Development",
    status: "active",
    age: "22",
    avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
    email: "jane.fisher@example.com"
  },
  {
    id: "9",
    name: "William Howard",
    role: "Community Manager",
    team: "Marketing",
    status: "vacation",
    age: "28",
    avatar: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
    email: "william.howard@example.com"
  },
  {
    id: "10",
    name: "Kristen Copper",
    role: "Sales Manager",
    team: "Sales",
    status: "active",
    age: "24",
    avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
    email: "kristen.cooper@example.com"
  }
];
