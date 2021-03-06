// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)


// ----------------------------------------------------
// Note(lewagon): ABOVE IS RAILS DEFAULT CONFIGURATION
// WRITE YOUR OWN JS STARTING FROM HERE 👇
// ----------------------------------------------------

// External imports
import "bootstrap";

import { addNewProject } from '../components/add_project_button';
import { addNewSong } from '../components/modal';
import { initWavesurfer } from '../components/wavesurfer';
import { getAudio } from '../components/get_audio';
import { editProject } from "../components/edit_project";
import { initNoteAutoSave } from '../components/note';
import { togglevr } from "../components/switchbtn";
import { toggleVrIndex } from "../components/toggle_vr_index";
import { submitAutoInstru } from '../components/submit_auto_instru';

document.addEventListener('turbolinks:load', () => {
  initWavesurfer();
  getAudio();
  addNewSong();
  addNewProject();
  editProject();
  initNoteAutoSave();
  togglevr();
  toggleVrIndex();
  submitAutoInstru();
});
