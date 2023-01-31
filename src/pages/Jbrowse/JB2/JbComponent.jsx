import React from 'react'
import '@fontsource/roboto'
import {
  createViewState,
  JBrowseLinearGenomeView,
} from '@jbrowse/react-linear-genome-view'
import assembly from './assembly'
import tracks from './tracks'
import defaultSession from './defaultSession'

export default function View() {
  const state = createViewState({
    assembly: {
      assembly
    },
    tracks: [
      tracks
    ],
    defaultSession
  })
  return <JBrowseLinearGenomeView viewState={state} />
}