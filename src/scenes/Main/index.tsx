import React from 'react'
import Sidebar from './Sidebar'
import { RouteComponentProps, withRouter, Redirect, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import NoteIndex from './NoteIndex'
import Page from '#/components/Page'
import Categories from './Categories'
import './index.scss'

interface MainSceneProps extends RouteComponentProps {
  authenticated: boolean | null
}

const MainScene = (props: MainSceneProps) => {
  const { match } = props

  if (!props.authenticated) {
    return <Redirect to="/auth"></Redirect>
  }

  return (
    <div className="main">
      <Sidebar matchUrl={match.url} />

      <div className="layout">
        <Switch>
          <Route
            path={`${match.url}`}
            exact={true}
            render={props => (
              <Page title="MUCNote List">
                <NoteIndex {...props} />
              </Page>
            )}
          />

          <Route
            path={`${match.url}/categories`}
            render={props => (
              <Page title="MUCNote Categories">
                <Categories {...props} />
              </Page>
            )}
          />
        </Switch>
      </div>
    </div>
  )
}

// TODO: Replace with selector
export default withRouter(connect(() => ({ authenticated: true }))(MainScene))
