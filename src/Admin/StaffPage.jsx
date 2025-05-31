import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Layout = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  font-family: Arial, sans-serif;
  color: #333;
  background-color: #f5f7fb;
`;

const Sidebar = styled.aside`
  width: 220px;
  background-color: #fff;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

const SidebarLogo = styled.div`
  font-size: 20px;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 30px;
`;

const NavItem = styled.div`
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;

  &.active {
    background-color: #e0f0ff;
    color: #007bff;
    font-weight: 500;
  }

  &:hover:not(.active) {
    background-color: #f5f5f5;
  }
`;

const Main = styled.main`
  flex: 1;
  padding: 20px 30px;
  overflow-y: auto;
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

const PageTitle = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin: 0;
`;

const SearchBar = styled.div`
  position: relative;
  width: 300px;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 10px 15px;
  border-radius: 8px;
  border: none;
  background-color: #f0f2f5;
  font-size: 14px;

  &:focus {
    outline: none;
    background-color: #fff;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #666;
`;

const AddButton = styled.button`
  background-color: #4285f4;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px 16px;
  font-size: 14px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  &:hover {
    background-color: #3367d6;
  }
`;

const StaffTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  margin-top: 20px;
`;

const TableHead = styled.thead`
  background-color: #fff;

  th {
    text-align: left;
    padding: 16px;
    font-weight: 500;
    color: #333;
    border-bottom: 1px solid #eee;
  }
`;

const TableBody = styled.tbody`
  tr {
    border-bottom: 1px solid #f5f5f5;

    &:last-child {
      border-bottom: none;
    }

    td {
      padding: 16px;
    }
  }
`;

const StaffAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #e0e0e0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin-right: 10px;
`;

const StaffNameCell = styled.td`
  display: flex;
  align-items: center;
`;

const StatusBadge = styled.span`
  display: inline-flex;
  align-items: center;

  &::before {
    content: "";
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    margin-right: 6px;
    background-color: ${(props) => (props.active ? "#4CAF50" : "#9e9e9e")};
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${(props) => (props.show ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: white;
  border-radius: 12px;
  width: 500px;
  max-width: 90%;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  overflow: hidden;
`;

const ModalHeader = styled.div`
  padding: 20px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ModalTitle = styled.h2`
  margin: 0;
  font-size: 18px;
  font-weight: 600;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: #666;

  &:hover {
    color: #333;
  }
`;

const ModalBody = styled.div`
  padding: 20px;
`;

const FormGroup = styled.div`
  margin-bottom: 16px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  font-size: 14px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 14px;
  color: #333;
  &:focus {
    outline: none;
    border-color: #4285f4;
    box-shadow: 0 0 0 2px rgba(66, 133, 244, 0.2);
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 14px;
  background-color: white;
  color: #333;

  &:focus {
    outline: none;
    border-color: #4285f4;
    box-shadow: 0 0 0 2px rgba(66, 133, 244, 0.2);
  }
`;

const ModalFooter = styled.div`
  padding: 15px 20px;
  border-top: 1px solid #eee;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

const CancelButton = styled.button`
  background-color: #f5f5f5;
  color: #333;
  border: none;
  border-radius: 6px;
  padding: 10px 16px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: #e5e5e5;
  }
`;

const SaveButton = styled.button`
  background-color: #4285f4;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 10px 16px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: #3367d6;
  }
`;

export default function StaffPage() {
  const [staffData, setStaffData] = useState([
    {
      name: "Dr. Smith",
      avatar: "https://i.pravatar.cc/100?img=60",
      oracleNumber: "024356789",
      department: "Cardiology",
      role: "Attending",
      status: "Active",
    },
    {
      name: "Dr. Sarah Johnson",
      avatar: "https://i.pravatar.cc/100?img=32",
      oracleNumber: "024356789",
      department: "Neurology",
      role: "Resident",
      status: "Inactive",
    },
    {
      name: "Michael Brown",
      avatar: "https://i.pravatar.cc/100?img=68",
      oracleNumber: "024356789",
      department: "Radiology",
      role: "Nurse",
      status: "Active",
    },
    {
      name: "Jennifer Wilson",
      avatar: "https://i.pravatar.cc/100?img=47",
      oracleNumber: "024356789",
      department: "Pediatrics",
      role: "Nurse",
      status: "Active",
    },
    {
      name: "Emily Davis",
      avatar: "https://i.pravatar.cc/100?img=25",
      oracleNumber: "024356789",
      department: "Oncology",
      role: "Attending",
      status: "Active",
    },
  ]);
  const [showModal, setShowModal] = useState(false);
  const [newStaff, setNewStaff] = useState({
    name: "",
    oracleNumber: "",
    department: "",
    role: "",
    status: "Active",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewStaff({
      ...newStaff,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    // Create a new staff with random avatar
    const staffWithAvatar = {
      ...newStaff,
      avatar: `https://i.pravatar.cc/100?img=${Math.floor(Math.random() * 70)}`
    };
    
    // Update state with new staff member with random avatar
    setStaffData([...staffData, staffWithAvatar]);
    
    // Close modal and reset form
    setShowModal(false);
    setNewStaff({
      name: "",
      oracleNumber: "",
      department: "",
      role: "",
      status: "Active",
    });
  };

  return (
    <Layout>
      <Sidebar>
        <SidebarLogo>
          <span role="img" aria-label="hospital">
            🏥
          </span>{" "}
          Hospital
        </SidebarLogo>

        <nav>
          <NavItem>
            <span>🏠</span> Dashboard
          </NavItem>
          <NavItem className="active">
            <span>👥</span> Staff
          </NavItem>
          <NavItem>
            <span>📢</span> Announcements
          </NavItem>
          <NavItem>
            <span>📅</span> Leaves
          </NavItem>
          <NavItem>
            <span>📈</span> Reports
          </NavItem>
        </nav>
      </Sidebar>

      <Main>
        <TopBar>
          <PageTitle>Staff</PageTitle>
          <div style={{ display: "flex", gap: "16px" }}>
            <SearchBar>
              <SearchInput type="text" placeholder="Search staff..." />
            </SearchBar>
            <AddButton onClick={() => setShowModal(true)}>
              <span>+</span> Add Staff
            </AddButton>
          </div>
        </TopBar>

        <StaffTable>
          <TableHead>
            <tr>
              <th>Name</th>
              <th>Oracle Number</th>
              <th>Department</th>
              <th>Role</th>
              <th>Status</th>
              <th>Edit</th>
            </tr>
          </TableHead>
          <TableBody>
            {staffData.map((staff, idx) => (
              <tr key={idx}>
                <StaffNameCell>
                  <StaffAvatar>
                    <img
                      src={staff.avatar}
                      alt={staff.name}
                      width="40"
                      height="40"
                    />
                  </StaffAvatar>
                  {staff.name}
                </StaffNameCell>
                <td>{staff.oracleNumber}</td>
                <td>{staff.department}</td>
                <td>{staff.role}</td>
                <td>
                  <StatusBadge active={staff.status === "Active"}>
                    {staff.status}
                  </StatusBadge>
                </td>
              </tr>
            ))}
          </TableBody>
        </StaffTable>
      </Main>

      {/* Add Staff Modal */}
      <Modal show={showModal}>
        <ModalContent>
          <ModalHeader>
            <ModalTitle>Add New Staff</ModalTitle>
            <CloseButton onClick={() => setShowModal(false)}>
              &times;
            </CloseButton>
          </ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label htmlFor="name">Full Name</Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={newStaff.name}
                onChange={handleInputChange}
                placeholder="Enter full name"
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="oracleNumber">Oracle Number</Label>
              <Input
                style={{color: "#fff"}}
                type="text"
                id="oracleNumber"
                name="oracleNumber"
                value={newStaff.oracleNumber}
                onChange={handleInputChange}
                placeholder="Enter oracle number"
              />
              <div
                onClick={() => {
                  const oracleNumber = Math.floor(Math.random() * 1000000000)
                    .toString()
                    .padStart(9, "0");
                  setNewStaff((prev) => ({
                    ...prev,
                    oracleNumber,
                  }));
                }}
              >
                Generate Oracle Number
              </div>
            </FormGroup>
            <FormGroup>
              <Label htmlFor="department">Department</Label>
              <Select
                id="department"
                name="department"
                value={newStaff.department}
                onChange={handleInputChange}
              >
                <option value="">Select department</option>
                <option value="Cardiology">Cardiology</option>
                <option value="Neurology">Neurology</option>
                <option value="Radiology">Radiology</option>
                <option value="Pediatrics">Pediatrics</option>
                <option value="Oncology">Oncology</option>
              </Select>
            </FormGroup>
            <FormGroup>
              <Label htmlFor="role">Role</Label>
              <Select
                id="role"
                name="role"
                value={newStaff.role}
                onChange={handleInputChange}
              >
                <option value="">Select role</option>
                <option value="Attending">Attending</option>
                <option value="Resident">Resident</option>
                <option value="Nurse">Nurse</option>
              </Select>
            </FormGroup>
            <FormGroup>
              <Label htmlFor="status">Status</Label>
              <Select
                id="status"
                name="status"
                value={newStaff.status}
                onChange={handleInputChange}
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </Select>
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <CancelButton onClick={() => setShowModal(false)}>
              Cancel
            </CancelButton>
            <SaveButton onClick={handleSubmit}>Save</SaveButton>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Layout>
  );
}
