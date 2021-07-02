import AllDashboardElements from "./components/Dashboard/Dashboard Elements/allElements";
import Workstation1 from "./components/Dashboard/Workstations/workstation1";
import Workstation2 from "./components/Dashboard/Workstations/workstation2";
import Workstation3 from "./components/Dashboard/Workstations/workstation3";
import OrderHistory from "./components/Dashboard/Dashboard Elements/elements/orderHistory";
import { Build, Dashboard, LocalShipping } from "@material-ui/icons";

const routes = [
    {
        path: '/',
        sidebarName: 'Dashboard',
        icon: Dashboard,
        component: AllDashboardElements
    },{
        path: '/workstation1',
        sidebarName: 'Workstation 1',
        icon: Build,
        component: Workstation1,
    },{
        path: '/workstation2',
        sidebarName: 'Workstation 2',
        icon: Build,
        component: Workstation2
    },{
        path: '/workstation3',
        sidebarName: 'Workstation 3',
        icon: Build,
        component: Workstation3
    },{
        path: '/orderHistory',
        sidebarName: 'Order History',
        icon: LocalShipping,
        component: OrderHistory
    }
]

export default routes;