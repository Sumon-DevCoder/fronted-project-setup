import FacultyDashboard from "../pages/admin/faculty/FacultyDashboard";
import OfferedCoursed from "../pages/admin/faculty/OfferedCoursed";

export const facultyPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <FacultyDashboard />,
  },
  {
    name: "Offered Course",
    path: "offered-course",
    element: <OfferedCoursed />,
  },
];
