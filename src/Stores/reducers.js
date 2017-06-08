import { SET_ACTIVE_MODAL, SET_ACTIVE_SLIDER, SET_ACTIVE_PROJECT } from './actions'

const MODAL_DEFAULT_STATE = {
  active: ''
}

const setActiveModal = (state, action) => {
  const newState = {}
  const newModalState = {}
  Object.assign(newModalState, state.modals, {active: action.modal})
  Object.assign(newState, state, newModalState)
  return newState
}

export function modals (state = MODAL_DEFAULT_STATE, action) {
  switch (action.type) {
    case SET_ACTIVE_MODAL:
      return setActiveModal(state, action)
    default:
      return state
  }
}

const SECTION_DEFAULT_STATE = {
  slider: '',
  project: ''
}

const setActiveSlider = (state, action) => {
  const newState = {}
  const newSectionState = {}
  Object.assign(newSectionState, state.sections, {slider: action.slider})
  Object.assign(newState, state, newSectionState)
  return newState
}
const setActiveProject = (state, action) => {
  const newState = {}
  const newSectionState = {}
  Object.assign(newSectionState, state.sections, {project: action.project})
  Object.assign(newState, state, newSectionState)
  return newState
}

export function sections (state = SECTION_DEFAULT_STATE, action) {
  switch (action.type) {
    case SET_ACTIVE_SLIDER:
      return setActiveSlider(state, action)
    case SET_ACTIVE_PROJECT:
      return setActiveProject(state, action)
    default:
      return state
  }
}
