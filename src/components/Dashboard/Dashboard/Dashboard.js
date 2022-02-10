import * as React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import MailIcon from '@mui/icons-material/Mail'
import MenuIcon from '@mui/icons-material/Menu'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from 'react-router-dom'
import { Button} from '@mui/material'

import DashboardHome from '../DashboardHome/DashboardHome'
import MakeAdmin from '../MakeAdmin/MakeAdmin'
import Add from '../Add/Add'
import { MarkEmailReadOutlined } from '@mui/icons-material'
import useAuth from '../../../hooks/useAuth'
import Orders from '../../Orders/Orders'
import AddEvents from '../../AddEvents/AddEvents'
import MyEvents from '../../MyEvents/MyEvents'
import Review from '../../Review/Review.js'
import Pay from '../../Pay/Pay'
import ManageProducts from '../../ManageProducts/ManageProducts'

const drawerWidth = 200
function Dashboard(props) {
  const { window } = props
  const [mobileOpen, setMobileOpen] = React.useState(false)
  let { path, url } = useRouteMatch()

  const { admin, logOut } = useAuth()
  console.log(admin);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <div>
      <Toolbar />
      <Divider />

      <Link to='/'>
        <Button color='inherit'>Home</Button>
      </Link>
      <br />
      {!admin && (
        <Box>
          {/* <Link to={`${url}`}>
            <Button color='inherit'>Dashboard</Button>
          </Link> */}
          <Link to={`${url}/pay`}>
            <Button color='inherit'>Pay</Button>
          </Link>
          <br />
          <Link to={`${url}/myOrders`}>
            <Button color='inherit'>My Orders</Button>
          </Link>
          <br />
          <Link to={`${url}/review`}>
            <Button color='inherit'>Review</Button>
          </Link>
        </Box>
      )}

      {admin && (
        <Box>
          <Link to={`${url}/manageAllOrders`}>
            <Button color='inherit'>Manage All Orders</Button>
          </Link>
          <Link to={`${url}/addaProduct`}>
            <Button color='inherit'>Add A Product</Button>
          </Link>
          <Link to={`${url}/makeAdmin`}>
            <Button color='inherit'>Make Admin</Button>
          </Link>
          <Link to={`${url}/manageProducts`}>
            <Button color='inherit'>Manage Products</Button>
          </Link>
        </Box>
      )}
      <button className='nav-item btn btn-primary p-1 ' onClick={logOut}>
        Logout
      </button>
    </div>
  )

  const container =
    window !== undefined ? () => window().document.body : undefined

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position='fixed'
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' noWrap component='div'>
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component='nav'
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label='mailbox folders'
      >
        <Drawer
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant='permanent'
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component='main'
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Switch>
          {/* <Route exact path={path}>
            <DashboardHome></DashboardHome>
          </Route> */}
          <Route path={`${path}/manageAllOrders`}>
            <Orders></Orders>
          </Route>
         
          <Route path={`${path}/addaProduct`}>
            <AddEvents></AddEvents>
          </Route>
          <Route path={`${path}/pay`}>
            <Pay></Pay>
          </Route>
          <Route path={`${path}/makeAdmin`}>
            <MakeAdmin></MakeAdmin>
          </Route>
          <Route path={`${path}/review`}>
            <Review></Review>
          </Route>
          <Route path={`${path}/myOrders`}>
            <MyEvents></MyEvents>
          </Route>
          <Route path={`${path}/manageProducts`}>
            <ManageProducts></ManageProducts>
          </Route>
        </Switch>
      </Box>
    </Box>
  )
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
}

export default Dashboard
