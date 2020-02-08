import React from 'react'
import './index.scss'
import { Link } from 'react-router-dom'

interface SidebarProps {}

const Sidebar = (props: SidebarProps) => {
  const [isOpen, toggle] = React.useState<boolean>(false)
  const sidebarClassname = isOpen ? 'sidebar' : 'sidebar sidebar__hidden'

  const toggleSidebar = () => toggle(!isOpen)

  return (
    <div className={sidebarClassname}>
      <div className="sidebar__inner">
        <div className="sidebar-logo">
          <img src="https://avatars3.githubusercontent.com/u/54907581?s=200&v=4" />
        </div>

        <div className="sidebar-content">
          <div className="sidebar-content__items">
            <div className="sidebar-content__items__item">
              <Link to="#">
                <span className="sidebar-content__items__item__icon">
                  <i className="fas fa-list"></i>
                </span>
                <span className="ml-2">List</span>
              </Link>
            </div>
            <div className="sidebar-content__items__item">
              <Link to="#">
                <span className="sidebar-content__items__item__icon">
                  <i className="fas fa-list"></i>
                </span>
                <span className="ml-2">List</span>
              </Link>
            </div>
            <div className="sidebar-content__items__item">
              <Link to="#">
                <span className="sidebar-content__items__item__icon">
                  <i className="fas fa-list"></i>
                </span>
                <span className="ml-2">List</span>
              </Link>
            </div>
            <div className="sidebar-content__items__item">
              <Link to="#">
                <span className="sidebar-content__items__item__icon">
                  <i className="fas fa-list"></i>
                </span>
                <span className="ml-2">List</span>
              </Link>
            </div>
            <div className="sidebar-content__items__item">
              <Link to="#">
                <span className="sidebar-content__items__item__icon">
                  <i className="fas fa-list"></i>
                </span>
                <span className="ml-2">List</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="sidebar-footer text-center">
          <div className="span-button" onClick={toggleSidebar}>
            <span className="text-muted small">Toggle</span>
            <span className="ml-2">
              {isOpen ? <i className="fas fa-toggle-on"></i> : <i className="fas fa-toggle-off"></i>}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
