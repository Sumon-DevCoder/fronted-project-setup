import OfferedCoursed from "../pages/admin/faculty/OfferedCoursed";
import StudentDashboard from "../pages/admin/student/StudentDashboard";

export const studentPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <StudentDashboard />,
  },
  {
    name: "Offered Course",
    path: "offered-course",
    element: <OfferedCoursed />,
  },
];
