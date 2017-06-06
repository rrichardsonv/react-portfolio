import { SET_ACTIVE_MODAL, SET_ACTIVE_SLIDER, SET_ACTIVE_PROJECT } from './actions'

export function setActiveModal (modal) {
  return {
    type: SET_ACTIVE_MODAL,
    modal: modal
  }
}
export function setActiveSlider (slider) {
  return {
    type: SET_ACTIVE_SLIDER,
    slider: slider
  }
}
export function setActiveProject (project) {
  return {
    type: SET_ACTIVE_PROJECT,
    project: project
  }
}