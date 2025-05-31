import React from "react";
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

const UserSection = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #e0e0e0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 30px;
`;

const StatCard = styled.div`
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 15px;
`;

const StatIcon = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.bgColor || '#e0f0ff'};
  color: ${props => props.iconColor || '#007bff'};
  font-size: 24px;
`;

const StatContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const StatValue = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;

const StatLabel = styled.div`
  font-size: 14px;
  color: #666;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;

const Card = styled.div`
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  overflow: hidden;
`;

const CardHeader = styled.div`
  padding: 20px;
  border-bottom: 1px solid #f0f0f0;
`;

const CardTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  margin: 0;
`;

const CardContent = styled.div`
  padding: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
`;

const TableHead = styled.thead`
  border-bottom: 1px solid #eee;
  
  th {
    text-align: left;
    padding: 10px 5px;
    font-weight: 500;
    color: #666;
  }
`;

const TableBody = styled.tbody`
  tr {
    border-bottom: 1px solid #f5f5f5;
    
    &:last-child {
      border-bottom: none;
    }
    
    td {
      padding: 12px 5px;
    }
  }
`;

const AnnouncementList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`;

const AnnouncementItem = styled.li`
  display: flex;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid #f5f5f5;
  
  &:last-child {
    border-bottom: none;
  }
`;

const AnnouncementIcon = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 8px;
  background-color: ${props => props.bgColor || '#e0f0ff'};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  color: ${props => props.iconColor || '#007bff'};
`;

const AnnouncementContent = styled.div`
  flex: 1;
`;

const AnnouncementTitle = styled.div`
  font-weight: 500;
`;

const AnnouncementTime = styled.div`
  font-size: 12px;
  color: #888;
`;

export default function AdminDashboard() {
  // Sample data
  const staffData = [
    { name: "Dr. John Smith", oracleNumber: "024356789", department: "Cardiology", role: "Attendant" },
    { name: "Dr. Sarah Johnson", oracleNumber: "024356789", department: "Neurology", role: "Resident" },
    { name: "Michael Brown", oracleNumber: "024356789", department: "Radiology", role: "Nurse" },
    { name: "Jennifer Wilson", oracleNumber: "024356789", department: "Pediatrics", role: "Nurse" },
    { name: "Emily Davis", oracleNumber: "024356789", department: "Oncology", role: "Attendant" }
  ];

  const announcements = [
    { title: "New COVID-19 Protocols", time: "1 hour ago", icon: "📋", color: "#e0f0ff" },
    { title: "Emergency Preparedness Drill", time: "3 hours ago", icon: "🚨", color: "#ffe0e0" }
  ];

  return (
    <Layout>
      <Sidebar>
        <SidebarLogo>
          <span role="img" aria-label="hospital">🏥</span> Hospital
        </SidebarLogo>
        
        <nav>
          <Link to="/" style={{ 'textDecoration': 'none', 'color': 'black' }}>
            <NavItem className="active">
            <span>📊</span> Dashboard
          </NavItem>
          </Link>
          
          <Link to="/staff" style={{ 'textDecoration': 'none', 'color': 'black' }}>
            <NavItem>
              <span>👥</span> Staff
            </NavItem>
          </Link>
          <NavItem>
            <span>📢</span> Announcements
          </NavItem>
          <NavItem>
            <span>📅</span> Leaves
          </NavItem>
          <NavItem>
            <span>📈</span> Reports
          </NavItem>
          <NavItem>
            <span>🔢</span> Oracle Number
          </NavItem>
        </nav>
      </Sidebar>

      <Main>
        <TopBar>
          <PageTitle>Admin Dashboard</PageTitle>
          <UserSection>
            <span role="img" aria-label="notifications">🔔</span>
            <Avatar>
              <img src="https://i.pravatar.cc/100?img=32" alt="User" />
            </Avatar>
          </UserSection>
        </TopBar>

        <StatsGrid>
          <StatCard>
            <StatIcon bgColor="#e0f0ff" iconColor="#007bff">👥</StatIcon>
            <StatContent>
              <StatValue>275</StatValue>
              <StatLabel>Total Staff</StatLabel>
            </StatContent>
          </StatCard>
          
          <StatCard>
            <StatIcon bgColor="#e0f5ff" iconColor="#00a0bc">⏱️</StatIcon>
            <StatContent>
              <StatValue>12</StatValue>
              <StatLabel>Pending Retirements</StatLabel>
            </StatContent>
          </StatCard>
          
          <StatCard>
            <StatIcon bgColor="#e5f8f0" iconColor="#00b07a">📅</StatIcon>
            <StatContent>
              <StatValue>9</StatValue>
              <StatLabel>Leave Requests</StatLabel>
            </StatContent>
          </StatCard>
          
          <StatCard>
            <StatIcon bgColor="#fff0e0" iconColor="#ff9500">📢</StatIcon>
            <StatContent>
              <StatValue>4</StatValue>
              <StatLabel>Recent Announcements</StatLabel>
            </StatContent>
          </StatCard>
        </StatsGrid>

        <ContentGrid>
          <Card>
            <CardHeader>
              <CardTitle>Staff Information</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHead>
                  <tr>
                    <th>Name</th>
                    <th>Oracle Number</th>
                    <th>Department</th>
                    <th>Role</th>
                  </tr>
                </TableHead>
                <TableBody>
                  {staffData.map((staff, idx) => (
                    <tr key={idx}>
                      <td>{staff.name}</td>
                      <td>{staff.oracleNumber}</td>
                      <td>{staff.department}</td>
                      <td>{staff.role}</td>
                    </tr>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Latest Announcements</CardTitle>
            </CardHeader>
            <CardContent>
              <AnnouncementList>
                {announcements.map((item, index) => (
                  <AnnouncementItem key={index}>
                    <AnnouncementIcon bgColor={item.color}>
                      {item.icon}
                    </AnnouncementIcon>
                    <AnnouncementContent>
                      <AnnouncementTitle>{item.title}</AnnouncementTitle>
                      <AnnouncementTime>{item.time}</AnnouncementTime>
                    </AnnouncementContent>
                  </AnnouncementItem>
                ))}
              </AnnouncementList>
            </CardContent>
          </Card>
        </ContentGrid>
      </Main>
    </Layout>
  );
}
